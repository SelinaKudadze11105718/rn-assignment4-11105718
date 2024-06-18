import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';


export default function Separator(){
    return(
    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:80}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black',marginLeft:25}} />
            <View>
                <Text style={{width: 150, textAlign: 'center',color:'#AFB0B6'}}>Or continue with</Text>
            </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black',marginRight:25}} />
    </View>
)

}