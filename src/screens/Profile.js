import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import GeneralStatusBarColor from './GeneralStatusBarColor';

const Profile = () => {
  return (
    <ScrollView style={styless.layout}>
      <GeneralStatusBarColor backgroundColor="#111733"
        barStyle="light-content" />

      <View style={{ borderBottomWidth: 1, borderColor: "#2a2f48", paddingBottom: 10 }}>

        <Image source={require('../Assets/Images/loginlogo.png')} style={{ width: "30%", height: 50, alignSelf: "center", marginTop: 20 }} />
      </View>
      <View style={{ height: 160, borderBottomWidth: 1, borderColor: "#2a2f48" }}>
        <TouchableOpacity style={{ width: "30%", marginTop: 20, alignSelf: "center" }} >
          <Image source={require('../Assets/Images/Homescreen.png')} style={{ width: '100%', height: 100, alignSelf: "center", marginTop: 0, borderRadius: 9 }} />
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", fontSize: 15, color: "#fff", marginTop: 2 }}>Change Avatar</Text>
      </View>
      <View style={{ height: 100, borderBottomWidth: 1, borderColor: "#2a2f48" }}>
        <Text style={{ color: "#fff", marginTop: 10, marginLeft: 35 }}>Username</Text>
        <TextInput
          style={styless.input}
          placeholder="Question1832"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={{ height: 170, borderBottomWidth: 1, borderColor: "#2a2f48" }}>
        <Text style={{ color: "#fff", marginTop: 10, marginLeft: 35 }}>Status</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require('../Assets/icons/green.png')}
            style={{
              width: 20,
              height: 20,
              borderRadius: 40 / 2,
              marginTop: 15,
              marginLeft: 20
            }}
          />
          <Text style={{ color: "#fff", marginTop: 10, marginLeft: 15, fontSize: 20 }}>Available</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require('../Assets/icons/orange.png')}
            style={{
              width: 20,
              height: 20,
              borderRadius: 40 / 2,
              marginTop: 15,
              marginLeft: 20
            }}

          />
          <Text style={{ color: "#fff", marginTop: 10, marginLeft: 15, fontSize: 20 }}>Away</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require('../Assets/icons/red.png')}
            style={{
              width: 20,
              height: 20,
              borderRadius: 40 / 2,
              marginTop: 15,
              marginLeft: 20
            }}
          />
          <Text style={{ color: "#fff", marginTop: 10, marginLeft: 15, fontSize: 20 }}>UnAvailable</Text>
        </View>



      </View>
      <View style={{ height: 100, borderBottomWidth: 1, borderColor: "#2a2f48" }}>
        <Text style={{ color: "#fff", marginTop: 10, marginLeft: 35 }}>How's Your Mood</Text>
        <TextInput
          style={styless.input}
          placeholder="Today is Boring"
          placeholderTextColor="#fff"
          underlineColorAndroid="transparent"
        />
      </View>
    </ScrollView>
  )
}

const styless = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#111733'
  },
  input: {
    marginTop: 5,
    borderColor: "#000",
    borderWidth: 0,
    borderRadius: 5,
    height:60,
    alignSelf: "center",
    width: "80%",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: '#191f3a',
    color: '#fff'


  },
})
export default Profile;