import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { setUser, newUser, updateUserProfile, handleGoolgeLogIn } = useContext(AuthContext)
  const [error, setError] = useState({})
  const navigate = useNavigate()







  const handleRegisterFrom = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    // if (name.length < 5) {
    //   setError({ ...error, name: "Atleast 5 character" })
    //   toast.error('Use valid name')
    //   return
    // }
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value

    if (password.length < 6) {
      setError({ ...error, password: "Password should be at least 6 characters or long." })
      toast.error('Use meaningful password')
      return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(toast.error('Use a special password'));
      return
    }

    const reg = { name, photo, email, password }
    console.log(reg)

    newUser(email, password)
      .then(async (result) => {
        const user = result.user
        toast.success('User registered successfully')
        console.log('User registered successfully', user)
        const newReg = { name, photo, email }
        const res = await fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newReg)
          // body: JSON.stringify({ uid: user.uid, email: user.email, name: user.displayName, photo: user.photoURL })
        })
        const data = await res.json();
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Visa added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }





        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/login")
            // setUser({ ...user, displayName: name, photoURL: photo })
            // console.log("Ok")
          })
          .catch(err => {
            console.log(err.message)
          })
        setUser(user)
      })
      .catch(error => {
        console.log("Error creating user", error.message)
        toast.error('User already registered')
      })
  }

  const handleGoolge = () => {
    handleGoolgeLogIn()
      .then((result) => {
        setUser(result.user)
        navigate("/")
      })
      .catch((error) => {
        console.log("ERROR", error)
        setUser(null);
      })
  }

  return (
    <div>
      <Toaster />
      <h1>Register Dashboard</h1>

      <main className='min-h-screen md:flex justify-center items-center gap-10'>
        <div className="card w-full max-w-xl shrink-0 shadow-2xl p-10 border">
          <h1 className='text-center btn rounded-none bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white'> Register Dashboard</h1>
          <form onSubmit={handleRegisterFrom} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered text-black" required />
            </div>
            {/* {
              error.name &&
              <p className="text-red-500 text-xs">{error.name}</p>

            } */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered text-black" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/* <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered text-black" required /> */}
              <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
              {/* <button
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-sm absolute right-20 bottom-[192px]">
                {
                  showPassword ? <FaRegEye /> : <RiEyeCloseLine />
                }
              </button> */}
            </div>
            {
              error.password &&
              <p className="text-red-500 text-xs">{error.password}</p>
            }
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white">Register</button>
            </div>
            <div>
              <p className="text-center text-black">Allready have an account?
                <Link to={"/login"} className="link link-hover text-green-600 font-semibold ml-2">Log in</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              // src={socialbg}
              alt="icon" />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className=" text-center text-2xl font-bold">Social</h2>
            <button
              onClick={handleGoolge}
              className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white w-full">Log in with google</button>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Register
