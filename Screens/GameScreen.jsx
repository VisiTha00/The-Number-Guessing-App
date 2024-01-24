import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../Compnents/Title";
import { useEffect, useState } from "react";
import { Colors } from "../Constants/Colors";
import Button from "../Compnents/Button";
import CardBox from "../Compnents/CardBox";
import { Ionicons } from "@expo/vector-icons";
import GuessItem from "../Compnents/GuessItem";

function generateRandomBetween(min, max) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
}

let min = 1;
let max = 100;

function GameScreen({ number, gameOver, incrementCounter }) {
  const initialGuess = generateRandomBetween(1, 100);
  const [currentGuess, setCurentGuess] = useState(initialGuess);
  const [guessList, setGuessList] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (Number(currentGuess) === Number(number)) {
      gameOver();
    }
  }, [currentGuess, number, gameOver]);

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  function handlePress(direction) {
    if (
      (direction === "lower" && currentGuess < number) ||
      (direction === "higher" && currentGuess > number)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return null;
    } else {
      if (direction === "lower") {
        max = currentGuess;
      } else {
        min = currentGuess + 1;
      }
      const nextNumber = generateRandomBetween(min, max);
      setCurentGuess((number) => nextNumber);
      incrementCounter();
      setGuessList((guessList) => [nextNumber, ...guessList]);
    }
  }

  const flexStatus = height < 380 ? 1 : null;

  const content =
    width < height ? (
      <>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{currentGuess}</Text>
        </View>

        <CardBox>
          <Text style={styles.textBox}>Higher or Lower ?</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={() => handlePress("lower")}>
              {/*    <Ionicons name="md-remove" size={18} /> */}-
            </Button>
            <Button onPress={() => handlePress("higher")}>
              {/*} <Ionicons name="md-add" size={18} /> */} +
            </Button>
          </View>
        </CardBox>
      </>
    ) : (
      <>
        <View style={[styles.landscapeView, { marginLeft: 40 }]}>
          <View style={[styles.buttonContainer, { flex: 1 }]}>
            <Button onPress={() => handlePress("lower")}>
              {/*    <Ionicons name="md-remove" size={18} /> */}-
            </Button>
          </View>

          <View style={[styles.numberContainer, { flex: 1, marginRight: 80 }]}>
            <Text style={styles.number}>{currentGuess}</Text>
          </View>

          <View style={[styles.buttonContainer, { flex: 1 }]}>
            <Button onPress={() => handlePress("higher")}>
              {/*    <Ionicons name="md-remove" size={18} /> */}+
            </Button>
          </View>
        </View>
      </>
    );

  //KeyBoardAvoidingView is used to avoid the keyboard from hiding the input field (specially in IOS)

  return (
    <View style={styles.container}>
      <Title>Opponent's Number</Title>
      {content}
      {/*  <View>
        {guessList.map((guess) => (
          <Text key={guess}>{guess}</Text>
        ))}
        </View>  */}
      <View style={styles.list}>
        <FlatList
          data={guessList}
          renderItem={(itemData) => (
            <GuessItem
              guess={itemData.item}
              index={itemData.index}
              length={guessList.length}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 20,
  },
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 36,
    color: Colors.accent,
    fontWeight: "bold",
  },
  textBox: {
    fontSize: 20,
    color: Colors.accent,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  landscapeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
