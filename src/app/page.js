"use client";
import React, { useState, useEffect } from 'react'
import Banner from './components/Home/Banner'
import Products from './components/Home/Products'
import Stories from './components/Home/Stories'
import Achievement from './components/Home/Achievement'
import Process from './components/Home/Process'
import ProjectsSwiper from './components/Home/Projects'
import Testimonials from './components/Home/Testimonials'
import Form from './components/Form'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-600 text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}

const Page = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [componentsLoaded, setComponentsLoaded] = useState(false)

  useEffect(() => {
    // Track if all resources are loaded
    let resourcesLoaded = false
    let componentsReady = false

    // Check if document is already complete
    if (document.readyState === 'complete') {
      resourcesLoaded = true
    }

    // Listen for window load event (all resources including images, stylesheets, etc.)
    const handleLoad = () => {
      resourcesLoaded = true
      checkIfReady()
    }

    // Listen for DOM content loaded
    const handleDOMContentLoaded = () => {
      componentsReady = true
      checkIfReady()
    }

    const checkIfReady = () => {
      // Use requestAnimationFrame to ensure components are painted
      requestAnimationFrame(() => {
        // Double RAF for more reliability
        requestAnimationFrame(() => {
          if (resourcesLoaded && componentsReady) {
            // Small delay to ensure smooth transition
            setTimeout(() => {
              setIsLoading(false)
            }, 300)
          }
        })
      })
    }

    // Add event listeners
    window.addEventListener('load', handleLoad)
    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)

    // Mark components as loaded after mount
    const componentLoadTimer = setTimeout(() => {
      componentsReady = true
      setComponentsLoaded(true)
      checkIfReady()
    }, 100)

    // Initial check in case everything is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
      handleDOMContentLoaded()
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad)
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded)
      clearTimeout(componentLoadTimer)
    }
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      <main 
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Banner />
        <Products />
        <Products />
        <Stories />
        <Achievement />
        <Process />
        <ProjectsSwiper />
        <Testimonials />
        <Form />
      </main>
    </>
  )
}

export default Page