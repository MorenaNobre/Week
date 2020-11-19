import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Lorem</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Lorem Ipsum</FormH1>
              <FormLabel htmlFor="for">Dolor</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Sit</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Omnis</FormButton>
              <Text>adipiscing elit</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
