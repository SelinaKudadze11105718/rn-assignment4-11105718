import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginButton from './loginButton';


export default function Credentials({navigation,name,email,setName,setEmail}){
    return(
        <View style={styles.container}>
            
            <TextInput style={styles.name} placeholder='Name' onChangeText={(text)=>setName(text)}  value={name}/>
            <TextInput style={styles.email} placeholder='Email' onChangeText={(text)=>setEmail(text)}  value={email} />


            <LoginButton navigation={navigation} name={name} email={email}/>

           

           

            

           
           
        </View>
    )
}

const styles= StyleSheet.create(
    {
     container:{
        width:328,
        height:208,
        marginTop:50,
        marginLeft:-50,
        border:1,
     }   
    ,
        
       

        name:{
            width:327,
            height:52,
            marginBottom:20,
            marginLeft:23,
            border:1,
            borderRadius:10,
            backgroundColor:'#AFB0B6',

        },

        email:{
            width:327,
            height:52,
            // marginTop:329,
            marginLeft:24,
            border:1,
            borderRadius:10,
            backgroundColor:'#AFB0B6',

        },

        

    }
)