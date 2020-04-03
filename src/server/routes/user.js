const passport = require('passport');
import {Router} from 'express';
const router = Router();

import {Users} from '../mongoose/index';
import {auth} from '../services/auth';

import {respondAction} from '../services/dispatch';

import {setUserData, nullUserData} from '../../store/redusers/AuthRedusers';
import {
  alertLogin,
  alertPassword,
  allAlert,
} from '../../store/redusers/FormRedusers';

// POST new user route (optional, everyone has access)
router.post('/', auth.optional, async (req, res, next) => {
  const {body: {user}} = req;
  if (!user.login) {
    return res.status(422).json(alertLogin('login is required'));
  }

  if (!user.password) {
    return res.status(422).json(alertPassword('password is required'));
  }

  const result = await Users.findOne({login: user.login});
  console.log('result -', result);
  if (!!result) {
    return res.status(422).json(alertLogin('login is busy'));
  }
  console.log('user - ', user);
  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
      .then(() => res.json({user: finalUser.toAuthJSON()}));
});

// POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const {body: {user}} = req;
  console.log('<---->');
  if (!user.login) {
    return res.status(422).json(alertLogin('login is required'));
  }
  if (!user.password) {
    return res.status(422).json(alertPassword('password is required'));
  }
  passport.authenticate('local', {session: false}, (err, passportUser, info) => {
    if (err) {
      return res.status(422).json(allAlert('login or password is invalid'));
      // console.log('err - ', err);
      // return next(err);
    }

    if (passportUser) {
      // console.log('passportUser 2- ', passportUser);
      const user = passportUser;
      user.token = passportUser.generateJWT();

      res.cookie('Token', user.token);

      return respondAction(req, res, setUserData(user.toAuthJSON()), 200);
      // return res.json({user: user.toAuthJSON()});
    }

    return status(400).info;
  })(req, res);
});

const handlerError = (err, req, res, next) =>{
  if (err.name === 'UnauthorizedError') {
    console.log('error name - ', err.name);
    return respondAction(req, res, nullUserData(), 200);
    // dispatchAndRespond(req, res, nullUserData());
    // return res.status(401).send('invalid token...');
  }
  next();
};

// GET current route (required, only authenticated users have access) attachCurrentUser auth.required,
router.post('/current', auth.required, handlerError, (req, res, next) => {
  const {user: {id}} = req;

  return Users.findById(id)
      .then((user) => {
        if (!user) {
          res.sendStatus(400);
        }

        console.log('+');
        return respondAction(req, res, setUserData(user.toAuthJSON()), 200);
      });
});


export default router;
