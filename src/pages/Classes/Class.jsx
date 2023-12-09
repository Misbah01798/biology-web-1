import React from 'react'

const Class = ({ classes }) => {
    const { id, picture, title, instructor, position, t_img, duration, test, description } = classes;
    return (
        <div>
            <div className="hero min-h-screen bg-pink-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-36 mask mask-hexagon">
                                    <img src={t_img} />
                                </div>
                            </div>
                            <div className='p-4 top-8'>
                                <h3 className='text-2xl font-bold'>{instructor}</h3>
                                <h3 className='text-2xl'>{position}</h3>
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <div>
                            <p className='text-2xl font-bold'>Duration:{duration} Month</p>
                            <p className='text-2xl font-bold'>Test Exam:{test}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Class
