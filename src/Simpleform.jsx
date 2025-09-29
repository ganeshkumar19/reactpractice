import React, { useState } from 'react'

const Simpleform = () => {
    const [form, setForm] = useState({name: '', email: '', password: ''})
    const [errors, setErrors] = useState({})

    const handleChange=(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const validate =()=>{
        const newErrors = {}

        if(!form.name.trim()){
            newErrors.name='name is required'
        }else if(form.name.length < 3){
            newErrors.name = 'enter a name more than 3 characters'
        }

        if(!form.email){
            newErrors.email='email is required'
        }else if(!/\S+@\S+\.\S+/.test(form.email)){
            newErrors.email= 'please enter a valid email'
        } 

        if(!form.password){
            newErrors.password  ='password is required'
        }else if(form.password.length < 6){
            newErrors.password = 'please enter a password more than 6 characters'
        }

        return newErrors
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const newErrors = validate()
        setErrors(newErrors)

        if(Object.keys(newErrors).length === 0){
            alert('form submitted')
            console.log('form', form)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} style={{maxWidth: '300px', margin: '20px'}}>
            <div>
                <label>Name:</label>
                <input type='text' name='name' placeholder='enter your name' value={form.name} onChange={handleChange}/>
                {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
            </div>
                 <div>
                <label>Email:</label>
                <input type='text' name='email' placeholder='enter your email' value={form.email} onChange={handleChange}/>
                 {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input type='password' name='password' placeholder='enter your password' value={form.password} onChange={handleChange}/>
                 {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            </div>

            <button type='submit'>Submit</button>
       
        </form>
    </div>
  )
}

export default Simpleform