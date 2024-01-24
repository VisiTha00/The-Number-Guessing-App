import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../Constants/Colors";

function GuessItem({ guess, index, length }) {
  return (
    <View style={styles.container}>
      <Text>{`#${length - index}`}</Text>
      <Text>{`Opponent's Guess : ${guess}`}</Text>
    </View>
  );
}

export default GuessItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.accent,
    color: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 8,
    marginVertical: 8,
    padding: 8,
    fontWeight: "bold",
  },
});
