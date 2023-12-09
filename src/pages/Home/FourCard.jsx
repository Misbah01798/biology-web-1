import khata from '../../assets/kata.jpeg';
import dna from '../../assets/dna.jpeg';
import human from '../../assets/human.png'


const FourCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div data-aos="fade-down-right" className="hero min-h-screen bg-cyan-400">
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">We sure hope you didn’t apply any scientific methods during spring break. Now that you are back with a smile, it’s time you think critically while having fun during psychology class.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-down-left" className="min-h-screen" style={{ backgroundImage: `url(${human})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">

                </div>
            </div>
            <div data-aos="fade-up-right" className="hero min-h-screen" style={{ backgroundImage: `url(${khata})` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                </div>
            </div>
            <div data-aos="fade-up-left" className="hero min-h-screen bg-fuchsia-600" >
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Put your understanding of this concept to test by answering a few MCQs. Click ‘Start Quiz’ to begin!</h1>
                        <p className="mb-5">Select the correct answer and click on the “Finish” button
                            Check your score and answers at the end of the quiz</p>
                        <button className="btn btn-primary">Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FourCard;
