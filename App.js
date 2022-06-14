import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { useState } from "react";
export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [couseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler(){
console.log(enteredGoalText)
  setCourseGoals(currentCouseGoals => [...currentCouseGoals, enteredGoalText], )
 

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
      <View  style={styles.goalsContainer}>
      <Text>List of Goal: </Text>
       <ScrollView>
      
        {couseGoals.map((goal) =>
        <View  key={goal} style={styles.goalItem}  >
         <Text style={styles.goalText}>{goal}</Text>
         </View>
         ) }
       </ScrollView>
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
  },
  goalItem:{
    margin: 8,
    borderRadius:6,
    backgroundColor: '#5e08cc',
    padding: 8,
  
  },
  goalText:{
    color: 'white', 
  }
});
