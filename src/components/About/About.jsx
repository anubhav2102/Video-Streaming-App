import React from 'react'
import {Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import {RiSecurePaymentFill} from "react-icons/ri";
import termsAndCondition from "../../assets/docs/termsAndCondition";

const Founder = () => (
  <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>
    <VStack>
      <Avatar boxSize={["40","48"]}/>
      <Text children="Co-Founder" opacity={"0.7"}/>
    </VStack>
    <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
      <Heading children="Anubhav Ladha" size={["md","xl"]}/>
      <Text textAlign={["center","left"]} children={`Hi, I am a full-stack developer...
      My mission to develop my bad habit of coding.`}/>
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video autoPlay muted src='' controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback></video>
  </Box>
);

const TandC = ({termsAndCondition}) => (
  <Box>
    <Heading size={"md"} children="Terms & Conditions" textAlign={["center","left"]} my={"4"}/>
    <Box h={"sm"} p={"4"} overflowY={"scroll"}>
      <Text fontFamily={"heading"} letterSpacing={"widest"} textAlign={["center","left"]}>{termsAndCondition}</Text>
      <Heading my={"4"} size={"xs"} children="Refund only applicable for cancellation within 7 days."/>
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
      <Heading children="About Us" textAlign={["center","left"]}/>
      <Founder/>
      <Stack m={"8"} direction={["column","row"]} alignItems={"center"}>
        <Text fontFamily={"cursive"} m={"8"} textAlign={["center","left"]}>
          We are a video streaming platform with some premium courses available only for premium users.
        </Text>
        <Link to="/subscribe">
          <Button variant={"ghost"} colorScheme='yellow'>
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer/>
      <TandC termsAndCondition={termsAndCondition}/>
      <HStack my={"4"} padding={"4"}>
        <RiSecurePaymentFill/>
        <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children="Payment is secured by Razorpay"/>
      </HStack>
    </Container>
  )
}

export default About
