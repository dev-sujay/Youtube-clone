import React, { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"
import axios from 'axios'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import PLaybackPage from './pages/PLaybackPage'
import Navbar from './components/Navbar'
import randomWord from "random-words"






export const contextData = createContext()


const App = () => {
  const [category, setCategory] = useState(randomWord())
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true);
  const [currentLogo, setCurrentLogo] = useState(null)
  const [currenPublishTime, setCurrentPublishTime] = useState(null)
  const [currenTitle, setCurrentTitle] = useState(null)


  const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
    params: {query: `${category}`},
    headers: {
      'X-RapidAPI-Key': 'daf1e1518dmsh2c2f5d2c3d5204ep17123ejsn3bc645cb368d',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchFeed = async () => {
      const res = await axios.request(options)
      setContent(res.data.data)
      console.log("loaded homepage");
      setLoading(false)
    }
    fetchFeed()
  },[category])

  return (
    <contextData.Provider value={{ setCategory, content, loading, setLoading, currentLogo, setCurrentLogo, currenPublishTime, setCurrentPublishTime, currenTitle, setCurrentTitle }}>
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
