import React, { useState } from 'react';
import { Button } from '../components/index';
import appwriteService from '../appwrite/config'
import { Link, NavLink } from 'react-router-dom';


 function SeachBook () {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

   
const handleSearch = async () => {
    console.log(searchTerm)
    try {
      const books = await appwriteService.searchBooks(searchTerm);
      setResults(books);
      console.log(books)
    } catch (error) {
      console.error('Search error:', error);
    }
  };

    return (
    
        <div>
            <h1>Search Books</h1>
            <input
                type="text"
                className=" text-black flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Search by author or book name"
                value={searchTerm}
                onInput={(e) => setSearchTerm(e.target.value)}
            />
            <button 
            className=' mx-2' 
            // type='submit'
            onClick={handleSearch}>Search</button>
            <div>
                {results.map((book) => (
                    <div key={book.$id}>
                        <h2>{book.title}</h2>
                        <p>by {book.auther}</p>
                    </div>
                ))}
            </div>
        </div>
     
    );
};

export default SeachBook;
