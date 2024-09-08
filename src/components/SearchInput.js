import { Image, TextInput, View } from "react-native";
import styles from "../styles/HomeScreenStyles";
import images from "../assets/images";
import { colors } from "../utils/constants";

const SearchBar = () => {
    return (
        <View style={styles.searchBarContainer}>
            <Image style={{ height: 15, width: 15 }} source={images.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor={colors.placeholderColor}
            />
        </View>
    );
};

export default SearchBar