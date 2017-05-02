import React, {Component} from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, Card, CardSection } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {
    state = { loggedIn: false }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCypU0kzqxoK7oyA3Plp4L6VBS6rGodgds",
            authDomain: "nativeauth-ce278.firebaseapp.com",
            databaseURL: "https://nativeauth-ce278.firebaseio.com",
            projectId: "nativeauth-ce278",
            storageBucket: "nativeauth-ce278.appspot.com",
            messagingSenderId: "981614179563"
        })

        firebase.auth().onAuthStateChanged((user)=>{
            if (user){
                this.setState({loggedIn: true})
            } else {
                this.setState({ loggedIn: false})
            }
        })
    }

    renderContent(){

        switch(this.state.loggedIn){
            case true:
                return (
                    <Card>
                        <CardSection>
                             <Button onPress={()=>firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card> 
                )
            case false:
                return <LoginForm />
            default: 
                return <Spinner />        
        }
    }

    render(){
        return(
            <View>
                <Header headerText = 'Authentication' />
                {this.renderContent()}
            </View>
        )
    }
}

export default App