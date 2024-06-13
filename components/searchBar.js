import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';


export default function SearchBar(){
    return(
        <View style={styles.container}>
            <TextInput placeholder='Search a job or position'/>

        </View>
    )
}

const styles= StyleSheet.create(
    {
        container:{

        }

    }
)