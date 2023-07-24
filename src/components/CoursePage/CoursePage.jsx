import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);
    const lectures = [
        {
            _id: 'dskjvs',
            title: 'sample',
            description: 'sample fjdkvn dfvjkvnk',
            video: {
                url: "sackmdc",
            }
        },
        {
            _id: 'dskjvs2',
            title: 'sample2',
            description: 'sample2 fjdkvn dfvjkvnk',
            video: {
                url: "sackmdc2",
            }
        },
        {
            _id: 'dskjvs3',
            title: 'sample3',
            description: 'sample3 fjdkvn dfvjkvnk',
            video: {
                url: "sackmdc3",
            }
        }
    ];
  return (
    <Grid minH={"90vh"} templateColumns={["1fr","3fr 1fr"]}>
        <Box>
            <video width={"100%"} controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback src='/'></video>
            <Heading children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} m={"4"} />
            <Heading children="Description" m={"4"} />
            <Text m={"4"} children={`${lectures[lectureNumber].description}`}/>
        </Box>
        <VStack>
            {
                lectures.map((item,index)=>{
                    return (<button onClick={()=>setLectureNumber(index)} key={item._id} style={{width: "100%", padding: "1rem", textAlign: "center", margin: 0, borderBottom: "1px solid rgba(0,0,0,0.2)"}}>
                        <Text noOfLines={1}>
                            #{index+1} {item.title}
                        </Text>
                    </button>)
                })
            }
        </VStack>
    </Grid>
  )
}

export default CoursePage
