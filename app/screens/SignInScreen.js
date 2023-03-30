import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Dimensions, PixelRatio, TextInput } from 'react-native';


const { width, height } = Dimensions.get('window');
function SignInScreen(props) {
    return (
        <View style={styles.background}>
            <Text style={styles.appName}>APARTMATES</Text>
            <ImageBackground 
            resizeMode='contain'
            style={styles.background}
            source={require("../assets/apartmatesBackground.jpg")}></ImageBackground>
            <View style={styles.inputContainer}>
        <TextInput style={styles.inputBox} placeholder="Username" placeholderTextColor="coral" textAlign="center"  />
        <TextInput style={styles.inputBox} placeholder="Password" placeholderTextColor="coral" textAlign="center"/>
      </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    appName: {
        paddingTop: width*0.2,
        fontSize: PixelRatio.getFontScale() * 50,
        color: "coral",
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        padding: width*0.02,
        marginBottom: width*0.1,
        height: width*0.15,
        width: width*0.5,
      },
})
export default SignInScreen;