import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartScreen from "./Screens/StartScreen";
import GameScreen from "./Screens/GameScreen";
import EndScreen from "./Screens/EndScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
//import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [number, setNumber] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [numOfGuesses, setNumOfGuesses] = useState(0);
  const [isRestarted, setIsRestarted] = useState(true);
  /* const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }*/

  /* const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
      });
      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  } */

  function handleNumber(number) {
    setNumber(number);
  }

  function restartGame() {
    setNumber("");
    setNumOfGuesses(0);
    setIsRestarted(true);
    setGameOver(false);
  }

  let content;
  if (!number && !gameOver && isRestarted) {
    content = <StartScreen handleNumber={handleNumber} />;
  }

  if (number && !gameOver) {
    content = (
      <GameScreen
        number={number}
        gameOver={() => {
          setGameOver((value) => true);
          setIsRestarted(false);
        }}
        incrementCounter={() => setNumOfGuesses((value) => value + 1)}
      />
    );
  }

  if (gameOver && number) {
    content = (
      <EndScreen
        counter={numOfGuesses}
        number={number}
        restartGame={restartGame}
      />
    );
  }

  //we can use landscape or default also for the orientation

  return (
    <>
      <LinearGradient colors={["#8a0778", "#ddb52f"]} style={styles.container}>
        <ImageBackground
          style={styles.container}
          source={require("./assets/Images/background.png")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.15 }}
        >
          <SafeAreaView style={styles.container}>{content}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
