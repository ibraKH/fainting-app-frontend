import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Aos from 'aos';
import "aos/dist/aos.css";

const Cases = ({ admin }) => {
    const [cases , setCases] = useState([]);
    useEffect(() => {
        Aos.init({});
        axios.get(`https://fainting-app-backend.onrender.com/case/show/${admin}`)
		.then((res) => {
			setCases(() => res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
  return (
    <div className="casesContainer">
        {cases.map((x,i) => {
            return(
                <div className="caseParent" key={i} data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000">
                    <p>Fainting case : {x.case_id}</p>
                    <h1>{x.case_sex}</h1>
                    <h3>Detected at {x.case_date}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Cases