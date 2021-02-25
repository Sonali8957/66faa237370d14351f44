import React, { useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './SplashScrStyle';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(async () => {
            navigation.replace('Home')
        }, 2000);
    }, []);

    return (
        <ImageBackground
            source={require('../../assets/images/splashs.jpeg')}
            style={styles.container}>
            <Animatable.View useNativeDriver animation="bounceIn" duraton="1500">
                <Text style={styles.weltxt}>Welcome</Text>
                <Text style={styles.testStyle}> Country Test Project</Text>
            </Animatable.View>
        </ImageBackground>
    );
};

export default SplashScreen;

