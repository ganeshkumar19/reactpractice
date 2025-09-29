import { useEffect, useState } from "react"


const useFetch = (fetchFunction, autoFetch= true)=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async()=>{
        try{
            setLoading(true)
            const result = fetchData()

            setData(result)

        }catch(err){

            setError(err instanceof Error ? err: new Error('an error occured'))
        }finally{
            setLoading(false)
        }
    }

    const reset = ()=>{
        setData([])
        setLoading(false)
        setError(null)
    }

    useEffect(()=>{
        if(autoFetch){
            fetchData()
        }
    }, [])

    return {data, loading, error, reset, reFetch: fetchData}
}

export default useFetch