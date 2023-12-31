import React from 'react'
import {Container, Heading, Input, VStack, Button} from "@chakra-ui/react";
import { useState } from 'react';

const ForgotPassword = () => {
  const [email,setEmail] = useState("");
  return (
    <Container py={"16"} h={"90vh"}>
      <form>
        <Heading children="Forgot Password" my="16" textTransform={"uppercase"} textAlign={["center","left"]}/>
        <VStack spacing={"8"}>
          <Input required value={email} onChange={e => setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' focusBorderColor='yellow.500'/>
          <Button type="submit" w={"full"} colorScheme='yellow'>Send Reset Link</Button>
        </VStack>
      </form>
    </Container>
  )
}

export default ForgotPassword
