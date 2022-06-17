import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    setCourseGoals((currentCouseGoals) => [
      ...currentCouseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }



  function deleteGoalHandler(id){
    console.log("delete");
    setCourseGoals( (currentCouseGoals) => {
      return currentCouseGoals.filter( (goal) =>  goal.id !== id)
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <Text>List of Goal: </Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} 
             onDeleteItem={deleteGoalHandler}
             id={itemData.item.id}
             />;
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />

        {/* <ScrollView>
      
      {couseGoals.map((goal) =>
      <View  key={goal} style={styles.goalItem}  >
       <Text  key={goal} style={styles.goalText}>{goal}</Text>
       </View>
       ) }
     </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: "#ffffff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
