const Book = require('./book.model');


const postABOOK =  async (req, res) => {
  
    try{
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book created successfully"});
    }
    catch(error){
        console.log("error creating book" ,error);
        res.status(500).send({message: "failed to create book"});
    }
}



//get all books

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({createdAt: -1});
        res.status(200).send(books);
        
    } catch (error) {
        console.error("error fetching book" ,error);
        res.status(500).send({message: "failed to fetch books"});
    }
}


const getSingleBook = async (req, res) => {
    try {
        const{id} =req.params;
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message: "book not found"});
        }
        res.status(200).send(book);

    } catch (error) {
        console.error("error fetching book" ,error);
        res.status(500).send({message: "failed to fetch book"});
    }
}



const updateBook = async (req, res) => {
    try {
        const{id} =req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedBook ){
            res.status(404).send({message: "book not found"});
        }
        res.status(200).send({
            book:updatedBook
        });

    } catch (error) {
        console.error("error updating book" ,error);
        res.status(500).send({message: "failed to fetch book"});
    }
}



const deleteBook = async (req, res) => {
    try {
        const{id} =req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook ){
            res.status(404).send({message: "book not found"});
        }
        res.status(200).send({
            message: "book deleted successfully",
            book:deletedBook
        })
    } catch (error) {
        console.error("error deleting book" ,error);
        res.status(500).send({message: "failed to delete book"});
    }
}

module.exports = {
    postABOOK,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
    

}