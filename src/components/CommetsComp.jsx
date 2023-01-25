import { Avatar, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import ReadMore from "./ReadMore";

const CommetsComp = ({photo, name, publishTime, commentText, likesCount}) => {
    return (
        <Box>
            <HStack alignItems={"flex-start"} my={4} px={4}>
                <Avatar size="sm" src={photo} cursor={"pointer"} mr={2} />
                <VStack alignItems={"flex-start"}>
                    <HStack>
                        <Text fontSize={14}>{name} • </Text>
                        <Text fontSize={12} color={"grey"}>{publishTime}</Text>
                    </HStack>
                    <div className="container">
                        <ReadMore
                            comment={commentText}
                        />
                    </div>
                    <HStack>
                        <HStack mr={"2"}>
                            <AiOutlineLike />
                            <Text fontSize={"xs"}>{likesCount}</Text>
                        </HStack>      
                            <AiOutlineDislike />  
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    );
};

export default CommetsComp;
