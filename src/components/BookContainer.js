import React, {useState, useEffect} from 'react';
import { BOOKS_API } from '../utils/constant';

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
      setbookList(data.items);
      console.log(bookList);
    }
    setbookList(data.items);
    console.log(data);
    console.log(bookList);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
 }
  
  


  return (
    <div>
    <ul>{bookList.map((book)=>(<li key={book?.id}>{book?.volumeInfo?.title}
     
    </li>))}</ul>
      
    </div>
  )
}

export default BookContainer
