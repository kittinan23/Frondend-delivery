/*Screen to register the user*/
import React from 'react';
import { View, Text, Alert, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button/src/themes/c137";import User from '../User'
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';


export default class LoginScreen extends React.Component {
  static navigationOption = {
    header: null
  }

  state = {
    phone: '',
    name: ''
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }


  submitFrom = async () => {
    if (this.state.phone.length < 8 ) {
      Alert.alert('Error', 'Wrong phone number')
    } else if (this.state.name.length < 1) {
      Alert.alert('Error', 'Wrong name')
    } else {
      await AsyncStorage.setItem('userPhone', this.state.phone);
      User.phone = this.state.phone;
      firebase.database().ref('users/' + User.phone).set({ name: this.state.name });
      this.props.navigation.navigate('App');
    }
  }

  render() {
    let pic = {
      uri: 'https://www.img.in.th/images/5c3c18c8d57d5dde200706b8f5488a9f.png'
     };
     
    return (
      
      <View style={styles.container}>
        

        <Text style={{ fontSize: 50, justifyContent: 'center', alignItems: 'center' }}>เข้าสู่ระบบ</Text>
        <Text style={{ fontSize: 50, justifyContent: 'center', alignItems: 'center' }}>MF Delivery</Text>
        <Image source={pic} style={{ width: 370, height: 250, justifyContent: 'center' }} />
       
      
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TextInput
          placeholder="Student Number"
          keyboardType="number-pad"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}
        />

        <AwesomeButton
          onPress={this.submitFrom}>
          <Text>        Login       </Text>
        </AwesomeButton>

        
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8ffffd'
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    width: '90%',
    marginBottom: 10,
    borderRadius: 10
  }
})




/*
export default class LoginScreen extends React.Component {
  static navigationOption = {
    header: null
  }

  state = {
    phone: '',
    name: '',
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }


  submitFrom = async () => {
    if (this.state.phone.length < 10) {
      Alert.alert('Error', 'Wrong phone number')
    } else if (this.state.name.length < 3) {
      Alert.alert('Error', 'Wrong name')
    } else {
      await AsyncStorage.setItem('userPhone', this.state.phone);
      User.phone = this.state.phone;
      firebase.database().ref('users/' + User.phone).set({ name: this.state.name });
      this.props.navigation.navigate('Menu');
    }
  }

  render() {
    return (

      <View style={styles.container}>

        <Text style={{ fontSize: 25, justifyContent: 'center', alignItems: 'center' }}>ยินดีต้อนรับ</Text>

        <TextInput
          placeholder="เบอร์โทรศัพท์"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}
          keyboardType="number-pad"
        />
        <TextInput
          placeholder="ชื่อ"
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />

        <AwesomeButton
          onPress={this.submitForm}
        >
          <Text>         เข้าใช้งาน         </Text>
        </AwesomeButton>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7FCCFF'
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    width: '90%',
    marginBottom: 10,
    borderRadius: 10
  }
})

*/