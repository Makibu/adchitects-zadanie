'use client'

import Logo from '@/public/assets/logo.svg'
import {useEffect, useState} from "react"
import Image from "next/image"
import Link from "next/link"
import {AnimatePresence, motion} from "framer-motion";

export default function MainNavigation() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>()
    const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false)

    //Handling resize of the window
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    //Checking if screen is mobile width
    const handleResize = () => {
        const isMobile = window.innerWidth <= 920
        setIsMobile(isMobile)

        if (!isMobile) {
            setIsMenuExpanded(false)
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function handleToggleMobileMenu() {
        setIsMenuExpanded(prev => !prev)
    }


    return (
        <>
            <div
                className={`w-full border-b-[0.5px] ${!isMenuExpanded ? 'border-b-gray-100' : 'border-b-transparent'} flex items-center z-20 fixed top-0 transition-all duration-300 ${!isScrolled ? 'bg-transparent h-36' : 'bg-[#FFFFFF40] backdrop-blur-2xl h-20 lg:h-24 xl:h-28'}`}>
                <Link href={'/'} className={'absolute left-12 lg:left-20 w-20 lg:w-24 xl:w-32'}>
                    <Image src={Logo} alt={'breally'} className={'w-full h-full'}/>
                </Link>
                {!isMobile && (
                    <>
                        <div
                            className={'flex gap-14 left-48 lg:left-56 xl:left-80 absolute text-base lg:text-xl xl:text-2xl'}>
                            <Link href={'/products'}>Products</Link>
                            <Link href={'/solutions'}>Solutions</Link>
                            <Link href={'/resources'}>Resources</Link>
                            <Link href={'/about'}>About</Link>
                        </div>
                        <button
                            className={'bg-c-purple h-12 lg:h-14 xl:h-16 px-12 lg:16 xl:px-20 rounded-full absolute right-16 text-base lg:text-xl xl:text-2xl'}>Contact
                            us
                        </button>
                    </>
                )}
                {isMobile && (
                    <motion.div
                        initial={{rotate: 0}}
                        animate={{rotate: isMenuExpanded ? -45 : 0}}
                        transition={{duration: 0.1, ease: 'easeOut', type: 'spring', stiffness: 100}}
                        onClick={handleToggleMobileMenu}
                        className={'aspect-square h-8 absolute right-4 grid grid-cols-2 gap-[2px] cursor-pointer'}>
                        <div className={'border-2 border-black rounded-[3px]'}></div>
                        <div className={'border-2 border-black rounded-[3px]'}></div>
                        <div className={'border-2 border-black rounded-[3px]'}></div>
                        <div className={'border-2 border-black rounded-[3px]'}></div>
                    </motion.div>
                )}
            </div>
            <AnimatePresence>
                {isMenuExpanded && (
                    <>
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: '100svh'}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.5}}
                            className={'fixed top-0 w-full overflow-hidden bg-white flex flex-col items-center justify-center gap-12 text-2xl z-10'}>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: {opacity: 0, transition: {duration: 0.2}},
                                visible: {opacity: 1, transition: {duration: 0.7, staggerChildren: 0.2}},
                                exit: {opacity: 0, transition: {duration: 0.2}},
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={`flex flex-col items-center justify-center gap-12 w-full h-full fixed top-0 left-0 z-10 text-2xl`}>
                            <motion.div variants={{
                                hidden: {opacity: 0, x: -20},
                                visible: {opacity: 1, x: 0},
                                exit: {opacity: 0, y: -20}
                            }}>
                                <Link href={'/products'}>Products</Link>
                            </motion.div>
                            <motion.div variants={{
                                hidden: {opacity: 0, x: 20}, visible: {opacity: 1, x: 0},
                                exit: {opacity: 0, y: -20}
                            }}>
                                <Link href={'/solutions'}>Solutions</Link>
                            </motion.div>
                            <motion.div variants={{
                                hidden: {opacity: 0, x: -20}, visible: {opacity: 1, x: 0},
                                exit: {opacity: 0, y: -20}
                            }}>
                                <Link href={'/resources'}>Resources</Link>
                            </motion.div>
                            <motion.div variants={{
                                hidden: {opacity: 0, x: -20}, visible: {opacity: 1, x: 0},
                                exit: {opacity: 0, y: -20}
                            }}>
                                <Link href={'/about'}>About</Link>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}