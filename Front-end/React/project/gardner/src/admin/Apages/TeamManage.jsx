import React, { useEffect, useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Apages from '../Acomon/Apages'
import { toast } from 'react-toastify'
import {
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";
import { fireDb } from "../../Firebase/firebase";

function TeamManage() {

  const [team, setteam] = useState([])
  const [data, setdata] = useState({})

  const [edit, setedit] = useState(null)
  const [edited, setedited] = useState({
    id: "",
    name: "",
    qualitiy: "",
    img: ""
  })

  // 🔄 Fetch all team
  const fetchdata = async () => {
    const querySnapshot = await getDocs(collection(fireDb, "team"))
    const teamData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setteam(teamData)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  // 👁️ Single team view
  const singlservice = async (id) => {
    const docRef = doc(fireDb, "team", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setdata({ id: docSnap.id, ...docSnap.data() })
    }
  }

  // ❌ Delete
  const deleteservice = async (id) => {
    await deleteDoc(doc(fireDb, "team", id))
    toast.success("Service deleted")
    fetchdata()
  }

  // ✏️ Open edit
  const opendata = (data) => {
    setedit(data)
    setedited(data)
  }

  // 📝 Change input
  const getchange = (e) => {
    setedited({
      ...edited,
      [e.target.name]: e.target.value
    })
  }

  // 🔁 Update
  const getupdate = async (e) => {
    e.preventDefault()

    await updateDoc(doc(fireDb, "team", edited.id), {
      name: edited.name,
      qualitiy: edited.qualitiy,
      img: edited.img
    })

    toast.success("Service updated")
    setedit(null)
    fetchdata()
  }

  return (
    <div>
      <Aheader />
      <Apages title="team manage" data="team manage" />

      <div className="container">
        <table className="table my-5">
          <thead>
            <tr className="text-center">
              <th>#ID</th>
              <th>Name</th>
              <th>Quality</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {team.map((item) => (
              <tr className="text-center" key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.qualitiy}</td>
                <td>
                  <img src={item.img} width="100" alt="" />
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => singlservice(item.id)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => opendata(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteservice(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✏️ Edit Form */}
        {edit && (
          <form className="my-4" onSubmit={getupdate}>
            <input
              className="form-control mb-2"
              name="name"
              value={edited.name}
              onChange={getchange}
              placeholder="Name"
            />
            <input
              className="form-control mb-2"
              name="qualitiy"
              value={edited.qualitiy}
              onChange={getchange}
              placeholder="Quality"
            />
            <input
              className="form-control mb-2"
              name="img"
              value={edited.img}
              onChange={getchange}
              placeholder="Image URL"
            />

            <button className="btn btn-primary">Update</button>
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={() => setedit(null)}
            >
              Cancel
            </button>
          </form>
        )}
      </div>

      {/* 👁️ Modal */}
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content p-4">
            <h4>{data.name}</h4>
            <img src={data.img} width="100%" alt="" />
            <p>{data.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamManage
