import React, { useState } from 'react'

import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";

import Bk1 from "../../assets/books/BK1.jpeg";
import Bk2 from "../../assets/books/BK2.jpeg"
import Bk3 from "../../assets/books/BK3.jpeg"
import Bk4 from "../../assets/books/BK4.jpeg"
import Bk5 from "../../assets/books/BK5.jpeg"
import Bk6 from "../../assets/books/BK6.jpeg"
import Bk7 from "../../assets/books/BK7.jpeg"
import Bk8 from "../../assets/books/BK8.jpeg"
import Bk9 from "../../assets/books/BK9.jpeg"
import Bk10 from "../../assets/books/BK10.jpeg"

import { FaStar } from "react-icons/fa6";

const allBooksData = [
    {
      id: 1,
      img: Bk1,
      title: "Who's there",
      rating: 5.0,
      author: "Someone",
    },
    {
      id: 2,
      img: Bk2,
      title: "His Life",
      rating: 4.5,
      author: "John",
    },
    {
      id: 3,
      img: Bk3,
      title: "Lost boys",
      rating: 4.7,
      author: "Lost Girl",
    },
    {
      id: 4,
      img: Bk4,
      title: "His Life",
      rating: 4.4,
      author: "Someone",
    },
    {
      id: 5,
      img: Bk5,
      title: "Who's There",
      rating: 4.5,
      author: "Someone",
    },
    {
      id: 6,
      img: Bk6,
      title: "The Great Book",
      rating: 4.8,
      author: "Author 6",
    },
    {
      id: 7,
      img: Bk7,
      title: "The Journey",
      rating: 4.9,
      author: "Author 7",
    },
    {
      id: 8,
      img: Bk8,
      title: "Mystery Island",
      rating: 4.3,
      author: "Author 8",
    },
    {
      id: 9,
      img: Bk9,
      title: "The Last Stand",
      rating: 4.7,
      author: "Author 9",
    },
    {
      id: 10,
      img: Bk10,
      title: "Adventures of Tom",
      rating: 4.6,
      author: "Author 10",
    },
    
  ];

const AllBooks = () => {
  const [visibleBooks, setVisibleBooks] = useState(5); // Initially display 5 books

  const handleViewMore = () => {
    setVisibleBooks(prevVisibleBooks => prevVisibleBooks + 8); // Show 8 more books
  };

  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {allBooksData.slice(0, visibleBooks).map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {visibleBooks < allBooksData.length && (
              <div className="flex justify-center">
                <button
                  onClick={handleViewMore}
                  className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
                >
                  View All Books
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
