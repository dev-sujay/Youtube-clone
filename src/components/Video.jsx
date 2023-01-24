import React from 'react'
import { Box } from '@chakra-ui/react'

const Video = ({videoId}) => {
  return (
    <Box p={"10px"} position={"relative"} pb={["56%", "56%", "35%"]} pt={"50px"} w={["100%", "100%", "65%"]} h={["100%"]}>
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          allowFullScreen
          src={`https://www.youtube.com/embed/${videoId}`}
        />
      </Box>
  )
}

export default Video
