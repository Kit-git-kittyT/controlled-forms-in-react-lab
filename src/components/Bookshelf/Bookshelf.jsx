import { useState } from 'react';

const BookShelf=()=>{
const [books, setBooks] =useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);
const [newBook, setNewBook] = useState({
    title:'',
    author:''
});

const handleChange = (e)=>{
    setNewBook({...newBook, [e.target.name]: e.target.value})
};

const handleSubmit = (e)=>{
  e.preventDefault();
  setBooks([...books, newBook]);
};

return (

  <div className="bookshelfDiv">
    <div className="formDiv">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
      <input
      type = "text"
      id = "title"
      name = "title"
      value = {newBook.title}
      onChange = {handleChange}
      />
      <label>Author:</label>
   <input
    type = "text"
    id = "author"
    name = "author"
    value = {newBook.author}
    onChange={handleChange}
    />
  <button type="submit">Add Book</button>
    </form>
  </div>
    <ul>
        {books.map((book, index)=>(
            <li
            key={index}
            ><div className="bookCardsDiv">Title: {book.title}, by {book.author}</div></li>
        ))}
    </ul>
</div>
)
}

export default BookShelf