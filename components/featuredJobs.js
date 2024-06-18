import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ScrollView,FlatList } from 'react-native';

export default function FeaturedJobs(props){
    return(
        <View style={styles.container}>
            <View style={styles.topBottom}>
                <View style={styles.top}>
                    <Image source={props.image}/>
                    <View style={styles.roleComp}>
                        <Text>{props.role}</Text>
                        <Text>{props.company}</Text>
                    </View>
                </View>


                <View style={styles.bottom}>
                    <Text>{props.salary}</Text>
                    <Text>{props.location}</Text>
                </View>
            </View>

        </View>
    )

}

const styles=StyleSheet.create({

    container:{

        flexDirection:'row',
        height:145,
        width:239,
        // flex:1,
        marginTop:316,
        marginLeft:48,

    },

    topBottom:{
        flexDirection:'column',
        gap:50,
        marginBottom:40,

    },

    bottom:{
        flexDirection:'row',
        gap:100,
        marginLeft:30,
        marginTop:43,
        height:24,
        
        


    },

    top:{
        flexDirection:'row',
        gap:20,
        width:207,
        height:27,
        marginTop:31,
        marginLeft:30,
    },
    roleComp:{
        flexDirection:'column',
        gap:5,
    },

    container:{
        // backgroundColor:'pink',

    }


})