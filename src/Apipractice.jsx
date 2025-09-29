import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from './api/axios'

const Apipractice = () => {

    const [users, setUsers] = useState([])

    const fetchusers = async()=>{
        try{
            const response = await api.get('/users')
            setUsers(response.data)
        } catch(err){
            console.log(err)
        }
    }   

    // const fetchData = ()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>
    //     setUsers(response.data))
    //     .catch((e)=> console.log(e))
    // }

    useEffect(()=>{
        fetchusers()
    }, [])

    
  return (
    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>
        {users.map((user)=>(
            <div key={user.id} style={{width: '200px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid red', borderRadius: '20px'}}>
                <p>{user.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Apipractice