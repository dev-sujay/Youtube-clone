import { Box, Heading, HStack, Image, Text, VStack, Tooltip, Avatar } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { HiCheckCircle } from "react-icons/hi"
import { Link } from 'react-router-dom'
import { contextData } from '../App'
import Format from "./NumberFormatter"

const VideoCard = ({ thumnail, videoTitle, channelName, videoId, publishedTime, viewCount, channelLogo }) => {

    const { setCurrentLogo, setCurrentPublishTime, setCurrentTitle } = useContext(contextData)

    const sendVideoDetails = () => {
        setCurrentLogo(channelLogo)
        setCurrentPublishTime(publishedTime)
        // setCurrentTitle(videoTitle)
    }

    return (

        <VStack alignItems={"flex-start"} p={2} borderRadius={6} className="video-card">
            <Box p={2} mb={2} w={"100%"}>
                <Link to={`/video/${videoId}`}>
                    <Image src={thumnail} alt="video thumbnail" w={"100%"} borderRadius={10} onClick={() => sendVideoDetails()} />
                </Link>
            </Box>
            <HStack h={"75px"} p={2} alignItems={"flex-start"}>
                <Avatar size="sm" src={channelLogo} cursor={"pointer"} />
                <VStack alignItems={"flex-start"} justifyContent={"center"}>
                    <Tooltip label={videoTitle}>
                        <Link to={`/video/${videoId}`} style={{ textDecoration: 'none' }} >
                            <Heading as={"h4"}
                                fontSize={"14px"}
                                fontWeight={"500"}
                                lineHeight={"20px"}
                                px={2}
                                sx={{
                                    width: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    color: "#f1f1f1"
                                }}
                                onClick={() => sendVideoDetails()} >
                                {videoTitle}
                            </Heading>
                        </Link>
                    </Tooltip>
                    <HStack>
                        <Text fontSize={"xs"} pl={2} color={"grey"} >{channelName}</Text>
                        <HiCheckCircle color='grey' />
                    </HStack>
                    <Text fontSize={"xs"} pl={2} color={"grey"} ><Format num={viewCount} /> views • {publishedTime}</Text>
                </VStack>
            </HStack>
        </VStack>

    )
}

export default VideoCard
