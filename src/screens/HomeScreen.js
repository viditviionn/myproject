import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import styles from '../styles/HomeScreenStyles';
import ClickbaitCard from '../components/ClickbaitCard';
import CategoryCard from '../components/CategoryCard';
import SearchBar from '../components/SearchInput';

const clickbaitData = [
  { id: '1', title: 'This is a title and more text', image: 'https://picsum.photos/200/300' },
  { id: '2', title: 'This is a title and more text', image: 'https://picsum.photos/200/301' },
  { id: '3', title: 'This is a title and more text', image: 'https://picsum.photos/200/302' },
];

const categoryData = [
  { id: '1', title: 'EXERCISES', subtitle: '132 Exercises', color: '#8B4513', image: 'https://picsum.photos/200/303' },
  { id: '2', title: 'RECIPES', subtitle: '52 Entries', color: '#FF69B4', image: 'https://picsum.photos/200/304' },
  { id: '3', title: 'NUTRITIONAL', subtitle: '', color: '#FFA500', image: 'https://picsum.photos/200/305' },
];

const HomeScreen = () => {
  const handleCategoryPress = (category) => {
    console.log(`Navigating to ${category}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <SearchBar />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 10 }} style={styles.clickbaitContainer}>
          {clickbaitData.map((item) => (
            <ClickbaitCard key={item.id} item={item} />
          ))}
        </ScrollView>

        {categoryData.map((category) => (
          <CategoryCard key={category.id} category={category} onPress={handleCategoryPress} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
