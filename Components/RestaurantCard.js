import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function RestaurantCard({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat }) {
    return (
        <TouchableOpacity className="bg-white rounded-sm mr-3 shadow">


            <Image
                source={{
                    uri: imgUrl
                }}
                className="h-36 w-64 rounded-sm"
            />

            <View className="px-3 pb-4">
                <Text className="text-lg font-bold pt-2">{title}</Text>
                <View className="flex-row space-x-1 items-center">
                    <Icon name="star" />
                    <Text className="text-green-500">{rating} . </Text>
                    <Text>{genre}</Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <Icon name="map-marker-alt" />
                    <Text>
                        Nearby . {address}
                    </Text>
                </View>
            </View>



        </TouchableOpacity>
    )
}