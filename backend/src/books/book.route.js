const express = require("express");
const router = express.Router();
const Book = require("./book.model");
const { postABOOK } = require("./book.controller");
const { getAllBooks } = require("./book.controller");
const { getSingleBook } = require("./book.controller");
const { updateBook } = require("./book.controller");
const { deleteBook } = require("./book.controller");

// post a book
router.post("/create-book", postABOOK)


// get all book

router.get("/", getAllBooks)

//single book endpoint
router.get("/:id" , getSingleBook);

//update a book endpoint
router.put("/edit/:id", updateBook);

//delete a book endpoint
router.delete("/delete/:id",deleteBook);







module.exports = router;