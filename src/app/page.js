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
       <Banner/>
       <Products/>
       <Stories/>
       <Achievement/>
       <Process/>
       <ProjectsSwiper/>
       <Testimonials/>
       <Form/>
    </main>
    </PageWrapper>
  )
}

export default page
