import React from 'react'
import {Container, Heading, Input, Text, HStack, Button, Stack, VStack, Image} from "@chakra-ui/react"
import { useState } from 'react'
import {Link} from "react-router-dom";

const Course = ({views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount}) => {
    return (
        <VStack className='course' alignItems={["center","flex-start"]}>
            <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
            <Heading textAlign={["center","left"]} maxW={"200px"} size={'sm'} fontFamily={"sans-serif"} noOfLines={3} children={title} />
            <Text noOfLines={2} children={description}/>
            <HStack>
            <Text fontWeight={"bold"} textTransform={"uppercase"} children={"Creator"}/>
            <Text fontFamily={"body"} textTransform={"uppercase"} children={creator}/>
            </HStack>
            <Heading textAlign={"center"} size="xs" children={`Lectures - ${lectureCount} `} textTransform={"uppercase"} />
            <Heading size="xs" children={`Views - ${views} `} textTransform={"uppercase"} />
            <Stack direction={["column","row"]} alignItems={"center"}>
                <Link to={`/course/${id}`}>
                    <Button colorScheme={"yellow"} >Watch Now!</Button>
                </Link>
                <Button variant={"ghost"} colorScheme={"yellow"} onClick={() => addToPlaylistHandler(id)} >Add to playlist</Button>
            </Stack>
        </VStack>
    );
}

const Courses = () => {
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const addToPlaylistHandler = () => {
        console.log("Added to playlist");
    }
    const categories = [
        "Web Development", "Artificial Intelligence", "Data Structure & Algorithm", "App Development", "Data Science", "Game Development"
    ]
  return (
    <Container minH={"95vh"} maxW={"container.lg"} paddingY="8" css={{
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    }}>
        <Heading children="All Courses" m={"8"}/>
        <Input value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder='Search a course...' type='text' focusBorderColor='yellow.500'/>
        <HStack paddingY={"8"}>
            {
                categories.map((item,index)=>(
                    <Button key={index} onClick={()=>setCategory(item)} minW={"60"}>
                        <Text children={item}/>
                    </Button>
                ))
            }
        </HStack>
        <Stack direction={["column","row"]} flexWrap="wrap" justifyContent={["flex-start","space-evenly"]} alignItems={["center","flex-start"]}>
            <Course 
                title={"Sample"} description={"sample"} views={23} imageSrc={"Sample"} id={"Sample"} creator={"Harry"} lectureCount={2}
                addToPlaylistHandler={addToPlaylistHandler}
            />
        </Stack>
    </Container>
    
  )
}

export default Courses
