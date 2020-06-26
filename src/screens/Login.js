import React from "react";
import {View,Text,TextInput,StyleSheet,Image,TouchableOpacity} from "react-native";
import { isRegularExpressionLiteral } from "typescript";
import GlobalFont from 'react-native-global-font'
import GeneralStatusBarColor from './GeneralStatusBarColor';

const Login = (props) =>{
    
    let fontName = 'Poppins-Regular'
    GlobalFont.applyGlobal(fontName)   //<------- Added font family golbally   

return(
<View style={styless.layout}>
<GeneralStatusBarColor backgroundColor="#111733"
      barStyle="light-content"/>

<Image source={require('../Assets/Images/loginlogo.png')} style={{width:180,height:100,alignItems:"center",alignSelf:"center",marginTop:30}} />    
<Text style={styless.heading}>Welcome Back </Text>
<Text style={styless.subheading}>Login to your account </Text>
<View style={styless.searchSection}>
<Image source={require('../Assets/icons/Shape8.png')} style={styless.searchIcon} resizeMode={'contain'} />
    <TextInput
        style={styless.input}
        placeholder="Email Adress"
        placeholderTextColor = "#fff"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
</View>

<View style={styless.searchSection}>
<Image source={require('../Assets/icons/Shape9-3.png')} style={styless.searchIcon} resizeMode={'contain'} />
    <TextInput
        style={styless.input}
        placeholder="Password"
        placeholderTextColor = "#fff"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
</View>

  <TouchableOpacity style={styless.btn} onPress={() => props.navigation.navigate('Home')}>
      <Text style={styless.btntext} >Login</Text>
      </TouchableOpacity>  
      <Text style={styless.subheading}>Forgot Password? </Text>
      <TouchableOpacity style={styless.btnsignup} onPress={() => props.navigation.navigate('SignUp')}>
      <Text style={styless.btntextsignup} >Create an Account</Text>
      </TouchableOpacity> 
</View>

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
         fontSize:30,
         fontFamily:'Poppins-Regular',
         textAlign:"center",
         marginTop:40
         
     },
     subheading:{
         fontSize:15,
         color:"#fff",
         textAlign:"center",
         fontFamily:'Poppins-SemiBold',
         marginTop:10
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
        height:18,
        width:18,
       
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
        textAlignVertical:"center",
       
        
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
    btntextsignup:{
        color:"#000",
        fontSize:20,
        marginTop:10,
        textAlign:"center",
                
    },
    btnsignup:{
        width:300,
        alignSelf:"center",
        height:50,
        marginTop:80,
        borderRadius:7,
        backgroundColor:"#fff",
    },

})

export default Login;    


