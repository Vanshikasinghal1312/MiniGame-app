import React, { useState, useEffect } from 'react';
import {Text,View, StyleSheet, SafeAreaView, Alert, FlatList, ScrollView} from 'react-native';
import Title from '../components/title'
import NumberContainer from '../components/numberContainer'
import PrimaryButton from '@/components/PrimaryButton';
import GameOverScreen from '../screens/GameOver'
import AntDesign from '@expo/vector-icons/AntDesign';
import RoundNumberLog from '../components/roundNumber'



function generateNumberBetween (min, max, exclude){
  const randomNumber = Math.floor (Math.random()* (max-min)+ min)
  if (randomNumber === exclude){
    return generateNumberBetween (min, max, exclude)
  }
  else {
    return randomNumber
  }
}
let minBoundary= 1;
let maxBoundary=100

function GameScreen ({userNumber,onGameover}){
  const initialGuess = generateNumberBetween(1,100, userNumber)
  const [guessNumber, setguessNumber] = useState(initialGuess)
  const [roundNumber, setRoundNumber]= useState([])

  useEffect(()=>{
    if (guessNumber===userNumber){
      onGameover(roundNumber.length);

    }
  },[guessNumber,userNumber, onGameover])

  useEffect(()=>{
    minBoundary=1,
    maxBoundary=100
  },[])

  function nextguessHandler(direction){
    if ((direction === 'lower' && guessNumber < userNumber) || (direction === 'greater' && guessNumber > userNumber)){
      Alert.alert('Dont lie','You know that this is wrong',[{text:cancelAnimationFrame, text:'sorry', style:'cancel'}])
      return;

    }

    if (direction === 'lower'){
      maxBoundary = guessNumber
    } 
    else {
      minBoundary = guessNumber + 1
    }
    console.log(minBoundary, maxBoundary)
    const newRandomNumber= generateNumberBetween (minBoundary, maxBoundary, guessNumber)
      setguessNumber(newRandomNumber)
      setRoundNumber(prevGuessRounds=>[newRandomNumber,...prevGuessRounds])

  }
  const LengthofListNumber= roundNumber.length;
    return (
      <View style={styles.container1}>
        <Title>Opponent's Guess</Title>
         <NumberContainer>{guessNumber}</NumberContainer>  
               <View style={styles.container2}>
               <Text style={styles.text1}>Higher or Lower?</Text>
        <View style={{flexDirection:'row', marginTop: 10}}>
          <View style={{flex:1}}>
        <PrimaryButton onPress={nextguessHandler.bind(this, 'lower')}><AntDesign name="minus" size={20} color="white" /></PrimaryButton>
        </View>
        <View style={{flex:1}}>
        <PrimaryButton onPress={nextguessHandler.bind(this, 'greater')}><AntDesign name="plus" size={20} color="white" /></PrimaryButton>
        </View>
        </View>
        </View>

        
       <View style={styles.text2}>
               {/* {roundNumber.map((roundNumber)=><Text key={roundNumber}>{roundNumber}</Text>)} */}
      
       <FlatList 
        data={roundNumber}
        renderItem={(renderItem)=><RoundNumberLog roundNumber={LengthofListNumber-renderItem.index} guess={renderItem.item}/>}
        keyExtractor={(item)=> item}
       />
       
       </View>
      </View>
    )
            
    
}
export default GameScreen;


const styles=StyleSheet.create({
  container1:{
     //flex:1,
     padding:50,
     marginTop:50   
  },
  container2:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'purple',
    padding:30,
    //flexWrap:'wrap',
   // marginHorizontal:10,
    borderRadius:10,
    elevation:4,
    // shadowColor:'pink',
    // shadowOffset:{width:2, height:6},
    // shadowRadius:6,
    // shadowOpacity:0.25
},
text1:{
  color:'yellow',
  fontSize:20,
},
text2:{
  padding:15,
 // flex:0

 }
})