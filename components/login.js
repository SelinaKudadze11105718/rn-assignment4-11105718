import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';
import {useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';




import HomePage from './homepage';
import LoginImages from './loginImages';
import Credentials from './credentials';
import Separator from './separator';
import LoginButton from './loginButton';
// import HomePage from './components/homepage';


export default function Login({ navigation}) {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  return (
    <View style={styles.container}>

      {/* <HomePage/> */}
      <Text style={styles.heading}>Jobizz</Text>
     
      
      <View style={styles.welcomeMessage}>
        <View style={styles.hand}>

        <Text style={styles.welcome}>
          Welcome Back
        </Text>

        <Image style={{height:20,width:20,marginRight:100}} source={require('../assets/wavingHand.png')}/>
      </View>
      <Text style={styles.apply}>Let's log in. Apply to jobs!
      </Text>
      </View>

      <Credentials name={name} email={email} setName={setName} setEmail={setEmail} navigation={navigation}/>
      
      

     
            

      <Separator/>

      <LoginImages/>
      <Text style={styles.bottom}>Don't have an account?<Text style={{color:'blue'}}>Register</Text></Text>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading:{
    width:150,
    height:33,
    marginTop:100,
    marginLeft:-160,
   
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'top',
    color:'#356899',

  },

  welcomeMessage:{
    width:207,
    height:63,
    marginTop:10,
    marginLeft:-110,
    flexDirection: 'column',
  },
  hand:{
    flexDirection: 'row',
    

  },

  welcome:{
    width:207,
    height:34,
    // marginTop:147,
    // marginLeft:24,
    fontSize:24,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    gap:0,
  },

  apply:{
    width:170,
    height:22,
    marginTop:10,
    // marginLeft:24,
    color:'#AFB0B6'

  },

  bottom:{
    width:283,
    height:18,
    marginTop:64,
    marginLeft:12,
    textAlign:'center',
    color:'#AFB0B6'

  },

  border:{
    borderWidth:1,
    borderColor:'orange',
  },

});
