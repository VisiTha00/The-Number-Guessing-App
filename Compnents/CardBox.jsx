import {
  Dimensions,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../Constants/Colors";

const dimentionWidth = Dimensions.get("window").width;

function CardBox({ children }) {
  const { width, height } = useWindowDimensions();
  const marginHorizontalDistance = dimentionWidth < 380 ? 24 : 28;
  return (
    <View
      style={[
        styles.inputContainer,
        { marginHorizontal: marginHorizontalDistance },
      ]}
    >
      {children}
    </View>
  );
}

export default CardBox;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: dimentionWidth > 380 ? 20 : 10,
    padding: dimentionWidth > 380 ? 20 : 16,
    marginHorizontal: dimentionWidth > 380 ? 28 : 24,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    alignItems: "center",
  },
});
