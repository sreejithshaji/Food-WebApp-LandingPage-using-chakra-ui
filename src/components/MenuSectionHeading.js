import { Flex, Heading,Hide, VStack , Box, Image, HStack, Spacer, Button, Text, TagRightIcon, Show} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import React from 'react'

const MenuSectionHeading = () => {
    const [isBigScreen] = useMediaQuery("(min-width:600px)");
    const mainFontsize = isBigScreen?"48px":"42px";
    return (
      
      isBigScreen?
      <>
          <HStack  marginTop="10px" >
            <Text  left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px"color="#F54748"  >
                 Menu
            </Text>                             
  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" >  
              That
            </Text>                             
  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
              fontSize={mainFontsize} lineHeight="78px" color="#FDC55E" >  
                Always
            </Text>                             
  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
              fontSize={mainFontsize} lineHeight="78px"  color="#2E2E2E" > 
              Make
            </Text>                             

  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#F54748" > 
               You
            </Text>                    

            

          </HStack>
            
          <HStack>
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" > 
               Fall
            </Text>
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" > 
               In
            </Text>           
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#F54748" > 
               Love
            </Text>                                                 
           </HStack>
        
      </>
      :
      <>
          <HStack  marginTop="10px" >
            <Text  left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px"color="#F54748"  >
                 Menu
            </Text>                             
  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" >  
              That
            </Text>                             
  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
              fontSize={mainFontsize} lineHeight="78px" color="#FDC55E" >  
                Always
            </Text>
          </HStack>
            

          <HStack> 
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900"
              fontSize={mainFontsize} lineHeight="78px"  color="#2E2E2E" > 
              Make
            </Text>                             

  
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#F54748" > 
               You
            </Text>                    

            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" > 
               Fall
            </Text>

          </HStack>
          <HStack>
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#2E2E2E" > 
               In
            </Text>           
            <Text 
              left="4.86%" right="58.33%" top="4.66%" bottom="92.54%"
              fontFamily="Sofia Pro" fontStyle="normal" fontWeight="900" 
              fontSize={mainFontsize} lineHeight="78px" color="#F54748" > 
               Love
            </Text>                                                 
           </HStack>
        
      </>

    )
}



export default MenuSectionHeading
