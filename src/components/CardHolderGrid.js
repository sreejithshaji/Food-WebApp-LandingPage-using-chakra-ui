import React from 'react'
import { Flex, Heading, VStack, InputRightElement ,InputLeftElement, Input, InputGroup, Stack, Box, Image, HStack, Spacer, Button, Text, TagRightIcon, Show, SimpleGrid, Circle} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';


import cardBg from "../assets/images/card-bg.png"
import dummy from "../assets/images/dummy.png"
import MainButton from './MainButton';
import Star from "../assets/icons/star.png"
const CardHolderGrid = ({data}) => {
    const [isBigScreen] = useMediaQuery("(min-width:850px)");
    
    return (
        <Flex marginTop="450px" direction="column" w={isBigScreen?"95%":"95%"} > 
            <SimpleGrid columns={isBigScreen?4:1} minChildWidth={isBigScreen?"22%":"95%"} py={6} ml={10} width="100%" >
                <CardContainer data={data}/>
            </SimpleGrid>
        </Flex>
    )
}

const CardContainer = ({data}) =>{
    return(
      data.map((eachItem, key)=>{
        return(
            <Card item={eachItem} key={key}/>
        )
      })
    )
  }
  
const Card =({item})=>{
    const [isBigScreen] = useMediaQuery("(min-width:850px)");
    
    return(
      
        <Box
              mt={4}
              maxW={isBigScreen?"310px":"310px"}
              w={"full"}
              rounded={"md"}
              p={1.5}
              overflow={"hidden"}
              height="498px"
              bgImage={cardBg}
            >

            <VStack 
            >
              <Circle
                marginTop="20px"
                width="198px"
                height="207px"
                left="131px"
                top="1166px"
                bgImage={dummy}
              />

                <VStack >
                  <Circle 
                    marginLeft="115px"
                    marginTop="-70px"
                    width="60px" height="60px"
                    background="#FDC55E"
                    border="4px solid #FFFFFF" >
                      <Text  fontFamily="Sofia Pro"
                        fontStyle="normal" fontWeight="400"
                        fontSize="18px" lineHeight="24px"
                        textAlign="center" textTransform="capitalize"
                        color="#FFFFFF" >
                        {item.price} $ 
                      </Text>
                  </Circle>

                </VStack>

                <Box>

                  <Rating rating={item.rating} />

                  <Text align="center"
                        fontFamily="Sofia Pro"
                        fontStyle="normal"
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="33px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#F54748"
                        marginTop="10px"
                   >
                    {item.name}
                  </Text>
                  <Text align={"center"} 
                        width="243px"
                        fontFamily="Sofia Pro"
                        fontStyle="normal"
                        fontWeight="400"
                        fontSize="16px"
                        lineHeight="21px"
                        textAlign="center"
                        textTransform="capitalize"
                        color="#191919"
                        opacity="0.8"
                        marginTop="16px"
                   >
                    {item.description }
                  </Text>
                </Box>
                
                <HStack height={"25px"}/>
                <HStack>
                  <MainButton ButtonName={"Order Button"}  />
                </HStack>
                
            </VStack>

            
            

      </Box>
    )
}
  
const Rating = ({rating}) =>{

  return(
      <VStack  marginTop={"10px"} >
        <HStack>
          <Image src={Star}/>
          <Text
            fontFamily="Sofia Pro"
            fontStyle="normal"
            fontWeight="400"
            fontSize="18px"
            lineHeight="24px"
            textAlign="center"
            textTransform="capitalize"
            color="#191919"
          >
            ( {rating} )
          </Text>
        </HStack>
      </VStack>
  )
}
export default  CardHolderGrid
