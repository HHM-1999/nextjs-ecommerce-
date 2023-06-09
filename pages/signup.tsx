import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
   const router = useRouter()
  const { user, signup } = useAuth()
  console.log(user)
    const [data, setData] = useState({
      name:'',
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
       router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 mt-5">Signup</h1>
          <Form onSubmit={handleSignup}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
            value={data.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

       <Button variant="primary" type="submit" className='w-100 bg-dark text-white'>
          SignUp
              </Button>
                <p className='my-2'>Already have an Account ????    <Link className='text-warning' style={{
                   textDecoration: "none"
              }} href="/login"><b>Login Now</b></Link> </p>
      </Form>
    </div>
  )
}

export default Signup