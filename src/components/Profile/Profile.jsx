import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register/Register';
import { useState } from 'react';

const Profile = () => {
  const user = {
    name: 'Anubhav',
    email: 'anubhavladha11@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
        {
            course: "sads",
            poster: "https://yt3.ggpht.com/yti/AOXPAcVHhKDU__vL6ipZUotzCswX4U_l0YCFIEq7K326JQ=s88-c-k-c0x00ffffff-no-rj"
        }
    ]
  };

  const removeFromPlaylistHandler = id => {
    console.log(id);
  }
  const changeImageSubmitHandler = (e,image) => {
    e.preventDefault();
  };

  const {isOpen, onClose, onOpen} = useDisclosure();

  return (
    <Container minH="95vh" maxW={'container.lg'} py={'8'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme="yellow" variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Created At" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button color="yellow.500" variant={"unstyled"}>Cancel Subscription</Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column','row']} alignItems={'center'}>
            <Link to={"/updateprofile"}>
                <Button>Update Profile</Button>
            </Link>
            <Link to={"/changepassword"}>
                <Button>Change Password</Button>
            </Link>

          </Stack>
        </VStack>
      </Stack>
      <Heading size={"md"} my={"8"}>Playlist</Heading>
      {
        user.playlist.length > 0 && (
            <Stack direction={['column','row']} alignItems={'center'} flexWrap={"wrap"} p="4">
                {
                    user.playlist.map((ele,index) => (
                        <VStack w="48" m="2" key={ele.course}>
                            <Image boxSize={"full"} objectFit={"contain"} src={ele.poster}/>
                            <HStack>
                                <Link to={`/course/${ele.course}`}>
                                    <Button variant={"ghost"} colorScheme='yellow'> Watch Now</Button>
                                </Link>
                                <Button onClick={()=>removeFromPlaylistHandler(ele.course)}><RiDeleteBin7Fill/></Button>
                            </HStack>
                        </VStack>
                    ))
                }
            </Stack>
        )
      }
      <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({isOpen, onClose, changeImageSubmitHandler}){
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const changeImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }
    const closeHandler = () => {
        onClose();
        setImage("");
        setImagePrev("");
    }

    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={"blur(10px)"}/>
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Container>
                        <form onSubmit={e=>changeImageSubmitHandler(e,image)}>
                            <VStack spacing={"8"}>
                                {
                                    imagePrev && <Avatar src={imagePrev} boxSize={"48"}/>
                                }
                                <Input type='file' css={{"&::file-selector-button":fileUploadCss}} onChange={changeImage}/>
                                <Button w={"full"} colorScheme='yellow' type='submit'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeHandler} mr={"3"}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
