const MIN_CHAR_PASSWORD = 6;
const MIN_CHAR_NAME = 8;

module.exports = async (req, res, next) => {
  const { displayName, password } = req.body;

  if (displayName.length < MIN_CHAR_NAME) {
    return res.status(400).json({
       message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (password.length < MIN_CHAR_PASSWORD) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
   });
  }

  return next();
};