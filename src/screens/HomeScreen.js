import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import styles from '../styles/HomeScreenStyles';
import ClickbaitCard from '../components/ClickbaitCard';
import CategoryCard from '../components/CategoryCard';
import SearchBar from '../components/SearchInput';
import { categoryData, clickbaitData } from '../utils/constants';

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
