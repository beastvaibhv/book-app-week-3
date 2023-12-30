const BOOKS_API_KEY = "AIzaSyDZZXYwbbcNDrORLcYJDhwccxIhr2Lxla8";
const MAX_RESULTS = 40;
export const BOOKS_API= `https://www.googleapis.com/books/v1/volumes?q=*&maxResults=${MAX_RESULTS}&key=${BOOKS_API_KEY}`;