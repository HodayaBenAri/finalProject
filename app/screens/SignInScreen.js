import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

function SignInScreen(props) {
    return (
        <View style={styles.background}>
            <Text>APARTMATES</Text>
            <ImageBackground 
            resizeMode='contain'
            style={styles.background}
            source={require("../assets/apartmatesBackground.jpg")}></ImageBackground>
        </View>
        
    );
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',

    }
})
export default SignInScreen;