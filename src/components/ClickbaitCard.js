// import React from 'react';
// import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
// import styles from '../styles/HomeScreenStyles';

// const ClickbaitCard = ({ item }) => {
//   console.log("🚀 ~ ClickbaitCard ~ item:", item)
//   return (
//     <TouchableOpacity style={styles.clickbaitItem}>
//       <ImageBackground source={{ uri: item.image }} style={styles.clickbaitImageCntainer} imageStyle={styles.clickbaitImage}>
//         <Text style={styles.clickbaitText}>{item.title}</Text>
//         <Text style={styles.moreText}>more text</Text>

//       </ImageBackground>
//     </TouchableOpacity>
//   );
// };

// export default ClickbaitCard;

import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/HomeScreenStyles';
import { colors } from '../utils/constants';

const ClickbaitCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.clickbaitItem}>
      <LinearGradient
        colors={[colors.gradient1, colors.gradient2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBorder}
      >
        <View style={styles.gapCard}>
          <View style={styles.innerCard}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.clickbaitImageContainer}
              imageStyle={styles.clickbaitImage}
            >
              <LinearGradient
                colors={[colors.transparent, colors.blackForGradient]}
                style={styles.gradientOverlay}
              >
                <Text style={styles.clickbaitText}>{item.title}</Text>
                <Text style={styles.moreText}>more text</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ClickbaitCard;
