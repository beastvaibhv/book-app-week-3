import React, {useState, useEffect} from 'react';
import { BOOKS_API } from '../utils/constant';
import Shimmer from './Shimmer';

const BookContainer = () => {
  const [bookList, setbookList] = useState([]);


useEffect(()=>{
    getBooks();
}, [])


 const getBooks=()=>{
  fetch(BOOKS_API)
  .then(response => response.json())
  .then(data => {
    // Handle the data received from the API
    if(data){
      setbookList(data?.items);
    }
    
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
 }
  
  

 return (
  <div>
  {bookList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='book-container'>
   { bookList.map((book) => (
      <div  className="book-image-container" key={book?.id}>
        <img  className="book-image" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      </div>
    ))
   }
    </div>
    )}
</div>
  )
}

export default BookContainer
