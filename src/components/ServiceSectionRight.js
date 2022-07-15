import { Flex, Heading,Hide, VStack , Box, Image, HStack, Spacer, Button, Text, TagRightIcon, Show} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import React from 'react'

import cleanKitchen from "../assets/icons/cleanKitchen.png"
import onlineOrder from "../assets/icons/online-order.png"
import Organized from "../assets/icons/Organized.png"
import PreReservation from "../assets/icons/PreReservation.png"
import superChef from "../assets/icons/superChef.png"
import twentyFourSeven from "../assets/icons/twentyFourSeven.png"
import MainButton from './MainButton';


const ServiceSectionRight = () => {
  return (
    <Flex direction={"column"} >
        <WeAreSeriousAboutFoodAndDelivery/>
        <SmallDescription/>
        <ServicesList/>

        <Flex marginTop={"30px"} >
            <MainButton  ButtonName={"About Us"}/>
        </Flex>
        
    </Flex>
  )
}

const WeAreSeriousAboutFoodAndDelivery = () => {
    const [isBigScreen] = useMediaQuery("(min-width:600px)");
    const mainFontsize = isBigScreen?"48px":"42px";
    return (
      <>
          <HStack  marginTop="10px">
            <Text  left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" >
                 We are
            </Text>                             
  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#F54748" >  
              more
            </Text>                             
  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
              fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" >  
                than
            </Text>                             
  
           </HStack>
  
  
           <HStack>
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
              fontSize={mainFontsize} lineHeight="78px" color="#FDC55E" > 
              multiple
            </Text>                             
  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" > 
               Services  
            </Text>                    
           </HStack>
        
      </>
    )
}



const SmallDescription =()=>{
    const [isBigScreen] = useMediaQuery("(min-width:885px)");
    return(
      <Text
        marginTop="32px"
        width={isBigScreen?"85%":"380px"}
        height={isBigScreen?"48px":"96px"}
        fontFamily="Sofia Pro"
        fontStyle="normal"
        fontWeight="400"
        fontSize="18px"
        lineHeight="24px"
        textTransform="capitalize"
        color="#191919"
        opacity="0.8"
        textAlign="left"
        >
          This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food
      </Text>
      
    )  
}

const ServicesList = () =>{
    const [isBigScreen] = useMediaQuery("(min-width:885px)");
    return(
        <Flex marginTop={"0px"} direction={isBigScreen?"row":"column"} marginLeft={isBigScreen?"0px":"24px"} >
            <Flex marginTop={isBigScreen?"60px":"0"} direction="column" >
                <SingleServiceElement icon={onlineOrder} name={"Online Order"} />
                <SingleServiceElement icon={PreReservation} name={"Pre Reservation"} />
                <SingleServiceElement icon={superChef} name={"Super Chef"} />
            </Flex>
            <Flex marginTop={isBigScreen?"60px":"0"} direction="column" marginLeft={isBigScreen?"115px":"0"}  >
                <SingleServiceElement icon={twentyFourSeven} name={"24/7 Service"} />
                <SingleServiceElement icon={Organized} name={"Oragonized Foodhut Place"} />
                <SingleServiceElement icon={cleanKitchen} name={"Clean Kitchen"} />
            </Flex>
        </Flex>
    )
}

const SingleServiceElement = ({icon,name}) =>{
    return(
        <HStack marginTop={"30px"} >
            <Image src={icon} />
            <Text
                width="208px"
                fontFamily="Sofia Pro"
                fontStyle="normal"
                fontWeight="400"
                fontSize="18px"
                lineHeight="24px"
                color="#191919"
            >{name}</Text>
        </HStack>
    )
}

export default ServiceSectionRight
