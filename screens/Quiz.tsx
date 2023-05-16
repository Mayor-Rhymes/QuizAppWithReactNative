import {
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import OptionButton from "../components/OptionButton";
import Button from "../components/Button";
import * as Progress from "react-native-progress";
import { useState, useRef } from "react";
import { quizzes } from "../data/questions";

export default function Quiz({route, navigation}) {
  const [quizCounter, setQuizCounter] = useState(0);
  const [score, setScore] = useState(0);
  const flag = quizzes[quizCounter].flag;
  const [selectedOne, setSelectedOne] = useState(false);
  const [selectedTwo, setSelectedTwo] = useState(false);
  const [selectedThree, setSelectedThree] = useState(false);
  const [selectedFour, setSelectedFour] = useState(false);
  const [correctOne, setCorrectOne] = useState(false);
  const [correctTwo, setCorrectTwo] = useState(false);
  const [correctThree, setCorrectThree] = useState(false);
  const [correctFour, setCorrectFour] = useState(false);
  const [wrongOne, setWrongOne] = useState(false);
  const [wrongTwo, setWrongTwo] = useState(false);
  const [wrongThree, setWrongThree] = useState(false);
  const [wrongFour, setWrongFour] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("SUBMIT");


  const {name} = route.params;

  const options = [
    { id: 1, name: quizzes[quizCounter].optionOne },
    { id: 2, name: quizzes[quizCounter].optionTwo },
    { id: 3, name: quizzes[quizCounter].optionThree },
    { id: 4, name: quizzes[quizCounter].optionFour },
  ];

  const handlePress = (id: number) => {
    if (id === 1) {
      setSelectedOne(true);
      setSelectedTwo(false);
      setSelectedThree(false);
      setSelectedFour(false);
    } else if (id === 2) {
      setSelectedTwo(true);
      setSelectedThree(false);
      setSelectedFour(false);
      setSelectedOne(false);
    } else if (id == 3) {
      setSelectedThree(true);
      setSelectedFour(false);
      setSelectedTwo(false);
      setSelectedOne(false);
    } else if (id == 4) {
      setSelectedFour(true);
      setSelectedOne(false);
      setSelectedTwo(false);
      setSelectedThree(false);
    }
  };

  const reset = () => {
    setSelectedFour(false);
    setSelectedOne(false);
    setSelectedTwo(false);
    setSelectedThree(false);
    setCorrectOne(false);
    setCorrectTwo(false);
    setCorrectThree(false);
    setCorrectFour(false);
    setWrongOne(false);
    setWrongTwo(false);
    setWrongThree(false);
    setWrongFour(false);
    setButtonTitle("SUBMIT");
  };

  const handleSelection = () => {
    if (selectedOne && options[0].id === quizzes[quizCounter].correctOption) {
      setCorrectOne(true);
      setScore((prevState) => prevState + 1)
    } else if (
      selectedTwo &&
      options[1].id === quizzes[quizCounter].correctOption
    ) {
      setCorrectTwo(true);
      setScore((prevState) => prevState + 1)
    } else if (
      selectedThree &&
      options[2].id === quizzes[quizCounter].correctOption
    ) {
      setCorrectThree(true);
      setScore((prevState) => prevState + 1)
    } else if (
      selectedFour &&
      options[3].id === quizzes[quizCounter].correctOption
    ) {
      setCorrectFour(true);
      setScore((prevState) => prevState + 1)
    }
  };

  const handleWrongSelection = () => {
    if (selectedOne && options[0].id !== quizzes[quizCounter].correctOption) {
      if (options[1].id === quizzes[quizCounter].correctOption) {
        setCorrectTwo(true);
      } else if (options[2].id === quizzes[quizCounter].correctOption) {
        setCorrectThree(true);
      } else if (options[3].id === quizzes[quizCounter].correctOption) {
        setCorrectFour(true);
      }
      setWrongOne(true);
    } else if (
      selectedTwo &&
      options[1].id !== quizzes[quizCounter].correctOption
    ) {
      if (options[0].id === quizzes[quizCounter].correctOption) {
        setCorrectOne(true);
      } else if (options[2].id === quizzes[quizCounter].correctOption) {
        setCorrectThree(true);
      } else if (options[3].id === quizzes[quizCounter].correctOption) {
        setCorrectFour(true);
      }
      setWrongTwo(true);
    } else if (
      selectedThree &&
      options[2].id !== quizzes[quizCounter].correctOption
    ) {
      setWrongThree(true);

      if (options[0].id === quizzes[quizCounter].correctOption) {
        setCorrectOne(true);
      } else if (options[1].id === quizzes[quizCounter].correctOption) {
        setCorrectTwo(true);
      } else if (options[3].id === quizzes[quizCounter].correctOption) {
        setCorrectFour(true);
      }
    } else if (
      selectedFour &&
      options[3].id !== quizzes[quizCounter].correctOption
    ) {
      setWrongFour(true);

      if (options[1].id === quizzes[quizCounter].correctOption) {
        setCorrectTwo(true);
      } else if (options[2].id === quizzes[quizCounter].correctOption) {
        setCorrectThree(true);
      } else if (options[0].id === quizzes[quizCounter].correctOption) {
        setCorrectOne(true);
      }
    }
  };

  const handleSubmit = () => {
    if (
      buttonTitle === "SUBMIT" &&
      (selectedOne === true ||
        selectedTwo === true ||
        selectedThree === true ||
        selectedFour === true)
    ) {
      handleSelection();
      handleWrongSelection();

      setButtonTitle("NEXT");
    } else if (
      selectedOne === false &&
      selectedTwo === false &&
      selectedThree === false &&
      selectedFour === false
    ) {
      ToastAndroid.show("Please select an option", ToastAndroid.LONG);
    } else {
      if (quizCounter < quizzes.length - 1) {
        setQuizCounter((prevState) => prevState + 1);
        reset();
      } else {
        navigation.navigate("Score", {
          score: score,
          name: name,
          quizNumber: quizzes.length

        })
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        What country does this flag belong to?
      </Text>

      <Image source={flag} />

      <View style={styles.progressView}>
        <Progress.Bar
          progress={(quizCounter + 1) / quizzes.length}
          width={250}
          borderWidth={0}
          style={{ backgroundColor: "gray", marginRight: 10 }}
        />
        <Text>
          {quizCounter}/{quizzes.length}
        </Text>
      </View>

      {options.map((option) => {
        if (option.id === 1) {
          return (
            <OptionButton
              option={option.name}
              selected={selectedOne}
              key={option.id}
              pressEvent={() => handlePress(option.id)}
              correct={correctOne}
              wrong={wrongOne}
            />
          );
        } else if (option.id === 2) {
          return (
            <OptionButton
              option={option.name}
              selected={selectedTwo}
              key={option.id}
              pressEvent={() => handlePress(option.id)}
              correct={correctTwo}
              wrong={wrongTwo}
            />
          );
        } else if (option.id === 3) {
          return (
            <OptionButton
              option={option.name}
              selected={selectedThree}
              key={option.id}
              pressEvent={() => handlePress(option.id)}
              correct={correctThree}
              wrong={wrongThree}
            />
          );
        } else if (option.id === 4) {
          return (
            <OptionButton
              option={option.name}
              selected={selectedFour}
              key={option.id}
              pressEvent={() => handlePress(option.id)}
              correct={correctFour}
              wrong={wrongFour}
            />
          );
        }
      })}
      <Button title={buttonTitle} handleNavigation={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    gap: 30,
  },

  question: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 30,
  },

  progressView: {
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
