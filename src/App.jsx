import React, { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"
import axios from 'axios'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import PLaybackPage from './pages/PLaybackPage'


const baseURL = 'https://youtube-v31.p.rapidapi.com';



export const contextData = createContext()


const App = () => {
  const [category, setCategory] = useState("React")
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true);


  const options = {
    method:"GET",
    url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
    params: {query: `${category}`, geo: 'US', lang: 'en'},
    headers: {
      'X-RapidAPI-Key': '6060122db1msha7de30c9142ec8bp1fda25jsn9979cadb62de',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  useEffect(() => {
    
    const fetchFeed = async () => {
      const res = await axios.request(options)
      setVideos(res.data.data)
      // console.log(res.data.data);
      setLoading(false)
    }
    fetchFeed()
  },[category])

  return (
    <contextData.Provider value={{ setCategory, videos, loading, setLoading}}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/video/:videoId' element={<PLaybackPage />} />
        </Routes>
        <Footer />
      </Router>
    </contextData.Provider>
  )
}

export default App
