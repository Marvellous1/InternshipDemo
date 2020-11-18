import React, { Component } from "react";
import { Alert, ScrollView } from "react-native";
import Input from "./components/Input";
import styled from "styled-components/native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      city: "",
    };
  }

  handleSubmit = () => {
    const { firstname, lastname, email, phone, city } = this.state;
    Alert.alert("Welcome Onboard" + "\n" + firstname + lastname);
  };

  render() {
    const { firstname, lastname, email, phone, city, focusedItem } = this.state;
    return (
      <Container>
        <ScrollView>
          <Navigation>&#x2190; Sign Up </Navigation>

          <Header> Enter Your Details</Header>

          <SimpleText>
            This info will be d isplayed to clients offering the ride.
          </SimpleText>

          <Input
            label="First Name"
            value={firstname}
            id="firstname"
            onChange={(firstname) => this.setState({ firstname })}
          />

          <Input
            label="Last Name"
            value={lastname}
            id="lastname"
            onChange={(lastname) => this.setState({ lastname })}
          />

          <Input
            label="Email"
            value={email}
            id="email"
            onChange={(email) => this.setState({ email })}
          />

          <Input
            label="Phone"
            value={phone}
            id="phone"
            onChange={(phone) => this.setState({ phone })}
          />

          <Input
            label="City"
            value={city}
            id="city"
            onChange={(city) => this.setState({ city })}
          />

          <ButtonContainer onPress={this.handleSubmit}>
            <ButtonText>Submit</ButtonText>
          </ButtonContainer>

          <TextCenter>
            Already Signed Up? <LinkWrapper>Login</LinkWrapper>
          </TextCenter>
        </ScrollView>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-horizontal: 20px;
  padding-vertical: 50px;
`;

const Navigation = styled.Text`
  color: black;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 40px;
`;

const Header = styled.Text`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
`;

const SimpleText = styled.Text`
  color: #222222;
  margin-bottom: 30px;
`;

const LinkWrapper = styled.Text`
  color: #4630eb;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: #4630eb;
  width: 100%;
  height: 44px;
  border-radius: 7px;
  padding: 12px;
  margin-top: 40px;
  margin-bottom: 20px;
`;
const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;

const TextCenter = styled.Text`
  text-align: center;
`;
