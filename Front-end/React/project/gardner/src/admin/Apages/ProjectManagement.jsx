import React, { useEffect, useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Apages from '../Acomon/Apages'
import axios from 'axios'

function ProjectManagement() {

    const [project,setproject] = useState([])

    const fetchdata = async ()=> {
        const res = await axios.get("http://localhost:3000/Projects")
        console.log(res.data)
        setproject(res,data)
    }

    useEffect(() => {
        fetchdata()
    },[])

  return (
    <div>
        <Aheader/>
        <Apages title="Project Management" data="project" />

         <div className="container">
        <table className="table my-5">
          <thead>
            <tr className='text-center'>
              <th scope="col">#id</th>
              <th scope="col">Imgae</th>
              <th scope="col">title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              project && project.map((data, index) => {
                console.log(data)
                return (
                  <tr className='text-center' key={index}>
                    <th scope="row">{data.id}</th>
                    <td><img src={data.img} style={{ width: "100px" }} alt="" /></td>
                    <th scope="row">{data.title}</th>
                    <td>
                      <button className='btn btn-info'>View</button>
                      <button className='btn btn-success mx-2'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                )
              })
            } 

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ProjectManagement