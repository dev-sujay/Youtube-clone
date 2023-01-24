import { Avatar, VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'


const ChannelCard = ({ logo, subs, title, desc }) => {
    return (
        <VStack className='channel-card'>
            <Avatar size="xl" src={logo} cursor={"pointer"} my={2} />
            <HStack >
                <Text
                    fontSize={"sm"}
                    pl={2}
                    color={"grey"} >
                    {title}
                </Text>
                <HiCheckCircle color='grey' />
            </HStack>
            <Text
                textAlign={"center"}
                sx={{
                    maxWidth: "250px",
                    maxHeight: "50px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                    color: "#c9c9c9"
                }}
            >{desc}
            </Text>
            <Text color={"grey"} >{subs}</Text>
        </VStack>
    )
}

export default ChannelCard
