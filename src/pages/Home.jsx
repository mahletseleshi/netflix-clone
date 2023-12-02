import Main from "../components/main"
import Row from "../components/Row"
import requests from "../requests"


const Home = () => {
  return (
    <>
     < Main />
     <Row id="1" title = "NowPlaying" fetchURL={requests.requestnowPlaying}/>
     <Row id="2" title = "Popular" fetchURL={requests.requestPopular}/>
     <Row id="3" title = "TopRated" fetchURL={requests.requestTopRated}/>
     <Row id="4" title = "Upcoming" fetchURL={requests.requestUpcoming}/>
    
    </>
  )
}

export default Home

