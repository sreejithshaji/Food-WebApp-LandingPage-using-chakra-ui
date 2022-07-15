import React from 'react'
import { Flex, Heading, VStack , Box, Image, HStack, Spacer, Button, Text, TagRightIcon, MenuButton,MenuList, MenuItem, Menu} from '@chakra-ui/react';

import logo from '../assets/icons/Logo.png'
import menuIcon from '../assets/icons/menu-icon.png'

import { useMediaQuery } from '@chakra-ui/react';
import { Show, Hide } from '@chakra-ui/react'

import DownloadButton from "./MainButton.js"

const Navbar = () => {
  const [isBigScreen] = useMediaQuery("(min-width:850px)");
  return (
    <VStack  >
          <Flex w="80%" >            
            
            <Image width= {isBigScreen?"121px":"97px"}
                   height={isBigScreen?"78px":"62px"}
                   left={isBigScreen?"70px":"24px"}
                   top={isBigScreen?"32px":"24px"} src={logo} 
                   />

            <Spacer/>

            <Hide  breakpoint='(max-width: 850px)' >
              <HStack align-items="flex-start" visibility={ isBigScreen?"true":"false" }
                        padding="0px" gap="50px" position="absolute" width="660px"
                        height="24px" left="461px" top="47px" >
                          <HStack align-items="flex-start"
                            padding="0px" gap="50px" width="690px"
                            height="24px" left="461px" 
                            >
                              <Text 
                              width="171px"
                              height="24px"
                              fontFamily="Sofia Pro"
                              fontStyle="normal"
                              fontWeight="400"
                              fontSize="18px"
                              textTransform="capitalize"
                              color="#191919"
                              >Today special offers</Text>
                              <Text 
                              width="110px"
                              height="24px"
                              fontFamily="Sofia Pro"
                              fontStyle="normal"
                              fontWeight="400"
                              fontSize="18px"
                              textTransform="capitalize"
                              color="#191919"
                              >Why FoodHut</Text>
                              <Text 
                              width="83px"
                              height="24px"
                              fontFamily="Sofia Pro"
                              fontStyle="normal"
                              fontWeight="400"
                              fontSize="18px"
                              textTransform="capitalize"
                              color="#191919"
                              >Our Menu</Text>
                              <Text 
                                width="146px"
                                height="24px"
                                fontFamily="Sofia Pro"
                                fontStyle="normal"
                                fontWeight="400"
                                fontSize="18px"
                                textTransform="capitalize"
                                color="#191919"
                                >Our Popular food</Text>
                              
                          </HStack>
                          
                <Spacer/>
                
              </HStack>

            </Hide>

            <Show above='md' >
              <HStack>
                <DownloadButton ButtonName={"Download App"} />
              </HStack>
            </Show>
            

            <Show below='md' > 
            
              {/* <Image src={menuIcon}  onClick={()=>{console.log("hleo")}}
                     position="absolute" width="36px" height="27px"
                     left="368px" top="41px"
               /> */}
               <Menu>
                <MenuButton as={Button} colorScheme='none' left="10px" top="21px" >
                  <Image src={menuIcon}   width="30px" height="23px"/>
                </MenuButton>

                <MenuList>
                  <MenuItem>Today special offers</MenuItem>
                  <MenuItem>Why FoodHut</MenuItem>
                  <MenuItem>Our Menu</MenuItem>
                  <MenuItem>Our Popular food</MenuItem>
                </MenuList>
              </Menu>
            
            </Show>
              
            
            

          </Flex>
        </VStack>

  )
}


export default Navbar
