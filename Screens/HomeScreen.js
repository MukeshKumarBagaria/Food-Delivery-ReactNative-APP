import { View, Image ,Text} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ChevronDownIcon,
    SearchIcon,
    UserIcon,
    AdjustmentsIcon
} from "react-native-heroicons/outline";

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView>
            {/* Header which includes logo and search bar*/}
            <View className="flex-row">
                <Image

                    source={{
                        uri: 'https://picsum.photos/200/300',
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View>
                    <Text className="text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="text-xl font-bold">Current Location <ChevronDownIcon size={20} color="00ccbb"/></Text>

                </View>

            </View>
        </SafeAreaView>
    )
}