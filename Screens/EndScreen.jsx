import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../Compnents/Title";
import { Colors } from "../Constants/Colors";
import Button from "../Compnents/Button";

function EndScreen({ counter, number, restartGame }) {
  const { width, height } = useWindowDimensions();

  function handleRestart() {
    restartGame();
  }

  return (
    <View style={styles.container}>
      <Title>GAME OVER !</Title>
      <View
        style={[
          styles.imageContainer,
          width > height ? { width: 120, height: 120, margin: 20 } : "",
        ]}
      >
        <Image
          source={require("../assets/Images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>
        Your phone tried <Text style={styles.highlight}>{counter}</Text> times
        to guess the number <Text style={styles.highlight}>{number}</Text>
      </Text>
      <Button onPress={handleRestart}>Restart Game</Button>
    </View>
  );
}

export default EndScreen;

const dimesionWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: dimesionWidth < 360 ? 200 : 250,
    height: dimesionWidth < 360 ? 200 : 250,
    borderRadius: dimesionWidth < 360 ? 100 : 125,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginHorizontal: 24,
    marginBottom: 36,
  },
  highlight: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});
