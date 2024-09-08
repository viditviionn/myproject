import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/HomeScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../utils/constants';

const CategoryCard = ({ category, onPress }) => {

  return (
    <TouchableOpacity
      style={[styles.categoryItem, { backgroundColor: category.color }]}
      onPress={() => onPress(category.title)}
    >
      <ImageBackground source={{ uri: category.image }} style={styles.categoryImageContainer} imageStyle={styles.categoryImage}>

        <View style={styles.categoryTextContainer}>
          <LinearGradient
            colors={[`${category.color}`, colors.transparent]}
            style={styles.gradientOverlayCategory}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <Text style={styles.categorySubtitle}>{category.subtitle}</Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
