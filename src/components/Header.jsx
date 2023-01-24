import { HStack, Icon, Text, Input, InputGroup, InputRightAddon, Avatar, Image, Hide, Divider, useConst, IconButton, Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { MdKeyboardVoice, MdOutlineNotificationsNone, MdOutlineVideoCall } from 'react-icons/md'
import Logo from '../assets/youtube-logo.png'
import createImg from '../assets/create-video-big.png'
import { contextData } from '../App'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
  const { setCategory, setLoading } = useContext(contextData)
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState("")
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/")
    setLoading("true")
    setCategory(inputValue)
  }

  return (
    <header>
      <nav>
        <HStack height={"60px"} justifyContent={"space-between"} px={[0, 8]} alignItems={"center"} >
          <HStack>
            <Hide below='md'>
              <IoMenuOutline size={"2rem"} cursor={"pointer"} />
            </Hide>
            <Link to={"/"}>
            <Image src={Logo} alt="logo" w={"120px"} cursor={"pointer"} />
            </Link>
          </HStack>
          <HStack>
          <form onSubmit={(e) => handleSubmit(e)}>
            <InputGroup w={["50vw", "50vw", "480px"]} mx={2}>
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
          <HStack w={["50px","50px", "150px"]} justifyContent={"space-evenly"}>
            <Hide below='md'>
              <Image src={createImg} alt="create" w={"3.2rem"} cursor={"pointer"} borderRadius={"full"} p={2} />
              <MdOutlineNotificationsNone size={"2.8rem"} cursor={"pointer"} style={{ padding: "10px" }} />
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
