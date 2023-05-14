import { Image,Text, TouchableOpacity,  } from 'react-native'
import React from 'react'

function CategoryCard({imgUrl, title}) {
    return (
        <TouchableOpacity className="relative">
         <Image
        source={{
          uri: imgUrl
        }}
        className="w-20 h-20 rounded mx-2"
      />
      <Text className="absolute text-white bottom-2 left-3">
      {  title}
      </Text>
        </TouchableOpacity>
    )
}
export default CategoryCard;