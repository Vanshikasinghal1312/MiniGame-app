import { Text, View , StyleSheet,ImageBackground} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

 export default function Gradient(){
  return (
  <LinearGradient colors={['purple','pink','orange']} style={styles.backgroundContainer}>
      <ImageBackground source={{uri:'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
       resizeMode='cover'
       style={styles.backgroundContainer}
       imageStyle={styles.imageContaner}
      >
      </ImageBackground>
  </LinearGradient>

 )}
