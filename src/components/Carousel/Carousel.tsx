import React from 'react'
import { skillsData } from '../../pages/Home/skillsData';

const Carousel = () => {
    return (
        <div className="carousel">
            <p className="text-center text-3xl mb-2">Skills:</p>
            <div className="carousel__slide">
                {
                    skillsData.map((skill) => {
                        const { id, icon } = skill;

                        return (
                            <div className="carousel__slide-icon" key={id}>{icon}</div>
                        )
                    })
                }
            </div>
            <div className="carousel__slide">
                {
                    skillsData.map((skill) => {
                        const { id, icon } = skill;

                        return (
                            <div className="carousel__slide-icon" key={id}>{icon}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel