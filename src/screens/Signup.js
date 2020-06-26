import React from "react";
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity,ScrollView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import GeneralStatusBarColor from './GeneralStatusBarColor';

const Signup = (props) =>{
    
return(
    <ScrollView style={styless.layout}>
        <GeneralStatusBarColor backgroundColor="#111733"
      barStyle="light-content"/>

<View style={styless.layout}>
<Image source={require('../Assets/Images/loginlogo.png')} style={{width:180,height:100,alignItems:"center",alignSelf:"center",marginTop:30}} />    
<Text style={styless.heading}>Create Account </Text>
<Text style={styless.subheading}>Please Tell us About you.We won't share any of your personal data  </Text>
<View style={styless.searchSection}>
    <Image source={require('../Assets/icons/Shape9.png')} style={styless.searchIcon} resizeMode={"contain"} />
    <TextInput
        style={styless.input}
        placeholder="First Name"
        placeholderTextColor = "#fff"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
</View>
<View style={styless.searchSection}>
<Image source={require('../Assets/icons/Shape9.png')} style={styless.searchIcon} resizeMode={"contain"} />
    <TextInput
        style={styless.input}
        placeholder="Last Name"
        placeholderTextColor = "#fff"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
</View>

<View style={styless.searchSection}>
<Image source={require('../Assets/icons/Shape8.png')} style={styless.searchIcon} resizeMode={"contain"} />
    <TextInput
        style={styless.input}
        placeholder="Email Adress"
        placeholderTextColor = "#fff"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
</View>

<View style={styless.searchSection}>
<Image source={require('../Assets/icons/Shape9-3.png')} style={styless.searchIcon} resizeMode={"contain"} />
    <TextInput
        style={styless.input}
        placeholder="Password"
        placeholderTextColor = "#fff"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
</View>


  <TouchableOpacity style={styless.btn}>
      <Text style={styless.btntext} >Signup</Text>
      </TouchableOpacity>  

   <View style={styless.bottom}>
   <Text style={styless.subheadinglast}>Already have an account? </Text>
   <TouchableOpacity style={styless.btnlogin} onPress={() => props.navigation.navigate('Login')}>
      <Text style={styless.btntext} >Login</Text>
      </TouchableOpacity>  
     
   </View>

</View>
</ScrollView>
)

};

const styless=StyleSheet.create(
 {
     layout : {
         flex:1,
         backgroundColor:'#111733'
     },
     heading:{
         color:"#FFF",
         fontSize:20,
         textAlign:"center",
         marginTop:40
         
     },
     subheading:{
         fontSize:15,
         color:"#fff",
         textAlign:"center",
         marginTop:5,
         width:250,
         alignSelf:"center"
     },
     bottom:{
         flexDirection:"row",
         height:60,
         marginTop:20
     },
     searchSection: {
        marginTop:20,
        borderRadius:10,
        width:300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        backgroundColor: '#1a1f3a',
    },
    searchIcon: {
        height:15,
        width:15,
       
    },
    input: {
        alignSelf:"center",
        width:250,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#1a1f3a',
        color:'#fff',
        
        
    },
    btn:{
        width:300,
        alignSelf:"center",
        height:50,
        marginTop:30,
        borderRadius:7,
        backgroundColor:"#7d41fd",
    },
    btntext:{
        color:"#fff",
        fontSize:30,
        textAlign:"center",
        marginTop:3
                
    },
    btnlogin:{
        width:"25%",
        alignSelf:"flex-end",
        height:50,
        borderRadius:7,
        backgroundColor:"#1a1f3a",
        marginRight:10,
        marginBottom:5,
    },
    subheadinglast:{
        fontSize:20,
        color:"#efefef",
        textAlign:"center",
     width:"70%",   
        marginLeft:10,
        textAlignVertical:"center"
    },
})

export default Signup;    


