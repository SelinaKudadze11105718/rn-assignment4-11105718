import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ScrollView,FlatList } from 'react-native';

export default function FeaturedJobs(props){
    const componentColor = props.backgroundcolor
    return(
        <View style={styles.container}>
            <View style={[styles.topBottom]}>
                <View style={styles.top}>
                    <Image style={{height:25,width:25}}source={props.image}/>
                    <View style={styles.roleComp}>
                        <Text>{props.role}</Text>
                        <Text>{props.company}</Text>
                    </View>
                </View>


                <View style={styles.bottom}>
                    <Text>{props.salary}</Text>
                    <Text style={{position:'absolute',left:150, right:10,marginLeft:5}}>{props.location}</Text>
                </View>
            </View>

        </View>
    )

}

const styles=StyleSheet.create({


    topBottom:{
        height:186,
        width:290,
        flexDirection:'column',
        gap:50,
        marginBottom:40,
        backgroundColor:'#ffffff',
        border:1,
        borderRadius:20,
       

    },
    altColor:{
        backgroundColor:'blue',

    },

    bottom:{
        flexDirection:'row',
        gap:100,
        marginLeft:15,
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