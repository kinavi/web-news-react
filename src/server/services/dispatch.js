export const dispatchAndRespond = (req, res, action) => {
  req.store.dispatch(action);
  res.status(200).json(action);
};

export const respondAction = (req, res, action, code) =>{
  res.status(code).json(action);
};
