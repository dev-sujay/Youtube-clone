import { HStack, Show, Icon, Image, Divider, Box, Stack } from '@chakra-ui/react'
import React from 'react'
import homeIcon from "../assets/home.svg"
import shortsIcon from "../assets/shorts.svg"
import subscriptionsIcon from "../assets/subscriptions.svg"
import libraryIcon from "../assets/library.svg"

const Navbar = () => {
    return (
        <Stack width={["100%","100%", "90px"]} h={["50px","50px", "90vh"]} position={["fixed","fixed","sticky"]} left={0} bottom={["-1px","-1px","0px"]} background={"#0f0f0f"}>
            <Stack flexDir={["row","row", "column"]} justifyContent={["space-evenly"]} alignItems={"center"}  zIndex={"overlay"}  h={["100%","100%","40%"]} borderTop={["1px solid #333333","1px solid #333333", "none"]} pb={"7px"}>
                <Image src={homeIcon} />
                <Image src={shortsIcon} />
                <Image src={subscriptionsIcon} />
                <Image src={libraryIcon} />
            </Stack>
        </Stack>
    )
}

export default Navbar
