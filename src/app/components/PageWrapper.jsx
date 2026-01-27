"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Logo from "../images/logo.png";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
            <div className="relative">
                {/* Logo */}
                <div className="relative z-10 w-40 h-20 flex items-center justify-center">
                    <Image src={Logo} alt='logo' className='object-contain h-20 w-40' />
                </div>

                {/* Multiple orbiting particles at different speeds */}
                <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                    <div className="relative w-32 h-32">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"></div>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
                    <div className="relative w-40 h-40">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-500/50"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-500/50"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-500/50"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-violet-400 rounded-full shadow-lg shadow-violet-500/50"></div>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '5s' }}>
                    <div className="relative w-48 h-48">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
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