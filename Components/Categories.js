import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="Test" />
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="Test" />
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="test" />
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="test" />
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="test" />
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="test" />
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="test" />
    </ScrollView>
  )
}