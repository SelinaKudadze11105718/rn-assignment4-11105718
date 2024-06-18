import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';




export default function LoginButton({navigation,name,email}){
    return(
        <View>
        <TouchableOpacity style={styles.login} onPress={()=> 
            navigation.navigate('HomePage',{name:name,email:email})}>
              <Text style={styles.loginText}>Login</Text>
            
        </TouchableOpacity>
        </View>
    )
}



const styles=StyleSheet.create({
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
        paddingLeft:130,
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
})




