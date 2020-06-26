import React from "react";
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TextInput } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from "react-native-vector-icons/FontAwesome";
import { color } from "react-native-reanimated";

const object1 = [
    { id: 1, name: 'Create Chatroom', lastname: require('../Assets/icons/add.png') },
    { id: 2, name: 'Business & Finance', lastname: require('../Assets/icons/Layer1.png') },
    { id: 3, name: 'Computer & Internet', lastname: require('../Assets/icons/Forma1-2.png') },
    { id: 4, name: 'Culture & Community', lastname: require('../Assets/icons/L1.png') },
    { id: 5, name: 'Entertainment & Arts', lastname: require('../Assets/icons/Forma1-3.png') },
    { id: 6, name: 'Family & Home', lastname: require('../Assets/icons/Forma1-4.png') },
    { id: 7, name: 'Games', lastname: require('../Assets/icons/Forma1-5.png') },
    { id: 8, name: 'Government & Policies', lastname: require('../Assets/icons/Forma1.png') },
    { id: 9, name: 'Health & Wellness', lastname: require('../Assets/icons/Layer2.png') },
    { id: 10, name: 'Music', lastname: require('../Assets/icons/Forma1-7.png') },
    { id: 11, name: 'Hobbies & Craft', lastname: require('../Assets/icons/Forma1-6.png') },
    { id: 12, name: 'Recreation & Sports', lastname: require('../Assets/icons/Layer3.png') }
];


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

        <FlatList showsHorizontalScrollIndicator={false} keyExtractor={object1 => object1.name} data={object1} renderItem={({ item }) => {
            return (
                <View style={styless.viewstyle}>
                    <Image source={item.lastname} style={styless.searchsIcon} resizeMethod="scale" resizeMode={'contain'} />
                    <Text style={styless.textdtyle}>{item.name}</Text>
                </View>
            );
        }}
        />
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#02DAC5' }}
        style={{ backgroundColor: '#111733', color: "#02DAC5" }}
        activeColor="#02DAC5"
    />
);

const ExploreScreen = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Users' },
        { key: 'second', title: 'ChatRooms' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });



    return (
        <View style={styless.layout}>
            <View style={{ paddingBottom: 10, marginTop: 20 }}>
                <Image source={require('../Assets/Images/loginlogo.png')} style={{ width: "50%", height: 50, alignSelf: "center", marginTop: 20 }} />
            </View>
            <View style={styless.connect}>
                <Text style={{ color: "#fff", height: "100%", fontSize: 25,
                marginVertical:20,
                 alignSelf: "center", textAlignVertical: "center" }}>Explore</Text>
            </View>
            <View style={styless.list}>

                <TabView style={{ marginTop: 20, marginLeft: 5, marginRight: 5, marginBottom: 30, backgroundColor: "#111733" }}
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
        marginLeft: 10,
        width: 15,
        height: 15,
    },
    searchSection: {
        height:60,
        marginTop: "5%",
        marginBottom: "2%",
        borderRadius: 10,
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: '#1a1f3a',
    },
    searchsIcon: {
        height: 17,
        width: 17,
        marginTop: "1%",
        marginLeft: 8,


    },
    input: {
        alignSelf: "center",
        width: 250,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#1a1f3a',
        color: '#fff'


    },
    usearchIcon: {
        marginLeft: 10,
        width: 35,
        height: 35,
    },
    viewstyle: {
        flexDirection: "row",
        padding: 5,
        marginTop: "1%"
    },
    textdtyle: {
        marginVertical:10,
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: "5%",
        borderRadius: 5,
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
    list: {
        backgroundColor: "#111733",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        position: "absolute",
        marginTop: "55%"
    }
})
export default ExploreScreen;