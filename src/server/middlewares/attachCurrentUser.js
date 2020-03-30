import {Users} from '../mongoose/index';

export default async (req, res, next) => {
  console.log('++currentUser++')
  try {
    const decodedUser = req.userData.data;
    console.log('decodedUser - ', decodedUser);
    const user = await Users.findOne({_id: decodedUser.id});
    if (!user) {
      res.status(401).end();
    }
    req.currentUser = user;
    return next();
  } catch (e) {
    return res.json(e).status(500);
  }
};
