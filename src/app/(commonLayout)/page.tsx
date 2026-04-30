import Abouts from '@/components/About'
import { ImagesSliderDemo } from '@/components/HeroSlider'
import Skills from '@/components/Skill'
import React from 'react'

const HomePage = () => {
    return (
        <div className=''>
            <ImagesSliderDemo/>
            <Abouts/>
            <Skills/>
        </div>
    )
}

export default HomePage