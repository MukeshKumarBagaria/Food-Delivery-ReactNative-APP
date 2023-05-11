import { View, Image, Text, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView className="bg-white" >
            {/* Header which includes logo and search bar*/}
            <View className="flex-row mx-3 my-3 space-x-2 items-center ">
                <Image
                    source={{
                        uri: 'https://picsum.photos/200/300',
                    }}
                    className="h-10 w-10 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="text-xl font-bold">
                        Current Location
                        <Icon name="chevron-down" size={20} color="#00CCBB" />
                    </Text>

                </View>
                <Icon name="user-circle" size={25} color="#00CCBB" />
            </View>

            {/* Search Bar */}
            <View className="flex-row mx-4 space-x-3 align-middle pb-2 items-center">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 rounded align-middle">
                    <Icon name="search" size={20} color="#00CCBB" />
                    <TextInput placeholder='Search for food!' />
                </View>
                <Icon name="filter" size={25} color="#00CCBB" />

            </View>


            {/* Body */}
            <ScrollView>
                {/* Categories section */}


                {/* Featured Section */}
            </ScrollView>
        </SafeAreaView>
    )
}