/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View, Platform, StyleSheet, Text,Image, ScrollView, Alert,ImageBackground} from 'react-native';
import Mybutton from './components/Mybutton';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  appname: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
    color: '#000000', 
  }
});

export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      showME: true
    }

  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    }, 3000)
  }

  render() {
    
     let pic = {
      uri: 'https://www.img.in.th/images/073d78250f7208f79a3115c551bc2c02.png'
     };

     
    return (
     
      <View  style={styles.container}> 
 
       

        <Text style={styles.appname}>WU Delivery</Text>
        <Image source={pic} style={{marginTop: 30, width: 300, height: 300, marginBottom: 50}}/>  
       

        <View style={{flex: 1, alignContent:'center'}}>

            
        <Mybutton
          title="      เข้าใช้งาน      "
          customClick={() => this.props.navigation.navigate('Menu')}
        />
        

        </View>


      </View>
     
      
    );
  }
}

