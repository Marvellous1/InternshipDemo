import * as React from 'react';
import styled from "styled-components/native"

export default function Input({label, value ,id, onChange}) {
  return (
        <FormGroup>
          <Label>{label}</Label>
          <InputWrapper
            value={value}
            onChangeText={onChange}
            placeholder={"Enter your " + id}
            name={id}
          />
        </FormGroup>
  );
}

const FormGroup = styled.View`
  margin-bottom: 15px;
`

const Label = styled.Text`
  color: black;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 5px;
`

const InputWrapper = styled.TextInput`
  width: 100%;
  height: 44px;
  padding: 10px;
  background-color: #F6F6F6;
  border: 1px solid #F6F6F6;
  margin-bottom: 10px;
`