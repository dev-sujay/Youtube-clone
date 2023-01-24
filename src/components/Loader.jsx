import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = ({height, width}) => {
  return (
    <VStack h={height} w={width} justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        <Spinner size={"md"} />
      </Box>
    </VStack>
  )
}

export default Loader