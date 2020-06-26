import React from "react";
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TextInput } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from "react-native-vector-icons/FontAwesome";
import GeneralStatusBarColor from './GeneralStatusBarColor';



const object = [
    { name: 'Alicia1588', lastname: require('../Assets/icons/u1.png') },
    { name: 'Mr_jpgotem', lastname: require('../Assets/icons/u2.png') },
    { name: 'Chantz97', lastname: require('../Assets/icons/u3.png') },
    { name: 'DeeDee50', lastname: require('../Assets/icons/u4.png') },
    { name: 'Chazz98', lastname: require('../Assets/icons/u5.png') },
    { name: 'Michael a Liles', lastname: require('../Assets/icons/u6.png') },
    { name: 'Jojo535', lastname: require('../Assets/icons/u7.png') },
    { name: 'Sasha535', lastname: require('../Assets/icons/u8.png') },

];


const FirstRoute = () => (
    <View>
        <View style={styless.searchSection}>
            <TextInput
                style={styless.input}
                placeholder="Search"
                placeholderTextColor="#fff"
                onChangeText={(searchString) => { this.setState({ searchString }) }}
                underlineColorAndroid="transparent"
            />
            <Image source={require('../Assets/icons/mag.png')} style={styless.searchIcon} />
        </View>
        <FlatList showsHorizontalScrollIndicator={false} keyExtractor={object => object.name} data={object} renderItem={({ item }) => {
            return (
                <View style={styless.viewstyle}>
                    <Image source={item.lastname} style={styless.usearchIcon} />
                    <Text style={styless.textdtyle}>{item.name}</Text>

                </View>
            )
        }}


        />
    </View>

);

const SecondRoute = () => (
    <View>
        <View style={styless.searchSection}>
            <TextInput
                style={styless.input}
                placeholder="Search"
                placeholderTextColor="#fff"
                onChangeText={(searchString) => { this.setState({ searchString }) }}
                underlineColorAndroid="transparent"
            />
            <Image source={require('../Assets/icons/mag.png')} style={styless.searchIcon} />
        </View>
        <FlatList showsHorizontalScrollIndicator={false} keyExtractor={object => object.name} data={object} renderItem={({ item }) => {
            return (
                <View style={styless.viewstyle}>
                    <Image source={item.lastname} style={styless.usearchIcon} />
                    <Text style={styless.textdtyle}>{item.name}</Text>

                </View>
            )
        }}


        />
    </View>
);

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#02DAC5' }}
        style={{ backgroundColor: '#111733' }}
        activeColor="#02DAC5"
    />
);

const initialLayout = { width: Dimensions.get('window').width };

const ConnectScreen = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Followers' },
        { key: 'second', title: 'Following' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });



    return (
        <View style={styless.layout}>
            <GeneralStatusBarColor backgroundColor="#111733"
                barStyle="light-content" />

            <View style={{ paddingBottom: 20, marginBottom: 5 }}>
                <Image source={require('../Assets/Images/loginlogo.png')} style={{ width: "50%", height: 50,
                 alignSelf: "center", marginTop: 20 }} />
            </View>
            <View style={styless.connect}>
                <Text style={{ color: "#fff", height: "100%", fontSize: 25,
                marginVertical:20,
                 alignSelf: "center", textAlignVertical: "center" }}>Connect</Text>
            </View>
            <View style={styless.list}>

                <TabView style={{ marginTop: 20, marginLeft: 5, marginRight: 5, backgroundColor: "#111733" }}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    renderTabBar={renderTabBar}

                />


            </View>

        </View>
    )
}
const styless = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#111733'
    },
    searchIcon: {
        padding: 10,
    },
    usearchIcon: {
        marginLeft: 10,
        marginTop: 5,
        width: 35,
        height: 35,
    },
    viewstyle: {
        flexDirection: "row",
        padding: 10
    },
    textdtyle: {
        fontSize: 17,
        marginVertical: 10,
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: 5,
        marginLeft: "5%",
        textAlignVertical: "center"

    },
    subtext: {
        fontSize: 20,
        color: '#e4e5ef'

    },
    connect: {
        backgroundColor: "#7d41fd",
        width: "100%",
        height: 110,
        position: "absolute",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: "33%"
    },
    searchSection: {
        height: 60,
        marginTop: "10%",
        marginBottom: "2%",
        borderRadius: 10,
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: '#1a1f3a',
    },
    searchIcon: {
        height: 20,
        width: 20,

    },
    input: {
        alignSelf: "center",
        width: 250,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#1a1f3a',
        color: '#fff'


    },
    list: {
        backgroundColor: "#111733",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "100%",
        width: "100%",
        position: "absolute",
        marginTop: "55%"
    }
})
export default ConnectScreen;