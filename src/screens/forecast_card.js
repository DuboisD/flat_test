import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Divider, Card, Text } from "react-native-elements";

export default class ForecastCard extends Component {

    render() {
        let time;
        // Create a new date from the passed date time
        let date = new Date(this.props.detail.dt*1000);
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + date.getMinutes();
        time = hours + ':' + minutes.substr(-2);

        return (
            <Card containerStyle={{backgroundColor:'rgba(56, 172, 236, 1)', borderWidth:0, borderRadius:20}}>
                <Text style={{fontSize: 18, color: '#fff', width:100, height:50}}>{this.props.location}</Text>

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Image style={{width:100, height:100}} source={{uri:"https://openweathermap.org/img/w/" + this.props.detail.weather[0].icon + ".png"}} />
                    <Text style={{fontSize:38, color:'#fff'}}>{time}</Text>
                </View>

                <Divider style={{backgroundColor: '#dfe6e9', marginVertical:20}} />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize: 18, color: '#fff', width:100, height:50}}>{this.props.detail.weather[0].description}</Text>
                    <Text style={{fontSize: 18, color: '#fff', width:100, height:50}}>{Math.round( this.props.detail.main.temp * 10) / 10 }&#8451;</Text>
                </View>
            </Card>
        );
    }
}
