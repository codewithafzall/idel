import React from 'react'
import Banner from './components/Home/Banner'
import Products from './components/Home/Products'
import Stories from './components/Home/Stories'
import Achievement from './components/Home/Achievement'
import Process from './components/Home/Process'
import ProjectsSwiper from './components/Home/Projects'
import Testimonials from './components/Home/Testimonials'
import Form from './components/Form'
import { PageWrapper } from './components/PageWrapper'

const page = () => {
  return (
    <PageWrapper>
      <main>
        <Banner />
        <Products />
        <Stories />
        <section className='container py-10'>
          <iframe className='rounded-2xl' src="https://my.atlist.com/map/67713080-f4e4-41ee-b1bd-7ffc9b26c43d?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="600px" loading="lazy" allowfullscreen id="atlist-embed"></iframe>
        </section>
        <Achievement />
        <Process />
        <ProjectsSwiper />
        <Testimonials />
        <Form />
      </main>
    </PageWrapper>
  )
}

export default page
