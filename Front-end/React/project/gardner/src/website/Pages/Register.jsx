import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, fireDb } from "../../Firebase/firebase"
import { doc, setDoc } from "firebase/firestore"

function Register() {

  const redirect = useNavigate()

  const [form, setform] = useState({
    name: "",
    email: "",
    password: ""
  })

  const getchange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const getsubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill all fields")
      return
    }

    try {
      // 🔐 Create Auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )

      const user = userCredential.user

      // 🧾 Store user profile in Firestore
      await setDoc(doc(fireDb, "users", user.uid), {
        name: form.name,
        email: form.email,
        createdAt: new Date()
      })

      toast.success("Registration successful")
      redirect("/login")

    } catch (error) {
      console.error(error)

      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already registered")
      } else if (error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters")
      } else {
        toast.error("Registration failed")
      }
    }
  }

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h2 className="fw-bold mb-5">Sign up</h2>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput
                  label='Your Name'
                  name='name'
                  value={form.name}
                  onChange={getchange}
                  type='text'
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput
                  label='Your Email'
                  name='email'
                  value={form.email}
                  onChange={getchange}
                  type='email'
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput
                  label='Password'
                  name='password'
                  value={form.password}
                  onChange={getchange}
                  type='password'
                />
              </div>

              <MDBBtn onClick={getsubmit} size='lg' className='mb-4'>
                Register
              </MDBBtn>

              <Link to="/login">Already have an account?</Link>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default Register
