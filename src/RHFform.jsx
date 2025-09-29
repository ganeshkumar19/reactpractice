import React from 'react'
import {useForm} from 'react-hook-form'

const RHFform = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data)=>{
        alert('form submited')

        console.log('form', data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} style={{'maxWidth': '300px', margin: '10px'}}>
            <div>
                <label>Name</label>
                <input type='text' {...register("name",{
                    required: 'name is required',
                    minLength:{
                        value: 3,
                        message: 'please enter a name more than 3 characters'
                    }
                }
                )}/>
                {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
            </div>
            <div>
                <label>email</label>
                <input type='text'{...register("email", {
                    required: 'email is required',
                    pattern:{
                        value: /\S+@\S+\.\S+/,
                        message: 'pleae enter a valid email'
                    }
                })}/>
                {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
            </div>
             <div>
                <label>password</label>
                <input type='password'{...register("password", {
                    required: 'password is required',
                    minLength:{
                        value: 6,
                        message: 'pleae enter a valid password of atlease 6 characters'
                    }
                })}/>
                {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default RHFform