import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';


export default function SearchBar(){
    return(
        <View style={styles.container}>
            <View style={styles.ImageText}>
                <Image source={require('../assets/search.png')}/>
                <TextInput placeholder='Search a job or position'/>
            </View>
            <Image style={{position:'absolute', left:295}} source={require('../assets/filter.png')}/>

        </View>
    )
}

const styles= StyleSheet.create(
    {
        container:{
            flexDirection: 'row',
            gap:60,
            marginTop:30,
            marginLeft:27,

        },

        ImageText:{
            flexDirection: 'row',
            gap:20,
        }

    }
)