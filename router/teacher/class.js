const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// const upload = multer({
//   dest: './uploads'
// });

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function(req, res, next) {
//       next(null, './uploads')
//     },
//     filename: function(req, res, next) {
//       // console.log(res);
//       // next(null, 'image.jpg') //fixed name and extension everytime
//       // next(null, res.originalname) //orignal file name
//       next (null, Date.now()+path.extname(res.originalname)) //dynamic random filename with correct extension
//     }
//   })
// });

const upload = multer({
  storage: multer.memoryStorage({})
});

router.get("/getall", function (req, res) {
  console.log(req.session);
  res.json({ msg: "All classes created by you" });
});

router.post("/create", function (req, res) {
  console.log(req.body)
  res.status(501).json({ msg: "Created new class" });
});

router.get("/:id", function (req, res) {
  res.json({ msg: "You are requesting the class"+req.params.id });
});

router.post("/upload", upload.single('file'), function (req, res) {
  res.set({'Content-Type':req.file.mimetype})
  res.send(req.file.buffer);
});

router.post("/download", function (req, res) {
  res.sendFile(path.join(__dirname, '../../uploads/1620220588357.jpg'));
});


module.exports = router;