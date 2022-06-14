import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler(){
console.log(enteredGoalText)

  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your course goal "></TextInput> 
        <Button 
        onPress={addGoalHandler}
        title="Add goal"></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goal: </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16
    // backgroundColor: "#ffffff",
    // alignItems: "center",
    // justifyContent: "center",
  },
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
  }, goalsContainer:{
    flex:5
  }
});
