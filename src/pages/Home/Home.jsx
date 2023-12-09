import { useLoaderData } from "react-router-dom"
import Navber from "../../shared/Navber/Navber"
import Banner from "../Banner/Banner"
import Courses from "./Courses";
import FourCard from "./FourCard";
import Footer from "./Footer";
import Instructor from "./Instructor";


const Home = () => {
    const courses = useLoaderData([]);
  return (
    <div className="space-y-6">
        <Navber></Navber>
        <Banner></Banner>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                courses?.map(aCourse => <Courses key={aCourse.id} courses={aCourse}></Courses>)
            }
        </div>
        <div>
            <FourCard></FourCard>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                courses?.map(aCourse => <Instructor key={aCourse.id} courses={aCourse}></Instructor>)
            }
        </div>
        <div>
        <Footer></Footer>
        </div>
        

    </div>
  )
}

export default Home
