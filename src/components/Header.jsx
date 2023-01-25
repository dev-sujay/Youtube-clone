import { HStack, Icon, Text, Input, InputGroup, InputRightAddon, Avatar, Image, Hide, Divider, useConst, IconButton, Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { MdKeyboardVoice, MdOutlineNotificationsNone, MdOutlineVideoCall } from 'react-icons/md'
import Logo from '../assets/youtube-logo.png'
import createImg from '../assets/create-video-big.png'
import { contextData } from '../App'
import { Link, useNavigate } from 'react-router-dom'
import DrawerComp from './DrawerComp'



const Header = () => {
  const { setCategory, setLoading } = useContext(contextData)
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState("")
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading("true")
    setCategory(inputValue)
    navigate("/")
    
  }

  const goToHome = () => {
    setLoading("true")
    setCategory("react")
    navigate("/")
    
  }

  return (
    <header style={{
      position:"sticky",
      top:"-1px",
      background:"#0f0f0f",
      zIndex:100
    }}>
      <nav >
        <HStack height={"60px"} justifyContent={"space-between"} px={[0, 8]} alignItems={"center"} >
          <HStack>
            <Hide below='md'>
            <DrawerComp />
            </Hide>
            <Image src={Logo} alt="logo" w={"120px"} cursor={"pointer"} onClick={()=>goToHome()} />
          </HStack>
          <HStack>
          <form onSubmit={(e) => handleSubmit(e)}>
            <InputGroup w={["50vw", "50vw", "50vw", "480px"]} mx={2}>
              <Input
                placeholder="Search"
                borderRadius={"full"}
                border={"1px solid #222222"}
                cursor={"pointer"}
                h={["35px", "40px"]}
                focusBorderColor={"transparent"}
                value={inputValue}
                onChange={(e) => handleChange(e)}
              />
              <InputRightAddon
                pr={0}
                bgColor={"#222222"}
                borderRightRadius={"full"}
                cursor={"pointer"}
                border={"1px solid #222222"}
                h={["35px", "40px"]}
              >
                <Button variant={"unstyled"} type={"submit"} height={"100%"}  width={"100%"}>
                  <IoSearchOutline/>
                </Button>
              </InputRightAddon>
            </InputGroup>
            </form>
            <Hide below='md'>
              <MdKeyboardVoice size={"1.5rem"} cursor={"pointer"} />
            </Hide>
          </HStack>
          <HStack w={["50px","50px", "20%"]} justifyContent={"space-evenly"}>
            <Hide below='md'>
              <Image src={createImg} alt="create-content" w={"2.8rem"} cursor={"pointer"} />
              <MdOutlineNotificationsNone size={"1.8rem"} cursor={"pointer"}  />
            </Hide>
            <Avatar size="sm" name='Sujay Paul' src="https://res.cloudinary.com/da5mimn3m/image/upload/v1672496743/profile_wdau7a.jpg" cursor={"pointer"} />
          </HStack>
        </HStack>
      </nav>
      <Hide above='md'>
        <Divider borderColor={"#333333"} />
      </Hide>
    </header>

  )
}

export default Header
