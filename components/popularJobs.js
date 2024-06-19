import { useState } from 'react';

import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,FlatList,ScrollView } from 'react-native';



export default function PopularJobs(props){
 
    return(
       
        <View style={{marginTop:-70,marginBottom:70}}>
            <View  style={styles.container}>
           
                <View style={styles.logoRole}>
                <View style={styles.image}>
                    <Image style={{ height:30,width:30}}source={props.image} />
                </View>
                <View style={styles.roleCompany}>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'#0D0D26'}}>{props.role}</Text>
                    <Text>{props.company}</Text>
            </View>
            </View>

            <View style={styles.wageCity}>
                <Text style={{fontSize:14,color:'#0D0D26',textAlign:'right'}}>{props.wage}</Text>
                <Text  style={{fontSize:14,color:'#0D0D26',textAlign:'right'}}>{props.city}</Text>
                
            </View>

            </View>
            
            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:70,
        marginBottom:25,
        borde:1,
        padding:25,
        borderRadius:10,
        backgroundColor:'#FAFAFD',
        marginTop:-5,
        marginRight:4


    },
    image:{
        marginTop:2,
       
    

    },
    roleCompany:{
        flexDirection:'column',
        gap:10,
        // marginRight:120,
        // marginLeft:-50,

    },
    wageCity:{
        flexDirection:'column',
        gap:10,
        position:'absolute' ,left:260, top:20,right:10
    },

    logoRole:{
        flexDirection:'row',
        gap:10,

    }

})