import React from 'react'
import { Flex, Heading, VStack , Box, Image, HStack, Spacer, Button, Text, TagRightIcon} from '@chakra-ui/react';

const CategoryButtonSection = () => {
  return (
    <VStack>
        <HStack width="100%" marginTop={"10px"} >
            <scrollX>
                <CategoryButton ButtonName={"Ramen"}  Active={true}/>
                <CategoryButton ButtonName={"Breakfast"}  Active={false}/>
                <CategoryButton ButtonName={"Lunch"}  Active={false}/>
                <CategoryButton ButtonName={"Dinnner"}  Active={false}/>
                <CategoryButton ButtonName={"Mexican"}  Active={false}/>
                <CategoryButton ButtonName={"Italian"}  Active={false}/>
                <CategoryButton ButtonName={"Dessert"}  Active={false}/>
                <CategoryButton ButtonName={"Drinks"}  Active={false}/>
            </scrollX>
        </HStack>
    </VStack>
  )
}


const CategoryButton = ({ButtonName, Active }) =>{
    return(
        <Button marginTop={"10px"}  marginLeft={"10px"}
         width={"98px"} background={Active?"#F54748":"white"} 
         borderRadius="100px" height="40px" 
         border={Active?"0px":"1px"} >
            <Box height="45px" borderRadius="100px" >
                <Text 
                    marginTop="10%"
                    textAlign="center" fontFamily="Sofia Pro" 
                    fontStyle="normal" fontWeight="400" width="130px"
                    fontSize="18px" textTransform="capitalize" color={Active?"#FFFFFF":"#191919"} >
                    {ButtonName}
                </Text>
            </Box>
        </Button>
    )
}

export default CategoryButtonSection
