import React from 'react'
import { Flex, Heading, VStack, InputRightElement ,InputLeftElement, Input, InputGroup, Stack, Box, Image, HStack, Spacer, Button, Text, TagRightIcon, Show} from '@chakra-ui/react';

import loveSymbol from '../assets/icons/love-symbol.png'

import crvDwnArrow from '../assets/images/crv-dwn-arrow.png'
import DeliveryUnderline from '../assets/images/Delivery-underline.png'

import DownloadButton from "./MainButton.js"

// import crvDwnArrow from '../assets/images/crv-dwn-arrow.png'

import LeftSearch from '../assets/icons/input-left-search.png'
import RightSearch from '../assets/icons/input-right-search.png'
import PlayButtonIcon from '../assets/icons/Play-button.png'


import { useMediaQuery } from '@chakra-ui/react';
import sliderIcon from "../assets/icons/slider.png"

const HomepageIntroBarLeft = () => {
  const [isBigScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex w="50%" marginTop="5%" direction="column" marginLeft={isBigScreen?"150px":"10px"}>
      
      <Show above='md' >
        <Image src={crvDwnArrow}  position="absolute"  width="139.71px" height="179.22px" left="324px" top="56px" />
      </Show>

      <PeopleTrustUs/>
      <WeAreSeriousAboutFoodAndDelivery/>
      <SmallDescription isBigScreen={isBigScreen}/>
      
      <SearchBar isBigScreen={isBigScreen}/>
      

      <HStack marginTop="30px" width="380px" >
        <DownloadButton ButtonName={"Download App"} />
        <Spacer/>
        <PlayButton/> 
      </HStack>

      <Show above='md' >
        <Image src={sliderIcon}  width="22px"  height="61px" 
              left="100px" marginTop="25px" onClick={()=>{}} />
      </Show>
      
    </Flex>
  )
}

const PlayButton = ({}) =>{
  return(
    <HStack width="183px" height="52px">
      <Image src={PlayButtonIcon}  width="52px" height="52px" marginTop="10px" />
      <Text color="black"  width="110px" height="26px" left="336px"
        top="667px" fontFamily="Poppins" fontStyle="normal"
        fontWeight="500" fontSize="17px" lineHeight="26px" >
          Watch Video
      </Text>
    </HStack>
  )
  
}

const SearchBar=({isBigScreen})=>{
  return(
        <Stack spacing={4} marginTop={isBigScreen?"27px":"32px"} >
          <Box color="white" width={isBigScreen?"421px":"350px"} height="10%"  > 
            <HStack>
              
              <InputGroup  backgroundColor="white" >
                <InputLeftElement>
                  <Image src={LeftSearch}  width="20px" height="20px" left="224px" top="92.5px" />
                </InputLeftElement>
              
                <Input placeholder='Search Food'  borderRadius="30px" color={"black"} />

                <InputRightElement>
                  <Image src={RightSearch}  width="20px" height="20px" left="224px" top="92.5px" />
                </InputRightElement>
              </InputGroup>
            </HStack>
          </Box>
        </Stack>
  )
}


const SmallDescription =({isBigScreen})=>{
  return(
    <Text
      marginTop="29px" 
      width=  {isBigScreen?"450px":"350px" }
      height="96px" top="445px"
      fontFamily="Sofia Pro" fontStyle="normal" 
      fontWeight="400" fontSize={isBigScreen?"20px":"18px" } lineHeight="32px"
      color="#191919" opacity="0.8"  >
        Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes. 
    </Text>
  )  
}

const PeopleTrustUs = () => {
  
  return (
          <HStack marginTop="80px" >
            <Box bgColor="#F54748" 
              // width="300px" height="50px"
              opacity={0.1}
              width="139px"
              height="28px"
              borderRadius="50px"
              position="absolute" />
            
            <Image
              width="20px"
              height="20px"
              left="81px"
              top="216px"
              src={loveSymbol} 
            />

            <Text 
              // width="133px"
              height="17px"
              // left="107px"
              // top="217px"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="400"
              fontSize="14px"
              lineHeight="17px"
              textAlign="center"
              // bgColor="#F54748"
              color="#191919" >People trust us </Text>
          </HStack>
  )
}



const WeAreSeriousAboutFoodAndDelivery = () => {
  const [isBigScreen] = useMediaQuery("(min-width:600px)");
  const mainFontsize = isBigScreen?"58px":"42px";
  return (
    <>
        <HStack  marginTop="20px">
          <Text  left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
            fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
            fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" >
               We're
          </Text>                             

          <Text 
            left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
            fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
            fontSize={mainFontsize} lineHeight="78px" color="#F54748" >  
            Serious  
          </Text>                             

          <Text 
            left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
            fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
            fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" >  
              For 
          </Text>                             

         </HStack>


         <HStack>
          <Text 
            left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
            fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
            fontSize={mainFontsize} lineHeight="78px" color="#F54748" > 
            Food
          </Text>                             

          <Text 
            left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
            fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
            fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" > 
             &  
          </Text>                             
          <Text 
            left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
            fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
            fontSize={mainFontsize} lineHeight="78px" color="#FDC55E" >  
              Delivery  
            <Image src={DeliveryUnderline } 
                   position="absolute" width={isBigScreen?"263px":"163px"} 
                   height={isBigScreen?"8.2px":"6.2px"}  />
          </Text> 
          
                                     
         </HStack>
      
    </>
  )
}





export default HomepageIntroBarLeft



