import React from 'react'

const SingleCourse = ({ course }) => {
    const { id, picture, title, instructor, t_img, duration, test, lecture, about } = course || [];
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className='col-span-1'>
                <div className="  bg-pink-600">
                    <div className="hero-content flex-col lg:flex-row">
                        <label tabIndex={0} className="btn btn-ghost avatar">
                            <div className="w-16 rounded-full">
                                <img src={t_img} />
                            </div>
                        </label>
                        <div>
                            <h1 className="text-xl font-bold text-white">Instructor</h1>
                            <h1 className="text-xl font-bold text-white">{instructor}</h1>
                        </div>
                    </div>
                </div>
                <div className="  bg-pink-600 mt-4 p-4">
                    <h1 className="text-2xl font-bold text-white">Course Features</h1>
                    <div className="">
                        <h1 className="text-xl font-bold text-white">Duration:{duration} month</h1>
                        <h1 className="text-xl font-bold text-white">Lecture:{lecture}</h1>
                        <h1 className="text-xl font-bold text-white">Test Exam:{test}</h1>

                    </div>
                </div>
            </div>
            <div className='col-span-3'>
                <div className="  bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={picture} className="rounded-xl w-full" />
                    </figure>
                    <div className="px-4 items-center text-left">
                        <h2 className="card-title">About This Course</h2>
                        <p>{about}</p>
                        <div className='items-center'>
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleCourse
