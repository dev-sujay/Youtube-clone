import { Box, Heading, HStack, Image, Text, VStack, Tooltip, Link } from '@chakra-ui/react'
import React from 'react'
import { HiCheckCircle } from "react-icons/hi"

const VideoCard = ({ thumnail, videoTitle, channelName, videoId }) => {
    return (
        <>
            <VStack alignItems={"flex-start"} >
                <Box p={2}>
                    <Link href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" >
                        <Image src={thumnail} alt="video thumbnail" w={["95vw", "max-content"]} borderRadius={10} />
                    </Link>
                </Box>
                <Tooltip label={videoTitle} placement="auto-start">
                    <Heading as={"h4"} fontSize={"sm"} fontWeight={"normal"} px={2} sx={{
                        width: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}>
                        <Link href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" style={{ textDecoration: 'none' }} >
                            {videoTitle}
                        </Link>
                    </Heading>
                </Tooltip>
                <HStack>
                    <Text fontSize={"xs"} pl={2} color={"grey"} >{channelName}</Text>
                    <HiCheckCircle color='grey' />
                </HStack>
            </VStack>
        </>
    )
}

export default VideoCard
