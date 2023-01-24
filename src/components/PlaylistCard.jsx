import React from 'react'
import { Avatar, Box, Heading, HStack, Image, Text, Tooltip, VStack } from '@chakra-ui/react'
import { HiCheckCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const PlaylistCard = ({ thumbnail, title, channelName }) => {
  return (
    <VStack className='channel-card' alignItems={"center"}>
      <Box p={2} mb={2}>
        {/* <Link to={`/video/${videoId}`} > */}
        <Image src={thumbnail} alt="video thumbnail" w={["95vw", "100%"]} borderRadius={10} />
        {/* </Link> */}
      </Box>

      <VStack w={"100%"} alignItems={"flex-start"} justifyContent={"center"}>
        <Tooltip label={title}>
          <Heading as={"h4"}
            fontSize={"md"}
            fontWeight={"500"}
            lineHeight={"20px"}
            px={2}
            color={"#f1f1f1"}>
            {title}
          </Heading>
        </Tooltip>
        <HStack>
          <Text fontSize={"sm"} pl={2} color={"grey"} >{channelName}</Text>
          <HiCheckCircle color='grey' />
        </HStack>
        <Link to={"/playlist/id"} >
          <Text color={"#b2b2b2"} p={2}>
            VIEW FULL PLAYLIST
          </Text>
        </Link>
      </VStack>
    </VStack>
  )

}

export default PlaylistCard
