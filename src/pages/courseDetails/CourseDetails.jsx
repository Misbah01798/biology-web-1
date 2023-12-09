import { useLoaderData, useParams } from "react-router-dom"
import Navber from "../../shared/Navber/Navber"
import { useEffect, useState } from "react";
import SingleCourse from "./SingleCourse";
import Footer from "../Home/Footer";


const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState();
    const courses =useLoaderData();
    useEffect(() => {
        const findCard = courses?.find(course => course.id == id)
        setCourse(findCard);

    }, [id, courses])
    return (
        <div>
            <Navber></Navber>
            <div className="mb-4">
                <SingleCourse course={course}></SingleCourse>
            </div>
            <Footer></Footer>
        
        </div>
    )
}

export default CourseDetails
