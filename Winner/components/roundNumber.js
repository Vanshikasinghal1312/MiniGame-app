import {Text, View, StyleSheet} from 'react-native'

export default function RoundNumberLog ({roundNumber, guess}){
    return (
        <View style={styles.styleA}>
            <Text style={styles.styleB}>*{roundNumber}</Text>     
            <Text style={styles.styleB}>Opponent's Guess: {guess}</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    styleA:{
        flexDirection:'row',
        marginVertical:5,
        marginHorizontal:1,
        padding:5,
        borderColor:'purple',
        borderWidth:2,
        borderRadius:15,
        backgroundColor:'pink',
        fontSize:10,
        fontWeight:'bold',
        justifyContent:'space-between'

        
    },
    styleB:{
        color:'purple'

    }
})