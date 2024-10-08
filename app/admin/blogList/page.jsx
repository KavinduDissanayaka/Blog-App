'use client'
import { assets } from '@/Assets/assets'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'



const page = () => {

const [blogs,setBlogs] = useState([]);

const fetchBlogs = async () =>{
  const response = await axios.get('/api/blog');
  setBlogs(response.data.blogs);
}

useEffect(()=>{
  fetchBlogs()
})

  return (
    <>
    <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="" />
          </div> 
          </div>  
    <div className = 'flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table classname="w-full text-sm text-gray-500" >
          <thead className="text-xs text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-12 py-3">
                Author name
              </th>
              <th scope="col" className="px-12 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-12 py-3">
                 Data
              </th>
              <th scope="col" className="px-12 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item,index)=>{
              return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date}/>
            })}
              
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default page