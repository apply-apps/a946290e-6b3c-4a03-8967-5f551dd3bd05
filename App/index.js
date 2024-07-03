// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={stylesHome.container}>
            <Text style={stylesHome.title}>Choose a Tale to Read</Text>
            <Button
                title="Tale 1: The Little Red Riding Hood"
                onPress={() => navigation.navigate('Tale', { taleId: 1 })}
            />
            <Button
                title="Tale 2: Cinderella"
                onPress={() => navigation.navigate('Tale', { taleId: 2 })}
            />
            <Button
                title="Tale 3: Snow White"
                onPress={() => navigation.navigate('Tale', { taleId: 3 })}
            />
        </SafeAreaView>
    );
};

const TaleScreen = ({ route }) => {
    const tales = {
        1: {
            title: "The Little Red Riding Hood",
            content: "Once upon a time, there was a little girl who lived in a village near the forest. ..."
        },
        2: {
            title: "Cinderella",
            content: "Once upon a time, there was a kind girl named Cinderella. She lived with her stepmother and her two stepsisters. ..."
        },
        3: {
            title: "Snow White",
            content: "Once upon a time, there was a beautiful princess named Snow White. She was kind and gentle and lived with her stepmother, the queen. ..."
        }
    };

    const { taleId } = route.params;
    const tale = tales[taleId];

    return (
        <SafeAreaView style={stylesTale.container}>
            <ScrollView contentContainerStyle={stylesTale.scrollView}>
                <Text style={stylesTale.title}>{tale.title}</Text>
                <Text style={stylesTale.content}>{tale.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tales For Kids' }} />
                <Stack.Screen name="Tale" component={TaleScreen} options={{ title: 'Tale' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const stylesApp = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

const stylesTale = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        padding: 20,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
    },
});