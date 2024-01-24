import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import Button from "../Compnents/Button";
import { useState } from "react";
import { Colors } from "../Constants/Colors";
import Title from "../Compnents/Title";
import CardBox from "../Compnents/CardBox.jsx";

function StartScreen({ handleNumber }) {
  const [enteredText, setEnteredText] = useState("");
  const { width, height } = useWindowDimensions();

  function handleConfirm() {
    if (
      isNaN(Number(enteredText)) ||
      enteredText.length === 0 ||
      enteredText > 99 ||
      enteredText < 0
    ) {
      Alert.alert("Invalid number!", "Enter a number between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setEnteredText(""),
        },
      ]);
    } else {
      handleNumber(enteredText);
    }
  }

  function handleInput(text) {
    setEnteredText(text);
  }

  const marginTopDistance = height < 380 ? 5 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={[styles.container, { marginTop: marginTopDistance }]}>
          <View style={styles.titleContainer}>
            <Title>Guess My Number</Title>
          </View>
          <CardBox>
            <Text style={styles.textBox}>Enter a Number</Text>
            <TextInput
              style={styles.textContainer}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredText}
              onChangeText={handleInput}
            />
            <View style={styles.buttonContainer}>
              <Button onPress={handleConfirm}>Confirm</Button>
              <Button onPress={() => setEnteredText("")}>Reset</Button>
            </View>
          </CardBox>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 60,
  },

  textBox: {
    fontSize: 20,
    color: Colors.accent,
    fontWeight: "bold",
  },
  textContainer: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    color: Colors.accent,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
