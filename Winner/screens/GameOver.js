import PrimaryButton from '@/components/PrimaryButton'
import Title from '@/components/title'
import { View, Image, StyleSheet,Text } from 'react-native'

export default function GameOverScreen ({roundNumber, userNumber, onStartNewGame}){
    return (
        <View style={styles.design}>
            <Title >Game Over</Title>
            <Image style={styles.image1} source={{uri:'https://plus.unsplash.com/premium_photo-1669323925693-b27e909a670d?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}></Image>
            <Text style={styles.nest1}>Your Phone needed <Text style={styles.nest2}>{roundNumber}</Text> rounds to guess the number <Text style={styles.nest2}>{userNumber}</Text></Text>
                 <View style={styles.buttonDesign}>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    design:{
        flex:1,
        padding:60,
        marginTop:100,
       // marginHorizontal:30,
        fontWeight:'bold',
        alignItems:'center'
    
    },
    image1:{
        height:200,
        width:200,
        marginTop:20,
        alignItems:'center',
        borderRadius:100,
        borderWidth:2,
        borderColor:'purple'
    },
    nest1:{
       marginTop:20,
       fontSize:18,
       textAlign:'center',
       color:'black'
    },
    nest2:{
        color:'blue',
        fontSize:20,
        marginLeft:6

    },
    buttonDesign:{
        margin:20
    }
})