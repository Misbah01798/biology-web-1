

const Instructor = ({ courses }) => {
    const { t_img, instructor, position } = courses;
    return (
        <div>
            <div data-aos="flip-right" className="card h-40 card-side bg-lime-100 shadow-xl">
                <figure><img src={t_img} alt="Movie" className="w-40 h-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructor}</h2>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    )
}

export default Instructor
