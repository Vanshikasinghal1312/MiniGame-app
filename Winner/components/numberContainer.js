import { Text, View, StyleSheet } from "react-native";

export default function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}
 
const styles= StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'yellow',
        padding:10,
        fontWeight:'bold',
        margin:25,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'yellow',
        fontWeight:'bold'
    }
})