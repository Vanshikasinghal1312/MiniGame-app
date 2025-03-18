import { Text, View, StyleSheet } from "react-native";

export default function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    )
}
const styles= StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderColor:'white',
        borderWidth:2,
        padding:12,
       maxWidth:'80%',
        width:250,
       

      }
    
})