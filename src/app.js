import React, {Component} from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCypU0kzqxoK7oyA3Plp4L6VBS6rGodgds",
            authDomain: "nativeauth-ce278.firebaseapp.com",
            databaseURL: "https://nativeauth-ce278.firebaseio.com",
            projectId: "nativeauth-ce278",
            storageBucket: "nativeauth-ce278.appspot.com",
            messagingSenderId: "981614179563"
        })
    }
    render(){
        return(
            <View>
                <Header headerText = 'Authentication' />
                <LoginForm />
            </View>
        )
    }
}

export default App