import { Text } from "@chakra-ui/react";
import React, { useState } from "react";
  
const ReadMore = ({ comment }) => {
  const text = comment;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Text w={"100%"} fontSize={14} >
      {isReadMore ? text.slice(0, 150) : `${text} `}
      {text.length >= 150 && <Text onClick={toggleReadMore} color={"gray.500"} display={"inline-block"} cursor={"pointer"}>
        {isReadMore ? `...read more` : ` show less`}
      </Text> }
    </Text>
  );
};

export default ReadMore