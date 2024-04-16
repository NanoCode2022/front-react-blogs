import { useState } from 'react'
import '../login.css'
export function Login(){
  const [isActive, setIsActive] = useState(false)
  const [register, setRegister] = useState({name:'',email:'',password:''})
  const [login, setLogin] = useState({email:'',password:''})

  const handleInputChangeR = (e) => {
    const { name, value } = e.target
    setRegister({ ...register, [name]: value })
  }

  const handleSubmitRegister =(e)=>{
    e.preventDefault()

    console.log(register)
    setRegister({name:'',email:'',password:''})
  }

  const handleInputChangeL = (e) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  const handleSubmitLogin =(e)=>{
    e.preventDefault()

    console.log(login)
    setLogin({email:'',password:''})
  }

  return(
    <div className="w-full h-full flex justify-center">
        <div className={`${isActive ? 'container active' : 'container'}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSubmitRegister}>
          <h1>Create Account</h1>
          <span>or use your email for registeration</span>
          <input type="text" placeholder="Name" name='name' onChange={handleInputChangeR} value={register.name}/>
          <input type="email" placeholder="Email" name='email' onChange={handleInputChangeR} value={register.email} required/>
          <input type="password" placeholder="Password" name='password' onChange={handleInputChangeR} value={register.password}/>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleSubmitLogin}>
          <h1>Sign In</h1>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" name='email' onChange={handleInputChangeL}  value={login.email}/>
          <input type="password" placeholder="Password" name='password'  onChange={handleInputChangeL} value={login.password}/>
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle" onClick={()=> setIsActive(!isActive)}>
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}