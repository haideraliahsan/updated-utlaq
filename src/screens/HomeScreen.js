import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import GeneralStatusBarColor from './GeneralStatusBarColor';



const Home = (props) => {


    return (
        <ScrollView style={styless.layout}>
            <GeneralStatusBarColor backgroundColor="#111733"
                barStyle="light-content" />

            <View style={{ borderBottomWidth: 2, borderColor: "#2a2f48", paddingBottom: 10 }}>

                <Image source={require('../Assets/Images/loginlogo.png')} style={{ width: 150, height: 90, alignSelf: "center", marginTop: 20 }} />
            </View>
            <View style={{ flexDirection: "row", height: 150, borderBottomWidth: 2, borderColor: "#2a2f48" }}>
                <TouchableOpacity style={{ width: "30%", marginTop: 20 }} onPress={() => props.navigation.navigate('Profile')}>
                    <Image source={require('../Assets/icons/IMG.png')} style={{ width: '100%', height: 100, alignSelf: "center", marginTop: 0, marginLeft: 15, borderRadius: 9 }} resizeMode={'contain'} />
                </TouchableOpacity>
                <View style={{ width: "70%" }}>
                    <Text style={styless.nametext}>Question1832</Text>
                    <TextInput
                        style={styless.input }
                        
                        placeholder="What's on your mood today?"
                        placeholderTextColor="#fff"
                        onChangeText={(searchString) => { this.setState({ searchString }) }}
                        underlineColorAndroid="transparent"
                    />
                </View>

            </View>
            <View style={{ height: 130, borderBottomWidth: 2, borderColor: "#2a2f48" }}>
                <Text style={styless.trendtext}>Trending Chats (2)</Text>
                <Text style={styless.trends}>#chrisbrownvsdrake</Text>
                <Text style={styless.trends}>#kanyewestorjayZ</Text>
            </View>

            <View style={{ height: 350, borderBottomWidth: 2, borderColor: "#2a2f48" }}>
                <Text style={styless.trendtext}>Top Four (4)</Text>
                <View style={{ flexDirection: "row", height: 70, marginTop: 20 }}>

                    <Image source={require('../Assets/icons/IMG-2.png')} 
                    style={{ width: 50, height: 50, alignSelf: "center", marginTop: 0,
                     marginLeft: 15, borderRadius: 9 }} />

                    <Text style={{
                        height: 50, fontSize: 20, color: "#fff",
                        marginLeft: 15, marginRight:15, marginVertical: 20
                    }}>Alicial 1588</Text>
                </View>
                <View style={{ flexDirection: "row", height: 70 }}>
                    <Image source={require('../Assets/icons/IMG-3.png')} style={{ width: 50, height: 50, alignSelf: "center", marginTop: 0, marginLeft: 15, borderRadius: 9 }} />
                    <Text style={{ fontSize: 20, color: "#fff", marginLeft: 15, textAlignVertical: "center",
                        marginLeft: 15, marginRight:15, marginVertical: 20}}>Alicial 1588</Text>
                </View>
                <View style={{ flexDirection: "row", height: 70 }}>
                    <Image source={require('../Assets/icons/IMG-4.png')} style={{ width: 50, height: 50, alignSelf: "center", marginTop: 0, marginLeft: 15, borderRadius: 9 }} />
                    <Text style={{ fontSize: 20, color: "#fff", marginLeft: 15, textAlignVertical: "center",
                        marginLeft: 15, marginRight:15, marginVertical: 20 }}>Alicial 1588</Text>
                </View>
                <View style={{ flexDirection: "row", height: 70 }}>
                    <Image source={require('../Assets/icons/IMG-5.png')} style={{ width: 50, height: 50, alignSelf: "center", marginTop: 0, marginLeft: 15, borderRadius: 9 }} />
                    <Text style={{ fontSize: 20, color: "#fff", marginLeft: 15, textAlignVertical: "center",
                        marginLeft: 15, marginRight:15, marginVertical: 20 }}>Alicial 1588</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                <View style={{ height: 60, borderBottomWidth: 2, borderColor: "#2a2f48" }}>
                    <Text style={styless.text}>Inbox (28)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ height: 60, borderBottomWidth: 2, borderColor: "#2a2f48", marginBottom: 50 }}>
                    <Text style={styless.text}>Message Request (1)</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styless = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#111733'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    nametext: {
        fontSize: 25,
        color: "#fff",
        marginTop: 20,
        marginLeft: 20
    },
    trendtext: {
        fontSize: 20,
        color: "#fff",
        marginTop: 20,
        marginLeft: 20
    },
    text: {
        fontSize: 20,
        color: "#fff",
        textAlignVertical: "center",
        alignContent: "center",
        marginTop: 13,
        marginLeft: 20,
    },
    trends: {
        fontSize: 15,
        color: "#7d41fd",
        marginTop: 10,
        marginLeft: 20
    },
    input: {
        alignSelf: "center",
        width: "90%",
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        marginRight: "2%",
        marginTop: "4%",
        marginLeft: "2%",
        backgroundColor: '#191f3a',
        color: '#fff',
        borderRadius: 7


    },
})

export default Home;