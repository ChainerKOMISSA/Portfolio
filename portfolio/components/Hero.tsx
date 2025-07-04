import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { HiOutlineDownload } from "react-icons/hi";
import { IoNavigate } from "react-icons/io5";



const Hero = () => {
    return (
        <div className='pb-20 pt-6'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Bienvenue sur mon portfolio</h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Je suis Chainer KOMISSA ZOTSU'
                    />
                    <p className='text-justify md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl'>
                        Étudiante en dernière année de Master à 
                        l&apos;UTBM, je suis passionnée par le développement web full stack. 
                        Grâce à mon parcours, j&apos;ai acquis des compétences solides en front-end et back-end à 
                        travers divers projets.
                    </p>
                    <div className="flex flex-row justify-center gap-6">
                        <a href="/CV_KOMISSA_ZOTSU.pdf" target='_blank'><MagicButton
                            title='Télécharger mon cv'
                            icon={<HiOutlineDownload />}
                            position='left'
                        /></a>
                        <a href="/blog"><MagicButton
                            title='Aller sur mon blog'
                            icon={<IoNavigate />}
                            position='left'
                        /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero