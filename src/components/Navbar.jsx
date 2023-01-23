import { HStack, Icon, Text, Input, InputGroup, InputRightAddon, Avatar, Image } from '@chakra-ui/react'
import React from 'react'
import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { MdKeyboardVoice, MdOutlineNotificationsNone, MdOutlineVideoCall } from 'react-icons/md'
import Logo from '../assets/youtube-logo.png'
import createImg from '../assets/create-video.png'


const Navbar = () => {
  return (
    <header>
      <nav>
        <HStack height={"60px"} justifyContent={"space-between"} px={8} alignItems={"center"} >
          <HStack>
            <IoMenuOutline size={"2rem"} cursor={"pointer"} />
            <Image src={Logo} alt="logo" w={"120px"} cursor={"pointer"}/>
          </HStack>
          <HStack>
            <InputGroup w={"480px"} mx={2}>
              <Input placeholder="Search" borderRadius={"full"} border={"1px solid #cccccc"} _focusVisible="false" cursor={"pointer"} />
              <InputRightAddon children={<Icon as={IoSearchOutline} />} borderRightRadius={"full"} cursor={"pointer"} />
            </InputGroup>
            <MdKeyboardVoice size={"1.5rem"} cursor={"pointer"}/>
          </HStack>
          <HStack w={"120px"} justifyContent={"space-evenly"}>
            <Image src={createImg} alt="create" w={"26px"} cursor={"pointer"} />
            <MdOutlineNotificationsNone size={"1.5rem"} cursor={"pointer"}/>
            <Avatar size="sm" name='Sujay Paul' src="https://res.cloudinary.com/da5mimn3m/image/upload/v1672496743/profile_wdau7a.jpg" cursor={"pointer"}/>
          </HStack>
        </HStack>
      </nav>
    </header>
  )
}

export default Navbar
