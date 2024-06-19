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
            <View style={{marginTop:100}}>
           
            <HomePageTop name={Name} email={Email}/>
            <SearchBar/>

            <View style={{flexDirection:'row'}}>
            <Text style={{color:'#0D0D26',fontSize:16,fontWeight:'bold',marginTop:50,marginLeft:30}} >Featured Jobs</Text>
            <Text style={{color:'#95969D',fontSize:14,marginTop:50,marginLeft:170}}>See all</Text>
            </View>
            
            

         
                <SectionList horizontal={true}  sections={
                    [{title: 'Featured Jobs',data:[<FeaturedJobs role={'Software Engineer'} company={'Facebook'} image={require('../assets/facebook.png')} salary={'$180,000'} location={'Accra,Ghana'} backgroundColor={'red'}/>,
                    <FeaturedJobs role={'Data Analyst'} company={'Google'} image={require('../assets/google.png')} salary={'$160,000'} location={'North Legon,Ghana'}/>,
                    <FeaturedJobs role={'Senior Finacial Analyst'} company={'Johnson & Johnson'} image={require('../assets/johnson.png')} salary={'$91,000'} location={'Tema,Ghana'}/>,
                    <FeaturedJobs role={'Electrical Engineer'} company={'Huawei'} image={require('../assets/huawei.png')} salary={'$60,000'} location={'Teshie,Ghana'}/>,
                    <FeaturedJobs role={'Data Analyst'} company={'Absa'} image={require('../assets/absa.png')} salary={'$160,000'} location={'Dome,Ghana'}/>,
                    <FeaturedJobs role={'Capacity manager'} company={'Facebook'} image={require('../assets/facebook.png')} salary={'$288,000'} location={'Califonia,USA'}/>,
                    <FeaturedJobs role={'Network Officer'} company={'Vodafone'} image={require('../assets/vodafone.png')} salary={'$66,000'} location={'Tema,Ghana'}/>,
                    <FeaturedJobs role={'Computer Engineer'} company={'Huawei'} image={require('../assets/huawei.png')} salary={'$260,000'} location={'Madina,Ghana'}/>,
                    <FeaturedJobs role={'Nutrition Researcher'} company={'Nestle'} image={require('../assets/nestle.png')} salary={'$80,000'} location={'Accra,Ghana'}/>,
                ]},
                ]}
                renderItem={({item})=> <View style={styles.featuredJobs}>{item}</View>}
                    
                    />
                

                {/* <FeaturedJobs role={'Software Engineer'} company={'Facebook'} image={require('../assets/facebook.png')} salary={'180,000'} location={'Accra,Ghana'}/> */}
               
                <View style={{flexDirection:'row',marginTop:0,MarginBottom:0}}>
                    <Text style={{color:'#0D0D26',fontSize:16,fontWeight:'bold',marginTop:50,marginLeft:30}} >Popular Jobs</Text>
                    <Text style={{color:'#95969D',fontSize:14,marginTop:50,marginLeft:170}}>See all</Text>
                </View>
            
            

            <View style={styles.popularJobs}>
                    <PopularJobs role={'Jr Executive'} company={'Burger King'} city={'Los Angeles,US'} wage={'$96,000/y'} image={require('../assets/burgerKing.png')}  />
                    <PopularJobs role={'Product Manager'} company={'Beats'} city={'Florida,US'} wage={'$84,000/y'} image={require('../assets/beats.png')}  /> 
                    <PopularJobs role={'Lead Developer'} company={'Facebook'} city={'Florida,US'} wage={'$85,135/y'} image={require('../assets/facebook.png')}  />
                    <PopularJobs role={'Senior Executive'} company={'Burger King'} city={'Florida,US'} wage={'$96,000/y'} image={require('../assets/burgerKing.png')}  />
                    <PopularJobs role={'Financial Analyst'} company={'Absa'} city={'Lagos,Nigeria'} wage={'$96,000/y'} image={require('../assets/absa.png')}  />
                    <PopularJobs role={'Network Officer'} company={'Huawei'} city={'Los Angeles'} wage={'$96,000/y'} image={require('../assets/huawei.png')}  />
                    <PopularJobs role={'QA Engineer'} company={'Johnson & Johnson'} city={'Alabama,US'} wage={'$83,000/y'} image={require('../assets/johnson.png')}  />
                    <PopularJobs role={'Data Analyst'} company={'Google'} city={'Kansas,US'} wage={'$100,000/y'} image={require('../assets/google.png')}  />
                    <PopularJobs role={'Nutrition Researcher'} company={'Nestle'} city={'Los Angeles,US'} wage={'$186,000/y'} image={require('../assets/nestle.png')}  />
                     
                </View> 
                </View>  
         
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:0,
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