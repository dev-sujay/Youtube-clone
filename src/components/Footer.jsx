import { HStack, Show, Icon, Image, Divider } from '@chakra-ui/react'
import React from 'react'
import homeIcon from "../assets/home.svg"
import shortsIcon from "../assets/shorts.svg"
import subscriptionsIcon from "../assets/subscriptions.svg"
import libraryIcon from "../assets/library.svg"

const Footer = () => {
    return (
        <Show below='md'>  
            <nav style={{
                position:"fixed",
                bottom:"0px",
                zIndex:1,
                background:"#0f0f0f",
                width:"100%",
                borderTop:"1px solid #333333"
                

            }}>
                <HStack justifyContent={"space-evenly"} h={"50px"} >
                <Image src={homeIcon} />
                <Image src={shortsIcon} />
                <Image src={subscriptionsIcon} />
                <Image src={libraryIcon} />

                </HStack>
            </nav>
        </Show>
    )
}

export default Footer
