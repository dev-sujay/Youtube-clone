import React, { useContext } from 'react'
import VideoCard from '../components/VideoCard'
import { contextData } from '../App'
import Loader from "../components/Loader"
import ChannelCard from '../components/ChannelCard'
import PlaylistCard from '../components/PlaylistCard'


const Homepage = () => {

  const { videos, loading } = useContext(contextData)
  const channelsArr = videos.filter((item) => item.type == "channel")
  const videosArr = videos.filter((item) => item.type == "video")
  const playlistsArr = videos.filter((item) => item.type == "playlist")
  console.log(channelsArr);
  console.log(videosArr);
  console.log(playlistsArr);

  return (

    loading ? <Loader height={"100vh"} width={"100%"} /> :
      <div className='videos-grid'>
        {channelsArr.length && channelsArr.map((channel) => {
          return (
            <ChannelCard
              subs={channel.subscriberCount}
              title={channel.title}
              desc={channel.description}
              logo={channel.thumbnail[1].url}
            />
          )
        })}
        {videosArr.length && videosArr.map((video) => {
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
        })}
        {playlistsArr.length && playlistsArr.map((playlist) => {
          return (
            <PlaylistCard
              thumbnail={playlist.thumbnail[3].url}
              title={playlist.title}
              channelName={playlist.channelTitle}
            />
          )
        })}




      </div>
  )
}

export default Homepage
