import * as React from 'react'
import {View, TextInput,StyleSheet} from 'react-native'

export default function TodoNotesScreen(){
return(

    <View>
<TextInput style ={styles.container}
placeholder='Title' 

></TextInput>
<View ><TextInput style ={styles.Text}
placeholder='Description' 
multiline numberOfLines={4}


></TextInput></View>
    </View>
)
}

const styles =StyleSheet.create({
    container: {
        height: 40,
        margin: 1,
        borderWidth: 1,
        padding: 10,
        textAlignVertical:'top',
        fontSize:20,
        backgroundColor:"#fff"
    },
Text:{
    
    height: 700,
    margin:1,
    borderWidth: 1,
    padding: 10,
    fontSize:15,
    textAlignVertical:'top',
    justifyContent: 'center' ,
    backgroundColor:"#fff"       

},
})

