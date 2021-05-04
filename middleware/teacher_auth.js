const checkSession = function (req, res, next) {
  if (req.session && req.session.user && req.session.user.logged_in) {
    next();
  } else res.status(401).json({ err: "Invalid session" });
};

module.exports = { checkSession };
