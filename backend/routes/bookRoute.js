const express = require("express");
const book = require("../models/bookModel");
const router = express.Router();

router.get("/GetAllBooks", (req, res) => {
  book.find({}).then((data) => {
    res.json(data);
  });
});

router.post("/GetBook/:id", (req, res) => {
  const id = req.params.id;
  book.findOne({ _id: id }).then((data) => {
    res.json(data);
  });
});

router.post("/CreateBook", (req, res) => {
  const { bookname, author, tel } = req.body;
  book.create({ bookname, author, tel }).then((data) => {
    res.json({ message: "Created Success", data });
  });
});

router.patch("/UpdateBook/:id", (req, res) => {
  const id = req.params.id;
  const { bookname, author, tel } = req.body;
  book.findByIdAndUpdate(id, { bookname, author, tel }).then(() => {
    res.json({ message: "Updated Success" });
  });
});

router.delete("/DeleteBook/:id", (req, res) => {
  const id = req.params.id;
  book.findByIdAndDelete({ _id: id }).then(() => {
    res.json({ message: "Deleted Success" });
  });
});

module.exports = router;
