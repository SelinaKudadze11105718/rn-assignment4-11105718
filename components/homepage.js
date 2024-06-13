import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import HomePageTop from './homepageTop';



export default function HomePage(){
    return(
        <View style={styles.container}>
            <HomePageTop/>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:100,
    }

})