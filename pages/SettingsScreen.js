import React from 'react';
import { Switch, Text, View, TouchableOpacity, StyleSheet , AwesomeButto } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeButton from "react-native-really-awesome-button/src/themes/red";


export default class SettingsScreen extends React.Component {
  state = { department: '' }
  updateDepartment = (department) => {
    this.setState({ department: department })
  }

  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  toggleSwitch1 = (value) => {
    this.setState({ switch1Value: value })
  }
  constructor() {
    super();
    this.state = {
      switch1Value: false,
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ alignItems: 'flex-start' }}>
        <AwesomeButton
          onPress={next => {
            this.props.navigation.navigate('Editscreen');
            next();
          }}>
          <Text style={{ color: 'white', paddingBottom: 10 }}>                                                แก้ไขชื่อโปรไฟล์                                               </Text>
        </AwesomeButton>

        <AwesomeButton
          onPress={next => {
            this.props.navigation.navigate('Mapscreen');
            next();
          }}>
          <Text style={{ color: 'white', paddingBottom: 10 }}>                                                    ระบุตำแหน่ง                                                   </Text>
        </AwesomeButton>

        <AwesomeButton
          onPress={next => {
            this.props.navigation.navigate('Profile');
            next();
          }}>
          <Text style={{ color: 'white', paddingBottom: 10 }}>                                                      ติดต่อเรา                                                      </Text>
        </AwesomeButton>


       


          <Text style={{ fontSize: 25 }}>การแจ้งเตือน</Text>

          <Switch onValueChange={this.toggleSwitch1} value={this.state.switch1Value} />
          
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 25, alignItems:'center' }}>
          <AwesomeButton onPress={this._logout}>
            <Text>        ออกจากระบบ        </Text>
          </AwesomeButton>
        </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});