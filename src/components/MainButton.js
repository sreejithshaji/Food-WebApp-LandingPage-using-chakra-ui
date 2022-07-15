import React from 'react'
import { Flex, Heading, VStack , Box, Image, HStack, Spacer, Button, Text, TagRightIcon} from '@chakra-ui/react';

const MainButton = ({ButtonName}) => {
    return(
          <Button   background="#F54748" borderRadius="100px" height="40px"  >
            <Box height="45px" borderRadius="100px" >
                <Text 
                  marginTop="10%"
                  textAlign="center" fontFamily="Sofia Pro" 
                  fontStyle="normal" fontWeight="400" width="130px"
                  fontSize="18px" textTransform="capitalize" color="#FFFFFF" >
                    {ButtonName}
                </Text>
            </Box>
          </Button>
    )
  }

export default MainButton