import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { contextData } from '../App'
import { HiCheckCircle } from 'react-icons/hi'
import Format from './NumberFormatter'
import CommetsComp from './CommetsComp'
import fallbackCommentsData from "../utils/commentsData"
import axios from 'axios'
import Loader from './Loader'
import { useParams } from 'react-router-dom'

const Video = ({ channelId, viewCount, channelName, title }) => {

  const { currentLogo, currenPublishTime, loading, setLoading } = useContext(contextData)
  const [comments, setComments] = useState(fallbackCommentsData.data)
  const { videoId } = useParams()

  const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/comments',
    params: { id: `${videoId}`},
    headers: {
      'X-RapidAPI-Key': 'daf1e1518dmsh2c2f5d2c3d5204ep17123ejsn3bc645cb368d',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  useEffect(() => {

    const fetchFeed = async () => {
      const res = await axios.request(options)
      setComments(res.data.data)
      // console.log(res.data.data);
      setLoading(false)
    }
    fetchFeed()
  }, [videoId])


  return (
    <VStack w={["100%", "100%", "95%", "60%"]} mx={"auto"} alignItems={"flex-start"}>
      <Box p={"10px"} position={"relative"} pb={["56%", "56%"]} pt={"50px"} w={["100%"]}   >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={`https://www.youtube.com/embed/${videoId}`}
        />
      </Box>
      <Heading as={"h3"} fontSize={"xl"} pl={2} textAlign={"start"} fontWeight={"semibold"} >{title}</Heading>
      <HStack w={"100%"} p={2} alignItems={"center"} >
        <Avatar size="sm" src={currentLogo} cursor={"pointer"} mx={2} />
        <VStack alignItems={"flex-start"} justifyContent={"center"}>
          <HStack>
            <Text fontSize={"md"} pl={2} color={"#f1f1f1"} >{channelName}</Text>
            <HiCheckCircle color='grey' />
          </HStack>
          <Text fontSize={"xs"} pl={2} color={"grey"} ><Format num={viewCount} /> views {currenPublishTime && `• ${currenPublishTime}`}</Text>
        </VStack>
      </HStack>
      <VStack alignItems={"flex-start"}>
        <Heading
          fontSize={"lg"}
          px={"4"}
          fontWeight={"semibold"}
          style={{ marginTop: "1rem"}}>
          Comments
        </Heading>
        {loading ? <Loader /> :

          comments.map((item) => {
            return (
              <CommetsComp
                key={item.commentId}
                photo={item.authorProfileImageUrl[2].url}
                name={item.authorDisplayName}
                publishTime={item.publishedTimeText}
                commentText={item.textDisplay}
                likesCount={item.likesCount}
              />
            )
          })}

      </VStack>
    </VStack>
  )
}

export default Video
