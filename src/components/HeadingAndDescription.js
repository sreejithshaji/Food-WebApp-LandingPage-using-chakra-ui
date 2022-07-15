import React from 'react'
import { Flex, Heading, VStack, InputRightElement ,InputLeftElement, Input, InputGroup, Stack, Box, Image, HStack, Spacer, Button, Text, TagRightIcon, Show} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import BGPattern from "../assets/images/bg-pattern.png";

const HeadingAndDescription = () => {
  const [isTab] = useMediaQuery("(max-width:885px)");
  const [isMobile] = useMediaQuery("(max-width:530px)");
  console.log("isTab : ", isTab)
  console.log("isMobile : ", isMobile)
  

  if(isMobile)
  {
    console.log("display mobile")
    return (
      <VStack marginTop="180px" direction="column" w="90%"  > 
        <TodaysSpecial/>
        <SmallDescription/>
      </VStack>
      
    )
  }
  else if(isTab)
  {
    console.log("display tab")
    return (
      <Flex marginTop="650px" direction="column" w="50%"> 
          <TodaysSpecial/>
          <HStack>
            <Image src={BGPattern} position="absolute"  marginLeft="-195px"/>
            <VStack>
              <SmallDescription/>
            </VStack>
          </HStack>
        
      </Flex>
      
    )
  }
  else{
    console.log("display desktop")
    return (
      <VStack marginTop="-120px" direction="column" w="100%" > 
          <TodaysSpecial/>
          
          <HStack>
            <Image src={BGPattern} position="absolute" marginLeft="-85px"/>
            <VStack>
              <SmallDescription/>
            </VStack>
          </HStack>
      </VStack>  
    )
  }
  
}

const SmallDescription =()=>{
    const [isBigScreen] = useMediaQuery("(min-width:885px)");
    return(
      <Text
        marginTop="42px"
        width={isBigScreen?"70%":"380px"}
        height={isBigScreen?"48px":"96px"}
        top="1023px"
        fontFamily="Sofia Pro"
        fontStyle="normal"
        fontWeight="400"
        fontSize="18px"
        lineHeight="24px"
        textAlign="center"
        textTransform="capitalize"
        color="#191919"
        opacity="0.8"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
      </Text>
    )  
  }

const TodaysSpecial = () => {
  const [isBigScreen] = useMediaQuery("(min-width:8850px)");
  const mainFontsize = isBigScreen?"58px":"38px";
  return (
        <HStack  marginTop={isBigScreen?"50px":"200px"} >
            <Text  left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
                fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
                fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" >
                Todays
            </Text>                             

            <Text 
                paddingLeft="2px"
                left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
                fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
                fontSize={mainFontsize} lineHeight="78px" color="#F54748" >  
                Special
            </Text>
            
            <Text 
                paddingLeft="2px"
                left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
                fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
                fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" >  
                Offers
            </Text>   
        </HStack>
      
        )
  }

  
export default HeadingAndDescription
