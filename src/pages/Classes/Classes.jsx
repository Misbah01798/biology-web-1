import React from 'react'
import Navber from '../../shared/Navber/Navber'
import Banner from '../Banner/Banner'
import { useLoaderData } from 'react-router-dom'
import Class from './Class'
import Footer from '../Home/Footer'

const Classes = () => {
    const classes = useLoaderData();
  return (
    <div className=''>
        <Navber></Navber>
        <div className="grid grid-cols-1 gap-4">
            {
                classes.map(aclass => <Class key={aclass.id} classes={aclass}></Class> )
            }
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Classes
