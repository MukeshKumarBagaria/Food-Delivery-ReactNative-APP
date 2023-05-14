import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import RestaurantCard from './RestaurantCard';
export default function FeaturedRow({ title, description }) {
    return (
        <View>
            <View className="flex-row mt-4 items-center justify-center px-4">
                <Text className="flex-1 text-xl font-bold">{title}</Text>
                <Icon name="arrow-right" size={20} color="#00CCBB" />
            </View>
            <Text className="px-4 text-xs text-gray-500">{description}</Text>

            <ScrollView horizontal
                contentContainerStyle={{
                    paddingHorizontal: 10,
                
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* Restaurant Cards */}
                <RestaurantCard
                    id={123}
                    imgUrl="https://cdn.pixabay.com/photo/2018/08/03/08/33/food-3581341_1280.jpg"
                    title="you sushi"
                    rating={4.5}
                    genre="japanse"
                    address="123 jaipur"
                    short_description="this is one of the best vegi"
                    dishes={[]}
                    long={20}
                    lat={34}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://cdn.pixabay.com/photo/2018/08/03/08/33/food-3581341_1280.jpg"
                    title="you sushi"
                    rating={4.5}
                    genre="japanse"
                    address="123 jaipur"
                    short_description="this is one of the best vegi"
                    dishes={[]}
                    long={20}
                    lat={34}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://cdn.pixabay.com/photo/2018/08/03/08/33/food-3581341_1280.jpg"
                    title="you sushi"
                    rating={4.5}
                    genre="japanse"
                    address="123 jaipur"
                    short_description="this is one of the best vegi"
                    dishes={[]}
                    long={20}
                    lat={34}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://cdn.pixabay.com/photo/2018/08/03/08/33/food-3581341_1280.jpg"
                    title="you sushi"
                    rating={4.5}
                    genre="japanse"
                    address="123 jaipur"
                    short_description="this is one of the best vegi"
                    dishes={[]}
                    long={20}
                    lat={34}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://cdn.pixabay.com/photo/2018/08/03/08/33/food-3581341_1280.jpg"
                    title="you sushi"
                    rating={4.5}
                    genre="japanse"
                    address="123 jaipur"
                    short_description="this is one of the best vegi"
                    dishes={[]}
                    long={20}
                    lat={34}
                />
            </ScrollView>
        </View>
    )
}