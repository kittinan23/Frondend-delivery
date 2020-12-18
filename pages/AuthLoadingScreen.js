import React,{Component} from 'react';
import {ActivityIndicator,StatusBar,View} from 'react-native';
import User from '../User';
import AsyncStorage from '@react-native-community/async-storage';

import firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this._bootstrapAsync();
    }
    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyC5W2mrgFuCw1WInEp3uEtEVijXaKTzxME",
            authDomain: "delivery-a6407.firebaseapp.com",
            databaseURL: "https://delivery-a6407.firebaseio.com",
            projectId: "delivery-a6407",
            storageBucket: "delivery-a6407.appspot.com",
            messagingSenderId: "775265366760",
            appId: "1:775265366760:web:0975029eae90df84f98f5d",
            measurementId: "G-FQ97R7LVJ9"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        }

    _bootstrapAsync = async () => {
        User.phone  = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone ? 'App': 'Auth');
    };

    render(){
        return(
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
