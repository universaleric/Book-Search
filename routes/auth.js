function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"]?.split(' ')[1]

  if(token) {
    verifyJWT.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
      if(err) return res.json({
        isLoggedIn: false,
        message: "Failed To Authenticate"
      })
      req.user = {};
      req.user.id = decoded.id
      req.user.email = decoded.email
      next()
    })
  } else {
    res.json({message: "Incorrect Token Given", isLoggedIn: false})
  }
}
