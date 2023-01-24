import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Hide, Stack } from '@chakra-ui/react'
import VideoCard from "../components/VideoCard"
import axios from 'axios'
import Video from '../components/Video'

const baseURL = 'https://youtube-v31.p.rapidapi.com';


const PLaybackPage = () => {
  const [relatedVideos, setRelatedVideos] = useState([])
  const [videoDetails, setVideoDetails] = useState([])
  const { videoId } = useParams()

  const options1 = {

    url: 'https://youtube-v3-alternative.p.rapidapi.com/related',
    params: {id: 'dQw4w9WgXcQ', geo: 'US', lang: 'en'},
    headers: {
      'X-RapidAPI-Key': '6060122db1msha7de30c9142ec8bp1fda25jsn9979cadb62de',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  const options2 = {

    url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
    params: {id: 'dQw4w9WgXcQ'},
    headers: {
      'X-RapidAPI-Key': '6060122db1msha7de30c9142ec8bp1fda25jsn9979cadb62de',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  useEffect(() => {

    const fetchVideoDetails = async () => {
      const { data: details } = await axios.get(options2)
      console.log(details);
    }
    fetchVideoDetails()

    const fetchRealatedVideos = async () => {
      const { data: related } = await axios.get(options1)
      setRelatedVideos(related.items)
      // console.log(related.items);
    }
    fetchRealatedVideos()

  }, [])


  return (

    <Stack flexDir={["column", "column", "row"]} justifyContent={"space-evenly"}>
      <Video videoId={videoId}/>
      <Hide below='md'>
        <Box height={"100vh"} overflowY={"scroll"} className='videos-grid'>
          {relatedVideos.map((video) => {
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
        </Box>
      </Hide>
    </Stack>
  )
}

export default PLaybackPage
