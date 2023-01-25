import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    HStack,
    VStack,
    Text,
    Image
} from '@chakra-ui/react'
import Logo from '../assets/youtube-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { IoMenuOutline } from 'react-icons/io5'

const DrawerComp = () => {

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const goToHome = () => {
        onClose()
        navigate("/")
        setLoading("true")
        setCategory("react")

    }

    return (
        <>
            <Button w={"50px"} variant={"unstyled"} onClick={() => onOpen()}><IoMenuOutline size={"2rem"} /></Button>

            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"xs"}>
                <DrawerOverlay />
                <DrawerContent bg={"black"}>
                    <DrawerCloseButton variant={""} pos={"absolute"} top={"5"} right={"4"} />
                    <DrawerHeader display={"flex"} justifyContent={"center"} >
                        <Image src={Logo} alt="logo" w={"120px"}cursor={"pointer"} onClick={() => goToHome()} />
                    </DrawerHeader>
                    <DrawerBody fontWeight={"bold"} fontSize={"xl"}>
                        <VStack gap={4} height={"100%"} justifyContent={"center"} textColor={"blackAlpha.800"}>
                            
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <HStack w={"100%"} justifyContent={"center"} h={"150px"}>
                            
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerComp
