import {View, Text,TextInput,StyleSheet, Alert} from 'react-native'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { NavigationContainer } from '@react-navigation/native';
//import { useNavigation } from '@react-navigation/native';
import GameScreen from './GameScreen';
import Title from '@/components/title';
//import Navigation from './Navigation';

//const Stack= createNativeStackNavigator()

//const slide=()=>{
//export default function slide () {
    // return(
    //  //<NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='StartGameScreen'  component={StartGameScreen}/>
    //     <Stack.Screen name='Screen'   component={GameScreen}/>
    //   </Stack.Navigator>
    //   //</NavigationContainer>
    // )

//}
   

 function  StartGameScreen ({onPickNumber}){
   const [enterNumber,setenterNumber]=useState('')

    function numberHandler(entertext){
        setenterNumber(entertext) 
        console.log('ii')     
      }
    function resetInputHandler(){
        setenterNumber ('');
        console.log('s')

    }
    function confirmInputHandler(){
      //  console.log('us')
        const chosenNumber= parseInt(enterNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!','Enter a number between 1 and 99',
                 [{text:'okay', style:'destructive', onPress:resetInputHandler}])
        return;
        }
        onPickNumber(chosenNumber)
        // else {
        //     props.navigation.navigate('Screen')
        // }       
        // console.log('vvvvv')
    }
    return (
        <View style={styles.title1}>  
            <Title>Guess My Number</Title> 
 <View style={styles.container}>
    <Text style={styles.text1}>Enter a Number</Text>
  <TextInput style={styles.numberInput} 
  maxLength={2} 
  keyboardType='number-pad'
  autoCapitalize='none'
  autoCorrect={false}
  onChangeText={numberHandler}
  value={enterNumber}
  />
  
    <View style={styles.textContainer}>
<View style={{flex:1}}>
    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
    </View>
    <View style={{flex:1}}>
    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
    </View>
    </View>  
 </View>
 </View>
    )
}
export default StartGameScreen;

const styles= StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'purple',
        padding:20,
        marginTop:50,
        marginHorizontal:30,
        borderRadius:10,
        elevation:4,
        // shadowColor:'pink',
        // shadowOffset:{width:2, height:6},
        // shadowRadius:6,
        // shadowOpacity:0.25
    },
    numberInput: {
        height: 60,
        width:50,
        fontSize:30,
        color:'yellow',
        marginVertical:8,
        fontWeight:'bold',
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        textAlign:'center'
    },
    textContainer:{
        flexDirection:'row',
        
    },
    title1:{
            marginTop: 100,
            alignItems:'center',
            fontSize:20,
            fontWeight:'bold',
            color:'white',
            padding: 10,   
          },
    text1: {
        color:'yellow',
        //fontWeight:'bold',
        fontSize:22
    }
})