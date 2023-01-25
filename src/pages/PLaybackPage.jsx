import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Hide, Stack } from '@chakra-ui/react'
import VideoCard from "../components/VideoCard"
import axios from 'axios'
import Video from '../components/Video'
import { contextData } from '../App'
import Loader from '../components/Loader'
import fallbackRelated from "../utils/relatedData"
import fallbackVideoDetails from "../utils/videoDetailsData"



const PLaybackPage = () => {
  const [relatedVideos, setRelatedVideos] = useState([])
  const [videoDetails, setVideoDetails] = useState({})
  const { videoId } = useParams()
  const { loading, setLoading } = useContext(contextData)

  

  const optionsRelated = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/related',
    params: { id: `${videoId}` },
    headers: {
      'X-RapidAPI-Key': '6060122db1msha7de30c9142ec8bp1fda25jsn9979cadb62de',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  const optionsVideoDetails = {

    url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
    params: {id: `${videoId}`},
    headers: {
      'X-RapidAPI-Key': '6060122db1msha7de30c9142ec8bp1fda25jsn9979cadb62de',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  useEffect(() => {

  const fetchVideoDetails = async () => {
    const { data: details } = await axios.request(optionsVideoDetails)
  setVideoDetails(details)
  setLoading(false)
  }
  fetchVideoDetails()

    const fetchRealatedVideos = async () => {
      const { data: related } = await axios.request(optionsRelated)
      setRelatedVideos(related.data)

      setLoading(false)
    }
    fetchRealatedVideos()

  }, [videoId])


  return (

    <Stack flexDir={["column", "column","column", "row"]} justifyContent={"space-evenly"} gap={"1rem"} ml={[0,0,"6rem"]}>

      <Video
        videoId={videoId}
        title={videoDetails.title}
        channelName={videoDetails.channelTitle}
        viewCount={videoDetails.viewCount}
        channelId= {videoDetails.channelId}
      />
      <Hide below='md'>
        <Box height={["max-content","max-content","max-content","105vh"]} overflowY={["clip","clip", "auto"]} className='videos-grid' sx={
          {
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }
        } >
          {loading ? <Loader /> :

          relatedVideos.map((video) => {
            return (
              <VideoCard
                key={video.videoId}
                thumnail={video.thumbnail[1].url}
                videoTitle={video.title}
                channelName={video.channelTitle}
                videoId={video.videoId}
                publishedTime={video.publishedTimeText}
                viewCount={video.viewCount}
                channelLogo={video.authorThumbnail && video.authorThumbnail[0].url}
              />
            )
          })

          }
        </Box>
      </Hide>
    </Stack>
  )
}

export default PLaybackPage
