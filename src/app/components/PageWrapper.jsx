"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Logo from "../images/logo.png";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-950">
            <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-32 h-32 border-2 border-blue-500 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute w-24 h-24 border-2 border-blue-600 rounded-full animate-pulse"></div>
                </div>

                <div className="relative z-10 w-50 h-20 flex items-center justify-center animate-bounce">
                    <Image src={Logo} alt='logo' className='object-contain h-20 w-40'/>
                </div>

                <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                    <div className="relative w-28 h-28">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const PageWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let resourcesLoaded = false
        let componentsReady = false

        if (document.readyState === 'complete') {
            resourcesLoaded = true
        }

        const handleLoad = () => {
            resourcesLoaded = true
            checkIfReady()
        }

        const handleDOMContentLoaded = () => {
            componentsReady = true
            checkIfReady()
        }

        const checkIfReady = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (resourcesLoaded && componentsReady) {
                        setTimeout(() => {
                            setIsLoading(false)
                        }, 300)
                    }
                })
            })
        }

        window.addEventListener('load', handleLoad)
        document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)

        const componentLoadTimer = setTimeout(() => {
            componentsReady = true
            checkIfReady()
        }, 100)

        if (document.readyState === 'complete') {
            handleLoad()
            handleDOMContentLoaded()
        }

        return () => {
            window.removeEventListener('load', handleLoad)
            document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded)
            clearTimeout(componentLoadTimer)
        }
    }, [])

    return (
        <>
            {isLoading && <Loader />}
            <div
                className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                {children}
            </div>
        </>
    )
}