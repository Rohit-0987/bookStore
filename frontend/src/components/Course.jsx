import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import {Link} from 'react-router-dom'
import axios from 'axios';
function course() {    
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])
  return (
    <>
      <div className='max-w--screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className=' text-4xl md:text-2xl'>We're Delighted to have you <span className='text-pink-500'>HERE!:)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi ipsam voluptas sapiente laudantium dolorem expedita vero ducimus! Quia corrupti ad culpa cum aliquam error alias labore earum hic, ea, voluptates excepturi! Nemo id architecto hic, deleniti quis exercitationem, illo deserunt laudantium consectetur quas ducimus aperiam vitae consequuntur fuga dolores.</p>
            <Link to="/">
                <button className="btn btn-secondary mt-7 hover:bg-pink-600 duration-200">Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
                book.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default course
