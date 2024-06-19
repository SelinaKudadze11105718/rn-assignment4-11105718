import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomePageTop({name,email}){
    return(
        <View style={styles.container}>
            <View style={styles.columnHead}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            </View>
            <Image style={{position:'absolute',left:280,height:50,width:50}} source={require('../assets/profile2.png')}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:160,
        marginTop:0,
        width:254,
        height:55,
        marginLeft:24,

    },

    columnHead:{
        // marginTop:64,
        flexDirection: 'column',
        
    },

    name:{
        color:'#0D0D26',
        fontSize:24,
        fontweight:'bold',
        fontFamily:'Poppins',

    },

    email:{

    }
})