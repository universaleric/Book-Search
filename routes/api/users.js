const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");  

app.post("/signup", async (req, res) => {
  const user = req.body;

  const takenEmail = await User.findOne({ email: user.email });

  if (takenEmail) {
    res.json({ message: "Email has already been taken" });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);

    const dbUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.toLowerCase(),
      password: user.password,
    });

    dbUser.save();
    res.json({ message: "Success" });
  }
});

app.post("/login", (req, res) => {
  const userLogginIn = req.body;

  User.findOne({email: userLoggingIn.email})
    .then(dbUser => {
      if(!dbUser) {
        return res.json({message: "Invalid Email or Password"})
      }
      bcrypt.compare(userLoggingIn.password, dbUser.password)
      .then(isCorrect => {
        if(isCorrect) {
          const payload = {
            id: dbUser._id,
            email: dbUser.email,
          }
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn: 86400},
            (err, token) => {
              if(err) return res.json({message: err})
              return res.json({
                message: "Success",
                token: "Bearer" + token
              })
            }
          )
        } else {
          return res.json({
            message: "Invalid Email or Password"
          })
        }
      })
    })
})

app.get("/getEmail", verifyJWT, (req, res) => {
  res.json({isLoggedIn: true, email: req.user.email})
})
