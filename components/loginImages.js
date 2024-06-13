import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';

export default function LoginImages(){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/apple (1).png')}/>
            <Image source={require('../assets/google_1.png')}/>
            <Image source={require('../assets/facebook.png')}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:100,
        gap:50,

    }
})