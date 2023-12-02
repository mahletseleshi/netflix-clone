import { useState, useEffect } from "react";
import axios from "axios";
import {FaHeart, FaRegHeart} from "react-icons/fa"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL,id }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState([false])

  const stringClip = (str, num) =>{
    if(str?.length > num){
        return str.slice(0, num) + "...";
    } else{
        return str;
    }
 }


 const scrollLeft = () => {
   let left = document.getElementById("slider"+ id);
   left.scrollLeft -= 500; 
 };
 
 const scrollRight = () => {
   let right = document.getElementById("slider"+ id);
   right.scrollLeft += 500; 
 };


  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h1 className="text-white font-bold p-4 md:text-xl">{title}</h1>
      <div className="relative flex items-center group ">
      <MdChevronLeft className="bg-white absolute  opacity-50 left-0  hover:opacity-100 z-10 cursor-pointer hidden group-hover:block " onClick ={scrollLeft} size={40}/>
        <div id={"slider" + id} className="w-full h-full whitespace-nowrap overflow-x-scroll  scroll-smooth scrollbar-hide">
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm-[200px] md-[240px] l-[580px] xl-[320px] inline-block relative p-4 cursor-pointer"
            >
              <img
               className="w-[300px] h-[200px] object-cover"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item.title}

              />

              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center">
                <p className="text-white text-xs font-bold">{stringClip(item?.title, 15)}</p>
                <p>
                    {like ? <FaRegHeart className="absolute top-5 left-5 text-gray-400 " />:< FaHeart className="absolute top-4 left-5  text-gray-400"/>}
                </p>
              </div>
            </div>
          ))}
        </div>

        <MdChevronRight  className="bg-white absolute  opacity-50 right-0  hover:opacity-100 z-10 cursor-pointer hidden group-hover:block " onClick={scrollRight} size={40}/>
      </div>
    </>
  );
};

export default Row;
