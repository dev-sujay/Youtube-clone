import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import VideoCard from '../components/VideoCard'
const baseURL = 'https://youtube-v31.p.rapidapi.com'

const Homepage = () => {
  const [category, setCategory] = useState("New")
  const [videos, setVideos] = useState([])

  const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'daf1e1518dmsh2c2f5d2c3d5204ep17123ejsn3bc645cb368d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchFeed = async () => {
      const { data } = await axios.get(`${baseURL}/search?part=snippet&q=${category}`, options)
      setVideos(data.items)
    }
    fetchFeed()
  }, [])



  return (
    <div className='videos-grid'>
      {videos.map((video)=>{
        return (
          <VideoCard
            key={video.id.videoId}
            thumnail={video.snippet.thumbnails.medium.url}
            videoTitle={video.snippet.title}
            channelName={video.snippet.channelTitle}
            videoId={video.id.videoId}
          />
          )
      })}
    </div>
  )
}

export default Homepage
