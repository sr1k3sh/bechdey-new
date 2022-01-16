const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validatePasswordInput = require('../../validation/password');
const validatePostForm = require("../../validation/postProduct");
// Load User model
const User = require("../../models/User");

const Password = require('../../models/Password');

const AddForm = require("../../models/AddForm");

const File = require('../../models/File');
const multer = require("multer");


const storage = multer.diskStorage({
  destination: (req, res, cb) => {
      cb(null, "./public");
  },
  filename: (req, res, cb) => {
      cb(null, res.originalname);
  }
});
const upload = multer({ storage: storage });

// @route POST api/users/passwords
// @desc add password
// @access Public
router.post("/password",(req,res)=>{
  const { errors, isValid } = validatePasswordInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }
  Password.findOne({url:req.body.url}).then(url =>{
    if (url) {
      return res.status(400).json({ url: "url already exists" });
    } else {
        const newData = new Password({
          url: req.body.url,
          password: req.body.password,
          userId: req.body.userId,
          userName: req.body.userName
        });

        newData
          .save()
          .then(data => res.json(data))
          .catch(err => console.log(err));
    }
  });
});

// @route POST api/users/get/password
// @desc get password table list
// @access Public
router.post('/get/password', function (req, res) {
  Password.find({userId:req.body.userId}, function(err, posts){
      if(err){
          console.log(err);
      }
      else {
          res.json(posts);
      }
  });
});

// @route POST api/users/delete/password
// @desc delete password from table list
// @access Public
router.delete('/delete/password', function (req, res) {
  var url = req.body.url;
  Password.deleteOne({ url: url }, function (err, results) {
    if(err){
      console.log(err);
    }
    else {
      Password.find({userId:req.body.userId}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
      });
    }
  });
});


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});



router.post("/upload",upload.single("data"), async(req,res)=>{
  try{
    const newData = new File({
      name:req.file.filename,
      test:req.body.test
    })
    res.status(200).json({
      status: "success",
      message: "File created successfully!!",
    });
    newData
          .save()
          .then(data => res.json(data))
          .catch(err => console.log(err));
  }catch(err){
    res.json({
      err
    })
  }
})

router.post('/addpost',upload.single("file"),async(req,res)=>{
  const { errors, isValid } = validatePostForm(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }
  await AddForm.findOne({title:req.body.title}).then(t =>{
    if (t) {
      return res.status(400).json({ title: "url already exists" });
    } else {
        const newData = new AddForm({
          userId: req.body.userId,
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          negotiate: req.body.negotiate,
          condition: req.body.condition,
          usedFor: req.body.usedFor,
          name:req.file.filename,
        });

        newData
          .save()
          .then(data => res.json(data))
          .catch(err => console.log(err));
    }
  });
});
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
});

module.exports = router;