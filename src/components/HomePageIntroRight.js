import React from 'react'

import { Flex, Heading, VStack , Box, Image, HStack, Spacer, Button, Text, TagRightIcon} from '@chakra-ui/react';

import girlSmile from "../assets/images/girl-smile-full.png"
import girlSmileMobile from "../assets/images/girl-smile-full-mobile.png"

const HomePageIntroRight = ({isMobile}) => {
  return (
    <>
      {
        isMobile?
        <VStack w="100%" marginTop="10px" >
            <Image src={girlSmileMobile} width="100%"  height="80%"/>
        </VStack>
        :
        <VStack w="70%" marginTop="-80px" textAlign="center" marginLeft="-40px" >
            <Image src={girlSmile} width="150%" 
                  height="100%" left="789px" />
        </VStack>
      }
    </>
  )
}

export default HomePageIntroRight
