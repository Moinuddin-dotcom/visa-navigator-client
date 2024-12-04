import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
  const { setUser, userlogIn, handleGoolgeLogIn } = useContext(AuthContext)
  const navigate = useNavigate()

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




  const handleLogin = (e) => {


    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    const user = { email, password }
    console.log(user)

    userlogIn(email, password)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log("User logged in successfully", result.user)
        toast.success('User logged in successfully')
        navigate(location?.state ? location.state : "/")
      })
      .catch(err => {
        toast.error('Email or password is not valid', err)
      })

  }


  return (
    <div>
      <Toaster />
      {/* <header>

      <h1>Log in Dashboard</h1>
</header> */}

      <main className='min-h-screen md:flex justify-center items-center gap-10'>
        <div className="card  w-full max-w-xl shrink-0 shadow-2xl p-10 border">
          <h1 className='text-center btn rounded-none bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white'> Log in Dashboard</h1>
          <form onSubmit={handleLogin} className="card-body">
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
                className="btn btn-sm absolute right-20 bottom-[240px]">
                {
                  showPassword ? <FaRegEye /> : <RiEyeCloseLine />
                }
              </button> */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white ">Login</button>
            </div>

            <div className='mt-4'>
              <p className="text-center text-black">Don't have an account?
                <Link to={"/register"} className="link link-hover text-green-600 font-semibold ml-2">Register</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="divider lg:divider-horizontal ">OR</div>


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

export default Login
