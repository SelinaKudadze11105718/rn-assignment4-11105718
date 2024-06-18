import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ScrollView,FlatList,SectionList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';




import HomePageTop from './homepageTop';
import SearchBar from './searchBar';
import PopularJobs from './popularJobs';
import FeaturedJobs from './featuredJobs';


export default function HomePage(){
    const route =useRoute()
    Name=route.params.name
    Email=route.params.email


    
    return(
        <ScrollView style={styles.container}>
           
            <HomePageTop name={Name} email={Email}/>
            <SearchBar/>
            
            

         
                <SectionList horizontal={true}  sections={
                    [{title: 'Featured Jobs',data:[<FeaturedJobs role={'Software Engineer'} company={'Facebook'} image={require('../assets/facebook.png')} salary={'180,000'} location={'Accra,Ghana'} backgroundColor={'red'}/>,
                    <FeaturedJobs role={'Data Analyst'} company={'Google'} image={require('../assets/google.png')} salary={'160,000'} location={'Tema,Ghana'}/>,
                    <FeaturedJobs role={'Database Administrator'} company={'Oracle'} image={require('../assets/google.png')} salary={'160,000'} location={'Tema,Ghana'}/>,
                    <FeaturedJobs role={'Data Analyst'} company={'Google'} image={require('../assets/google.png')} salary={'160,000'} location={'Tema,Ghana'}/>,
                    <FeaturedJobs role={'Data Analyst'} company={'Google'} image={require('../assets/google.png')} salary={'160,000'} location={'Tema,Ghana'}/>,
                    <FeaturedJobs role={'Data Analyst'} company={'Google'} image={require('../assets/google.png')} salary={'160,000'} location={'Tema,Ghana'}/>,
                    <FeaturedJobs role={'Data Analyst'} company={'Google'} image={require('../assets/google.png')} salary={'160,000'} location={'Tema,Ghana'}/>
                ]},
                ]}
                renderItem={({item})=> <View style={styles.featuredJobs}>{item}</View>}
                    
                    />
                

                {/* <FeaturedJobs role={'Software Engineer'} company={'Facebook'} image={require('../assets/facebook.png')} salary={'180,000'} location={'Accra,Ghana'}/> */}
               
                
            

            <View style={styles.popularJobs}>
                    <PopularJobs role={'Jr Executive'} company={'Burger King'} city={'Los Angeles,US'} wage={'$96,000/y'} image={require('../assets/burgerKing.png')}  />
                    <PopularJobs role={'Product Manager'} company={'Beats'} city={'Florida,US'} wage={'$84,000/y'} image={require('../assets/beats.png')}  /> 
                    <PopularJobs role={'Product Manager'} company={'Facebook'} city={'Florida,US'} wage={'$86,000/y'} image={require('../assets/facebook.png')}  />
                    <PopularJobs role={'Jr Executive'} company={'Burger King'} city={'Los Angeles'} wage={'$96,000/y'} image={require('../assets/burgerKing.png')}  /> 
                </View>   
         
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:100,
        backgroundColor:'#FAFAFD',
        
    },
    featuredJobs:{
        width:280,
        height:186,
        marginTop:30,
        marginLeft:20,
         backgroundColor:'pink',
         border:1,
        borderRadius:20,

    },
    popularJobs:{
        marginTop:100,
    }

})