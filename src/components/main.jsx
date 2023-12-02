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

     const stringClip = (str, num) =>{
        if(str?.length > num){
            return str.slice(0, num) + "...";
        } else{
            return str;
        }
     }

     
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute h-[550px] w-full bg-gradient-to-r from-black'></div>
           <img className= "h-[550px] w-full object-cover" src ={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
           <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl'>{movie?.title}</h1>
            <div className='my-4'>
            <button className='bg-white text-black px-5 py-2 mr-10'>Play </button>
            <button className='border text-white px-5 py-2'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm mb-3'>Relased: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-400'>
                {stringClip(movie?.overview, 150)}
            </p>
           </div>
        </div>
    </div>
  )
}

export default Main
