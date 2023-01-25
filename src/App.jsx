import React, { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"
import axios from 'axios'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import PLaybackPage from './pages/PLaybackPage'
import fallBackData from "./utils/data"
import Navbar from './components/Navbar'





export const contextData = createContext()


const App = () => {
  const [category, setCategory] = useState("React")
  const [content, setContent] = useState(fallBackData)
  const [loading, setLoading] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(null)
  const [currenPublishTime, setCurrentPublishTime] = useState(null)

  useEffect(() => {
    console.log(currentLogo);
  }, [currentLogo])


  const options = {
    method:"GET",
    url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
    params: {query: `${category}`},
    headers: {
      'X-RapidAPI-Key': '6060122db1msha7de30c9142ec8bp1fda25jsn9979cadb62de',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  useEffect(() => {

    const fetchFeed = async () => {
      const res = await axios.request(options)
      setContent(res.data.data)
      console.log(res.data.data);
      setLoading(false)
    }
    fetchFeed()
  },[category])

  return (
    <contextData.Provider value={{ setCategory, content, loading, setLoading, currentLogo, setCurrentLogo, currenPublishTime, setCurrentPublishTime }}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/video/:videoId' element={<PLaybackPage />} />
        </Routes>
      </Router>
      <Navbar />
    </contextData.Provider>
  )
}

export default App
