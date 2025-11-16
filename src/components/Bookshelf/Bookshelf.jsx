import { useState } from 'react';

const BookShelf=(props)=>{
const [books, setBooks] =useState([]);
const [newBook, setNewBook] = useState({
    title:'',
    author:''
});

const handleChange = (e)=>{
    setNewBook({...newBook, [e.target.title]: e.target.value})
};

const handleSubmit = (e)=>{
    e.preventDefault();
    setBooks({...books, [e.target.title]: e.target.value})
};

return(
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <input
    id = "title"
    name = "title"
    value = {newBook.title}
    onChange = {handleChange}
    />
    </div>
    <div>
    <input
    id = "author"
    name = "author"
    value = {newBook.author}
    onChange={handleChange}
    />
  </div>
    <ul>
        {books.map((book)=>(
            <li
            key={book._id}
            onClick={()=> handleSubmit(book)}
            >{book}</li>
        ))};
    </ul>
  <div className="bookCardsDiv">Title: {book.title}, by {book.author}</div>
  <button type="submit" >Submit</button>
</div>
)
};

export default BookShelf