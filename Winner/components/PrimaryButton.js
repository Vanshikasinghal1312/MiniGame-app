import {Text,View,StyleSheet,TouchableOpacity, Pressable} from 'react-native'

function PrimaryButton({children, onPress}){
    // function pressHandler(){
    //     //console.log('press')
    //    // pressing()
    // }
    return (
        <View style={styles.buttonOutercontainer}>
       {/* <TouchableOpacity style={styles.buttonInnercontainer} onPress={pressHandler} android_ripple={{color:'yellow'}}> */}
       <Pressable style={styles.buttonInnercontainer} 
       onPress={onPress} 
       android_ripple={{color:'white'}}
       > 
    <Text style={styles.textContainer}>{children}</Text>
    </Pressable>
    {/* </TouchableOpacity> */}
   
</View>

    )
}
export default PrimaryButton

const styles= StyleSheet.create({
    buttonOutercontainer:{
       borderRadius:15,   
        //margin:2,
        overflow:'hidden'
    },
    buttonInnercontainer:{
        backgroundColor:'darkmagenta',
        borderRadius:10,
        padding:8,
        alignItems:'center',
        marginHorizontal:5,
        marginVertical:5,
    },
    textContainer:{
        color:'white',
        textAlign:'center'

    }
})