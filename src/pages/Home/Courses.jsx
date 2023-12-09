import { Link } from "react-router-dom";


const Courses = ({ courses }) => {
  const { id, picture, title, instructor, position, students, fees, description } = courses ;
  return (
    <div>
      <div className="card w-96 bg-lime-200 shadow-xl">
        <figure data-aos="flip-left"><img src={picture} className="w-full h-56" /></figure>
        <div  data-aos="zoom-in-left" className="card-body h-96">
          <h2 className="card-title">
            {title}
          </h2>
          <h3 className="text-xl font-bold">{instructor}</h3>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <p className="text-2xl font-bold">Student:{students}</p>
            <p className="text-red-600 text-2xl font-bold">Fees:{fees}</p>
            <Link to={`/courses/${id}`}><button className="btn bg-secondary text-white">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
