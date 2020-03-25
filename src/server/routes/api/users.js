const passport = require('passport');
import {Router} from 'express';
const bodyParser = require('body-parser');
const router = Router();
router.use(bodyParser.json());
import {Users} from '../../mongoose/index';
import {auth} from '../auth';

// POST new user route (optional, everyone has access)
router.post('/', auth.optional, async (req, res, next) => {
  const {body: {user}} = req;
  console.log('body -', req.body);
  if (!user.login) {
    return res.status(d).json({
      errors: {
        login: 'is required',
      },
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const result = await Users.findOne({login: user.login});
  console.log('result -', result);
  if (!!result) {
    return res.status(422).json({
      errors: {
        login: 'email is busy',
      },
    });
  }
  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
      .then(() => res.json({user: finalUser.toAuthJSON()}));
});

// POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  const {body: {user}} = req;
  console.log('user -', user);
  if (!user.login) {
    return res.status(422).json({
      errors: {
        login: 'is required',
      },
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }
  console.log('passport - ', passport);
  return passport.authenticate('local', {session: false}, (err, passportUser, info) => {
    console.log('passportUser - ', passportUser);
    console.log('info - ', info);
    if (err) {
      console.log('err - ', err);
      return next(err);
    }

    if (passportUser) {
      console.log('passportUser - ', passportUser);
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({user: user.toAuthJSON()});
    }

    return status(400).info;
  })(req, res, next);
});

// GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const {payload: {id}} = req;

  return Users.findById(id)
      .then((user) => {
        if (!user) {
          return res.sendStatus(400);
        }

        return res.json({user: user.toAuthJSON()});
      });
});

export default router;