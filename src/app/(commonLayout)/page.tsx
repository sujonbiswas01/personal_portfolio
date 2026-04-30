import Abouts from '@/components/About'
import EducationPage from '@/components/Education'
import { ImagesSliderDemo } from '@/components/HeroSlider'
import Skills from '@/components/Skill'
import React from 'react'

const HomePage = () => {
    return (
        <div className=''>
            <ImagesSliderDemo/>
            <Abouts/>
            <Skills/>
            <EducationPage/>
        </div>
    )
}

export default HomePage