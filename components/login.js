import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';

import LoginImages from './loginImages';
import Credentials from './credentials';
import Separator from './separator';
// import HomePage from './components/homepage';


export default function Login() {
  return (
    <View style={styles.container}>

      {/* <HomePage/> */}
      <Text style={styles.heading}>Jobizz</Text>
     
      
      <View style={styles.welcomeMessage}>
      <Text style={styles.welcome}>
        Welcome Back
      </Text>
      <Text style={styles.apply}>Let's log in. Apply to jobs!
      </Text>
      </View>

      <Credentials/>

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
    marginTop:106,
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

  welcome:{
    width:207,
    height:34,
    // marginTop:147,
    // marginLeft:24,
    fontSize:24,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },

  apply:{
    width:170,
    height:22,
    marginTop:10,
    // marginLeft:24,
    color:'#0D0D26',

  },

  bottom:{
    width:283,
    height:18,
    marginTop:64,
    marginLeft:12,
    textAlign:'center',
    color:'#0D0D26',

  },

  border:{
    borderWidth:1,
    borderColor:'orange',
  }
});
