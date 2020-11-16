import React, { Component } from 'react';
import { Alert, TouchableOpacity, TextInput, View, StyleSheet, Text } from 'react-native';
import Input from './components/Input'

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      city: '',
      focusedItem: "",
    };
  }
  
 
 handleSubmit = () => {
   const {  firstname, lastname, email, phone, city} = this.state;
   Alert.alert(
   'Welcome Onboard' + '\n' + firstname + lastname)
 }

  render() {
    const {  firstname, lastname, email, phone, city, focusedItem} = this.state;
    return (
      <View style={styles.container}>
      
        <Text style={styles.navigation}>&#x2190; Sign Up </Text>
        
        <Text style={styles.header}> Enter Your Details</Text>
        
        <Text style={styles.ptag}>
          This info will be displayed to clients offering the ride.
        </Text>
        
        <Input
          label='First Name'
          value={firstname}
          id='firstname'
          onChange={(firstname) => this.setState({firstname})}
          placeholder= "Enter Your First Name"
          onFocus = {() => this.setState({focusedItem: "firstname"})}
          onBlur = {() => this.setState({focusedItem: ''})}
          focusedItem= {focusedItem}
        />

        <Input
          label='Last Name'
          value={lastname}
          id='lastname'
          onChange={(lastname) => this.setState({lastname})}
          placeholder= "Enter Your Last Name"
          onFocus = {() => this.setState({focusedItem: "lastname"})}
          onBlur = {() => this.setState({focusedItem: ''})}
          focusedItem= {focusedItem}
        />
        
        <Input
          label='Email'
          value={email}
          id='email'
          onChange={(email) => this.setState({email})}
          placeholder= "Enter Your Email"
          onFocus = {() => this.setState({focusedItem: "email"})}
          onBlur = {() => this.setState({focusedItem: ''})}
          focusedItem= {focusedItem}
        />
        
        <Input
          label='Phone'
          value={phone}
          id='phone'
          onChange={(phone) => this.setState({phone})}
          placeholder= "Enter Your Phone"
          onFocus = {() => this.setState({focusedItem: "phone"})}
          onBlur = {() => this.setState({focusedItem: ''})}
          focusedItem= {focusedItem}
        />
        
        <Input
          label='City'
          value={city}
          id='city'
          onChange={(city) => this.setState({city})}
          placeholder= "Enter Your City"
          onFocus = {() => this.setState({focusedItem: "city"})}
          onBlur = {() => this.setState({focusedItem: ''})}
          focusedItem= {focusedItem}
        />
        
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      
        <Text style={styles.login}>
          Already Signed Up? {' '} 
            <Text style={styles.link}>
              Login 
            </Text>
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  navigation: {
    color: '#00000',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 40
  },
  header: {
    color: '#00000',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 5
  },
  ptag: {
    color: '#585858',
    marginBottom: 30
  }, 
  login : { 
    textAlign: 'center' 
  },
  link: {
    color: '#585858',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 20
  }, 
    btnText: {
    color: '#fff',
  }, 
  
  button: {
    backgroundColor: '#4630EB',
    width: '100%',
    height: 44,
    borderRadius: 7,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20
    
  },
});
