import React, {useState}from "react";
import { Text, View , StyleSheet,ImageBackground,SafeAreaView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from '../../screens/GameScreen'
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartGameScreen from '../../screens/StartGameScreen'
import GameOverScreen from "@/screens/GameOver";

export default function App(){
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [roundNumber, setRoundNumber]= useState([])

  function pickednumberHandler(pickednumber){
      setUserNumber (pickednumber)
      setGameIsOver(false)
    }
    function gameOverHandler (numberOfrounds){
      setGameIsOver(true)
      setRoundNumber(numberOfrounds)
    }

    // function roundNumberHandler(){
    //   setRoundNumber()
    // }
    function startNewGameHandler (){
       setUserNumber(null);
       setGameIsOver(true);
       setRoundNumber(0)
    }
   let screen= <StartGameScreen onPickNumber={pickednumberHandler} />
    if (userNumber){
      screen= (
      <GameScreen userNumber={userNumber} onGameover={gameOverHandler}/>
      )
    };
    if (gameIsOver && userNumber){
       screen=<GameOverScreen userNumber={userNumber} roundNumber={roundNumber} onStartNewGame={startNewGameHandler}/>
    }
  return(

    <LinearGradient colors={['purple','pink','goldenrod']} style={styles.backgroundContainer}>
      <ImageBackground source={{uri:'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
      resizeMode='cover'
      style={styles.backgroundContainer}
      imageStyle={styles.imageContaner}
      >
        {screen}          
     </ImageBackground>
     </LinearGradient>

    
  )
}
const styles=StyleSheet.create({
  backgroundContainer:{
    flex:1
  },
  imageContaner:{
    opacity:0.25
  }
})


// const Screen =()=>{
//   return (
//      <GameScreen></GameScreen>
//   )
// }


