import React, {Component} from 'react'
import {TextInput} from 'react-native'
import { Button, Card, CardSection } from './common'

class LoginForm extends Component {
    state = { text: ''}

    render(){
        return(
            <Card>
                <CardSection>
                    <TextInput underlineColorAndroid={'transparent'}  style={{height: 40, flex: 1}}/>
                </CardSection>

                <CardSection>
                    <Button>
                    Log In
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
export default LoginForm