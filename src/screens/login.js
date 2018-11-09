import {View, TextInput, Button, Text} from 'react-native';
import React, { Component } from "react";
import { Divider } from "react-native-elements";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            username: '',
            password: '',
            token: '',
        };
    }

    Auth = () => {

        if (!this.state.username || !this.state.password) return;

        fetch('https://campus-auth.herokuapp.com/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState ({token: this.state.token = responseData.token});
                if (responseData.success === true){
                    this.props.navigation.navigate('Home');
                }
                if (responseData.message === 'Wrong password.' || responseData.message === 'User not found.'){
                    this.props.navigation.navigate('Wrong');
                }

            })
            .done();

    }

    render() {
            return (

                <View style={{backgroundColor: 'brown', marginTop:50}}>
                    <Text style={{height:30, textAlign: 'center', color: 'white'}}>...</Text>
                    <Text style={{height:30, textAlign: 'center', color: 'white'}}>Bienvenue sur mon application</Text>
                    <Text style={{height:30, textAlign: 'center', color: 'white'}}>...</Text>
                    <TextInput placeholder='username' onChangeText = {(username) => this.setState({username})} value={this.state.username}/>
                    <Divider style={{backgroundColor: 'black'}} />
                    <TextInput placeholder='password' onChangeText = {(password) => this.setState({password})} value={this.state.password} secureTextEntry={true}/>
                   <Button
                        style={{backgroundColor: 'brown'}}
                        title="Login"
                        onPress={this.Auth}
                    />
                </View>
            );


    }

}