import React, { useContext, useEffect } from 'react'
import VideoCard from '../components/VideoCard'
import { contextData } from '../App'
import Loader from "../components/Loader"
import ChannelCard from '../components/ChannelCard'
import PlaylistCard from '../components/PlaylistCard'
import { Box, Stack } from '@chakra-ui/react'


const Homepage = () => {

  const { content, loading, setLoading } = useContext(contextData)
  const channelsArr = content.filter((item) => item.type == "channel")
  const videosArr = content.filter((item) => item.type == "video")
  const playlistsArr = content.filter((item) => item.type == "playlist")

  useEffect(() => {
    setLoading(false)
    console.log(loading);
  }, [])

  return (

    <>
      {loading ? <Loader height={"100vh"} width={"100%"} /> :

        <Box className='videos-grid' ml={["0", "6rem"]}>

          {channelsArr.length != 0 &&
            (channelsArr.map((channel) => {
              return (
                <ChannelCard
                  subs={channel.subscriberCount}
                  title={channel.title}
                  desc={channel.description}
                  logo={channel.thumbnail[1].url}
                />
              )
            }))}

          {(videosArr.map((video) => {
            return (
              <VideoCard
                key={video.videoId}
                thumnail={video.thumbnail[0].url}
                videoTitle={video.title}
                channelName={video.channelTitle}
                videoId={video.videoId}
                publishedTime={video.publishedText}
                viewCount={video.viewCount}
                channelLogo={video.channelThumbnail[0].url}
              />
            )
          }))}

          {(playlistsArr.length != 0 &&
            (playlistsArr.map((playlist) => {
              return (
                <PlaylistCard
                  thumbnail={playlist.thumbnail[3].url}
                  title={playlist.title}
                  channelName={playlist.channelTitle}
                />
              )
            })))}


        </Box>}
    </>
  )
}

export default Homepage
