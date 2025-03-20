import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const BookList = () => {
const { data, loading, error } = useContext(DataContext); 

if (loading) {
    return <p>Loading...</p>;
}
if (error) {
    return <p>{error}</p>;
}

  return (
    <div className='Books'>
      {data.map((authorData, index) => (
        <div key={index}>
          <h2>Author: {authorData.Author}</h2>
          {authorData.Books.map((book, bookIndex) => (
            <div key={bookIndex}>
              <h3>Book: {book.Name}</h3>
              <h4>Title: {book.Title}</h4>

              <div className='part1'>
                <h5>Part 1</h5>
                <ul>
                  {Object.entries(book.part1[0]).map(([key, value], index) => (
                    <li key={index}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              </div>

              <div className='part2'>
                <h5>Part 2</h5>
                <ul>
                  {Object.entries(book.part2[0]).map(([key, value], index) => (
                    <li key={index}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BookList;
