import React from "react";
import { Text,StyleSheet ,FlatList, View,Image} from "react-native";
import GeneralStatusBarColor from './GeneralStatusBarColor';
const SettingsScreen = () => { 

  
    return (
        <View style={styless.layout}>
<GeneralStatusBarColor backgroundColor="#111733"
      barStyle="light-content"/>
      <Image source={require('../Assets/Images/loginlogo.png')} style={{width:180,height:100,alignItems:"center",alignSelf:"center",marginTop:30}} />
      <View style={{height:60,borderBottomWidth:2,borderColor:"#2a2f48",marginTop:40}}>
<Text style={styless.text}>Personal information</Text>
</View>
<View style={{height:60,borderBottomWidth:2,borderColor:"#2a2f48"}}>
<Text style={styless.text}>Notifications settings</Text>
</View>
<View style={{height:60,borderBottomWidth:2,borderColor:"#2a2f48"}}>
<Text style={styless.text}>Security</Text>
</View>
<View style={{height:60,borderBottomWidth:2,borderColor:"#2a2f48"}}>
<Text style={styless.text}>Account privacy</Text>
</View>
<View style={{height:60,borderBottomWidth:2,borderColor:"#2a2f48"}}>
<Text style={styless.text}>Blocked accounts</Text>
</View>
<View style={{height:60,borderBottomWidth:2,borderColor:"#2a2f48"}}>
<Text style={styless.text}>Help</Text>
</View>
        </View>
        )
};
const styless=StyleSheet.create(
    {
        layout : {
            flex:1,
            backgroundColor:'#111733'
        },
        text:{
            fontSize:20,
            color:"#fff",
            textAlignVertical:"center",
            alignContent:"center",
            marginTop:13,
           marginLeft:20,
        },
    })    
export default SettingsScreen;