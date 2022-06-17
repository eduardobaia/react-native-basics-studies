import { StyleSheet, View , Text, Button, TextInput} from "react-native";
import  { useState } from "react";

export default function GoalInput(props) {

 
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

  return (
    <View style={styles.inputContainer}>
    <TextInput
    onChangeText={goalInputHandler}
    style={styles.textInput}
    placeholder="Your course goal "
    value={enteredGoalText}
    /> 
    <Button 
    onPress={addGoalHandler}
    title="Add goal"></Button>
  </View>
  )
}


const styles = StyleSheet.create({
 
    inputContainer:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      marginBottom: 24,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc'
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width:'80%',
        marginRight: 8,
        padding: 8
    }  
  });
  