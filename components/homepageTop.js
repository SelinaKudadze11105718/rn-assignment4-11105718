import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';

export default function HomePageTop(){
    return(
        <View style={styles.container}>
            <View style={styles.columnHead}>
            <Text style={styles.name}>Eric Atsu</Text>
            <Text style={styles.email}>eric@gmail.com</Text>
            </View>
            <Image source={require('../assets/profile.png')}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:160,

    },

    columnHead:{
        marginTop:15,
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