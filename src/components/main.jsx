import axios from 'axios'
import {useState, useEffect} from 'react'
import requests from '../requests'

const Main = () => {
     const[movies, setMovies] = useState([])

     const movie = movies[Math.floor(Math.random() * movies.length)] 

     useEffect(() =>{
        axios.get(requests.requestnowPlaying). then((response)=>{ 
            setMovies(response.data.results)

        })
     }, [])

     console.log(movie)

  return (
    <div className='w-full h-[250px] text-white'>
        <div className='w-full h-full'>
           <img className= "h-[550px] w-full object-cover" src ={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
        </div>
    </div>
  )
}

export default Main
