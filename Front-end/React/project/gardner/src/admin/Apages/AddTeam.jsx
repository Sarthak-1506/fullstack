import React, { useState } from 'react'
import Aheader from '../Acomon/Aheader'
import Apages from '../Acomon/Apages'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { collection, addDoc } from "firebase/firestore";
import { fireDb } from "../../Firebase/firebase";

function AddTeam() {

  const redirect = useNavigate()

  const [form, setform] = useState({
    name: "",
    qualitiy: "",
    img: ""
  })

  const getchage = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const getdata = async (e) => {
    e.preventDefault()

    if (!form.name || !form.qualitiy || !form.img) {
      toast.error("Please fill all fields")
      return
    }

    try {
      await addDoc(collection(fireDb, "team"), {
        name: form.name,
        qualitiy: form.qualitiy,
        img: form.img
      })

      toast.success("Team member added")

      setform({
        name: "",
        qualitiy: "",
        img: ""
      })

      redirect("/teammanage")

    } catch (error) {
      console.error(error)
      toast.error("Error adding team member")
    }
  }

  return (
    <div>
      <Aheader />
      <Apages title="Team Add" data="Team Add" />

      <div className="container">
        <div className="row my-5">
          <div className="col-12">
            <form onSubmit={getdata}>
              <input
                className="form-control mb-3"
                name="name"
                value={form.name}
                onChange={getchage}
                placeholder="Name"
              />

              <input
                className="form-control mb-3"
                name="qualitiy"
                value={form.qualitiy}
                onChange={getchage}
                placeholder="Quality"
              />

              <input
                className="form-control mb-3"
                name="img"
                value={form.img}
                onChange={getchage}
                placeholder="Image URL"
              />

              <button className="btn btn-primary">
                Add Team
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTeam
