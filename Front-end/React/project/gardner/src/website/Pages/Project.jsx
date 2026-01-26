import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Pages from '../Common/Pages'
import Footer from '../Common/Footer'
import axios from 'axios'

function Project() {

    const [project,setproject] = useState([])

    const fetchdata = async () => {
          const res = await axios.get("http://localhost:3000/Project")
        console.log(res.data)
        setproject(res.data)
    }

    useEffect(() =>{
        fetchdata()
    },[])
    
    return (
        <div>
            <Header />
            <Pages title="Projects" data="Projects" />
            {/* Projects Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                        <p className="fs-5 fw-bold text-primary">Our Projects</p>
                        <h1 className="display-5 mb-5">Some Of Our Wonderful Projects</h1>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12 text-center">
                            <ul className="list-inline rounded mb-5" id="portfolio-flters">
                                <li className="mx-2 active" data-filter="*">All</li>
                                <li className="mx-2" data-filter=".first">Complete Projects</li>
                                <li className="mx-2" data-filter=".second">Ongoing Projects</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-4 portfolio-container">
                        {
                            project && project.map ((index,data) =>{
                                return(
                                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s" key={index}>
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src={data.img} alt />
                                <div className="portfolio-text">
                                    <h4 className="text-white mb-4">{data.title}</h4>
                                    <div className="d-flex">
                                        <a className="btn btn-lg-square rounded-circle mx-2" href="img/service-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                        <a className="btn btn-lg-square rounded-circle mx-2" href><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                        
                        
                    </div>
                </div>
            </div>
            {/* Projects End */}
            <Footer />
        </div>
    )
}

export default Project