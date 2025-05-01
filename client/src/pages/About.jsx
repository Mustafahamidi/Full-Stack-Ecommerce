import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-0-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, eveniet! Assumenda obcaecati quos omnis eius reiciendis fuga veritatis, officia ea expedita commodi totam iure nihil quo voluptates impedit. Nobis, deserunt.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, repellendus fugit, explicabo consequatur eveniet aut nisi omnis quod nostrum pariatur adipisci ea similique deleniti iste, expedita tempora! Cumque, dignissimos exercitationem.</p>
            <b>Our Mission</b>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla consectetur odit nobis tempore libero, maxime rerum eius cumque aut laborum amet ab, natus, aliquam magnam commodi quasi quia. Corporis.</p>
          </div>
    </div>
    <div className='text-4xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row tex-sm mb-20 gap-5'>
      <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis expedita illo deserunt nihil odio cumque magnam, laudantium, quasi ipsum reprehenderit, delectus soluta mollitia voluptatem necessitatibus voluptas earum explicabo laborum.</p>
      </div>

      <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis expedita illo deserunt nihil odio cumque magnam, laudantium, quasi ipsum reprehenderit, delectus soluta mollitia voluptatem necessitatibus voluptas earum explicabo laborum.</p>
      </div>

      <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis expedita illo deserunt nihil odio cumque magnam, laudantium, quasi ipsum reprehenderit, delectus soluta mollitia voluptatem necessitatibus voluptas earum explicabo laborum.</p>
      </div>
    </div>
    <NewsletterBox />
  </div>

  )
}

export default About