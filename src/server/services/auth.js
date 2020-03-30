const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;

  if(authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }
  return null;
};

const getTokenFromCookies = (req) =>{
  const {Token} = req.cookies;
  console.log('cookies - ', req.cookies)
  if (Token) {
    return Token;
  }
  return null;
};

export const auth = {
  required: jwt({
    secret: '23wt20klU',
    // requestProperty: 'userData',
    getToken: getTokenFromCookies,
  }),
  optional: jwt({
    secret: '23wt20klU',
    // requestProperty: 'userData',
    getToken: getTokenFromCookies,
    credentialsRequired: false,
  }),
};
