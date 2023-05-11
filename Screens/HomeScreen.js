import { View, Image, Text } from 'react-native'
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
            <View className="flex-row mx-2 my-3 space-x-2">
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
                <Icon name="user-circle"  size={30} color="#00CCBB"/>

            </View>
        </SafeAreaView>
    )
}