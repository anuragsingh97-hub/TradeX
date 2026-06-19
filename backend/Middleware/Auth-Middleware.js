const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  // console.log(`token`,token);
  if (!token) {
    return res.status(401).json({
      message: "Please login",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.TOKEN_KEY
    );

    req.userId = decoded.id;
    // console.log("User ID from token:", req.userId);

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = verifyUser;