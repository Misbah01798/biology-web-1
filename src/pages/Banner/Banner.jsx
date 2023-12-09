import ban1 from '../../assets/ban1.png'
import ban2 from '../../assets/ban2.jpeg'
import ban3 from '../../assets/ban3.jpeg'
import ban5 from '../../assets/ban5.jpeg'

const Banner = () => {
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" className="carousel w-full h-96">
                <div id="slide1"  className="carousel-item relative w-full">
                {/* style={{ backgroundImage: `url(${ban1})`,backgroundRepeat:'no-repeat', width:'full' }} */}
                    <img src={ban1} className="w-full opacity-80" />
                    <div data-aos="zoom-in-left"
                        className='absolute text-left ml-32 top-14 w-1/3'>
                        <h3 className='text-5xl font-extrabold '>Growth and Development Your Dream</h3>
                        <p className='text-xl text-red-600'>Ready to learn and have fun? find a perfact course and join us Today</p>
                        <button className='btn bg-secondary text-white'>Apply Now</button>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={ban2} className="w-full opacity-80" />
                    <div data-aos="zoom-in-left" className='absolute text-left ml-32 top-14 w-1/3'>
                        <h3 className='text-5xl font-extrabold '>Improve Skills</h3>
                        <p className='text-xl text-red-600'>Ready to learn and have fun? find a perfact course and join us Today</p>
                        <button className='btn bg-secondary text-white'>Apply Now</button>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={ban3} className="w-full opacity-80" />
                    <div data-aos="zoom-in-left" className='absolute text-left ml-32 top-14 w-1/3'>
                        <h3 className='text-5xl font-extrabold '>New Knowledge</h3>
                        <p className='text-xl text-red-600'>Ready to learn and have fun? find a perfact course and join us Today</p>
                        <button className='btn bg-secondary text-white'>Apply Now</button>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={ban5} className="w-full opacity-80" />
                    <div data-aos="zoom-in-left" className='absolute text-left ml-32 top-14 w-1/3'>
                        <h3 className='text-5xl font-extrabold '>Learn & Discover</h3>
                        <p className='text-xl text-red-600'>Ready to learn and have fun? find a perfact course and join us Today</p>
                        <button className='btn bg-secondary text-white'>Apply Now</button>

                    </div>                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
