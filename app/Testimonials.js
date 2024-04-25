"use client"
import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Testimonial from './Components/Testimonial'
import style from './Testimonials.module.css'
const Testimonials = () => {
  return (
    <>
    <div id={style.new} className='w-full h-[100vh] '>
        <h1 className='font-[Raleway] text-[#81C408] text-3xl text-center mt-6 font-bold'>Our Testimonial</h1>
        <h1 className='font-[Raleway] text-[#45595B] text-5xl text-center mt-3 font-extrabold'>Our Client Saying!</h1>
        <div className='flex justify-end gap-7 mr-24 mt-3'>
        <button className='px-7 py-2 border-2 border-[#FFB524] rounded-full text-[#81C408] text-xl hover:bg-[#FFB524] hover:text-white transition-colors'><AiOutlineArrowLeft/></button>
        <button className='px-7 py-2 border-2 border-[#FFB524] rounded-full text-[#81C408] text-xl hover:bg-[#FFB524] hover:text-white transition-colors'><AiOutlineArrowRight/></button>
        </div>
        <div id={style.main} className='grid grid-cols-2 mt-8 ml-20'>
            <Testimonial/>
            <Testimonial/>
        </div>
    </div>
    </>
  )
}

export default Testimonials