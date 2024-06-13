import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';


export default function Credentials(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.name} placeholder='Name' />
            <TextInput style={styles.email} placeholder='Email' />

            <TouchableOpacity style={styles.login}>
                <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
           
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
        login:{
            backgroundColor: '#356899',
            width:327,
            height:56,
            marginTop:30,
            marginLeft:24,
            border:1,
            paddingTop:16,
            paddingBottom:16,
            paddingRight:48,
            paddingLeft:48,
            border:1,
            borderRadius:8,
            gap:10,
        },
        loginText:{
            width:47,
            height:24,
            fontFamily:'Poppins',
            fontSize:16,
            textAlign: 'right',
            color:'#FFFFFF',
        },

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