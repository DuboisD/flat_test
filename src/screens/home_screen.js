import React, {Component} from 'react'
import { View, Button } from 'react-native';

export default class Home_screen extends Component {


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button
                    title="Open Weather page"
                    onPress={() =>
                        navigate('Forcast')
                    }
                />
                <Button
                    title="Open Geolocation page"
                    onPress={() =>
                        navigate('Geoloc')
                    }
                />
            </View>
        );
    }
}
