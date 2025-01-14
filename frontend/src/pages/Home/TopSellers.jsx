import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Pagination , Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/cart/booksApi';

const categories = ["Choose a Genre","Business","Fiction","Horror","Adventure"]

const TopSellers = () => {

    
    const[selectedCategory , setselectedCategory] = useState("Choose a Genre");

    const {data: books = []} = useFetchAllBooksQuery();
   
    

    // const filteredBooks = selectedCategory === "Choose a Genre" ? books: books.filter(book =>
    //     book.categary === selectedCategory.toLowerCase())

    const filteredBooks = selectedCategory === "Choose a Genre"
    ? books
    : books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase());


  return (
    <div className='py-10' >
      <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
      {/*caterory filtering*/}
      <div className='mb-8 flex items-center'>
        <select
        onChange={(e) => setselectedCategory(e.target.value)}
        name='category' id='category' className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
            {
                categories.map((categary,index)=>(
                    <option key={index} value={categary}>{categary}</option>
                ))
            }
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >

{
           filteredBooks.length > 0 && filteredBooks.map((book, index) =>(
                <SwiperSlide key={index}>
                    <BookCard  book={book}/>
                </SwiperSlide>

                
            ))
        }

        
       
      </Swiper>

       
      
    </div>
  )
}

export default TopSellers
