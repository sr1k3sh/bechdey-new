const express = require("express");
const router = express.Router();

const validatePostForm = require("../../validation/postProduct");

// Load User model

const AddForm = require("../../models/AddForm");


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

router.post('/addpost',upload.array('file', 10),async(req,res)=>{
  const { errors, isValid } = validatePostForm(JSON.parse(JSON.stringify(req.body)));
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
        name:req.files.map(f=>f.originalname),
        category:req.body.category,
        subcategory:req.body.subcategory,
        maincategory:req.body.maincategory,
        location:req.body.location
      });
      
        newData
          .save()
          .then(data => res.status(200).json({ message: "update data" }))
          .catch(err => console.log(err));
    }
  });
});

const myCustomLabels = {
  totalDocs: 'count',
  docs: 'data',
  limit: 'pageSize',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'totalPages',
  pagingCounter: 'slNo',
  meta: 'paginator'
};

router.post('/get/ad', function (req, res) {
  AddForm.paginate({}, {customLabels: myCustomLabels, page: req.query.page, limit: req.query.limit ,sort: { createdAt: -1 }})
  .then(result => {
    res.json(result)
  })

});


router.post('/filter/ad',function(req,res){
  AddForm.paginate( req.query, {customLabels: myCustomLabels, page: req.query.page, limit: req.query.limit ,sort: { createdAt: -1 }}).then(result => {
      res.json(result)
    });
})

module.exports = router;