
import { Flex, Heading,Hide, VStack , Box, Image, HStack, Spacer, Button, Text, TagRightIcon, Show} from '@chakra-ui/react';
import '../App.css';
import { useMediaQuery } from '@chakra-ui/react';
import HomepageIntroBarLeft from '../components/HomepageIntroBarLeft';
import Navbar from '../components/Navbar';
import HomePageIntroRight from '../components/HomePageIntroRight';
import HeadingAndDescription from '../components/HeadingAndDescription';
import CardHolderGrid from '../components/CardHolderGrid';
import Rosemary from "../assets/images/rosemary.png"

import { FavFakeData, AllFakeData } from '../components/items';

import ServiceLeftImage from "../assets/images/service-left-image.png"
import ServiceSectionRight from '../components/ServiceSectionRight';
import MenuSectionHeading from '../components/MenuSectionHeading';
import CategoryButtonSection from '../components/CategoryButtonSection';
function App() {
  return (
    <VStack p={0} >
      <NavAndIntroSection/>
      <TodaysSpecialOffer/>

      <Flex width={"100%"} alignItems="flex-end" >
          <Spacer />
          <Image src={Rosemary} />
      </Flex>

      <ServicesSection/>

      <MenuSection/>

    </VStack>
  );
}


const MenuSection = () =>{
  const [isBigScreen] = useMediaQuery("(min-width:850px)");
  return(
    <Flex direction={"column"} width={"80%"} >
      <VStack marginTop={isBigScreen?"-300px":"20px"} marginLeft={isBigScreen?"0":"0px"} width={"100%"} >
        <MenuSectionHeading/>    
      </VStack>

      <VStack>
        <CategoryButtonSection/>
      </VStack>

      <VStack marginTop="-450px" marginLeft={isBigScreen?"0px":"-30px"} >
        <CardHolderGrid data={AllFakeData}/>
      </VStack>

    </Flex>
  )
}

const NavAndIntroSection = () => {
  const [isBigScreen] = useMediaQuery("(min-width:850px)");
  return (

    <Box  backgroundImage="linear-gradient(180deg, rgba(245, 71, 72, 0.1) 0%, rgba(245, 71, 72, 0) 100%)" width="100%" height="788px" padding={1} >
      <Navbar />
      
      <Flex p={2} direction={isBigScreen?"row":"column"} >
        {/* for mobile show the image section first */}
        <Show breakpoint='(max-width: 850px)' >
          <HomePageIntroRight isMobile={true} />
        </Show>
        {/* for mobile show the image section first */}

        <HomepageIntroBarLeft/>
        
        {/* for big screen show the image section right side  */}
        <Hide breakpoint='(max-width: 850px)' >
          <HomePageIntroRight isMobile={false}/>
        </Hide>
        {/* for big screen show the image section right side  */}
      </Flex>
    </Box>
    
  )
}


const TodaysSpecialOffer = () =>{
  const [isBigScreen] = useMediaQuery("(min-width:850px)");
  return(
    <Flex marginTop={isBigScreen?"15px":"15px"} width={isBigScreen?"100%":"80%"} >
      <VStack width={isBigScreen?"100%":"100%"}  marginLeft={isBigScreen?"0px":"0px"}  >
        <HeadingAndDescription/>
        <CardHolderGrid data={FavFakeData}/>
      </VStack>
    </Flex>
  )
}


const ServicesSection = ()=>{
  const [isBigScreen] = useMediaQuery("(min-width:850px)");
  return(
    <Flex width={"100%"} direction={isBigScreen?"row":"column"} >

      <VStack marginTop="-250px">
        <Image src={ServiceLeftImage} width={isBigScreen?"850.93px":"500px"} top="1896px" />
      </VStack>

      <Flex width={isBigScreen?"50%":"90%"} marginTop={isBigScreen?"180px":"-200px"} marginLeft={isBigScreen?"-200px":"10px"} >
          <ServiceSectionRight/>
      </Flex>
      
    </Flex>
  )
}



export default App;
