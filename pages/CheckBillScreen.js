import React from 'react';
import { Switch, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeButton from "react-native-really-awesome-button/src/themes/red";
import {data} from '../model/data';


export default class CheckBillScreen extends React.Component {
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
      <View style={styles.container}>
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
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