import { ImageBackground, View, Text, StyleSheet, ToastAndroid} from "react-native";


import Card from "../components/Card";
import { useState } from "react";

const BackgroundImage = require("../assets/images/ic_bg.png");

export default function Home({navigation}) {

  const [name, setName] = useState("");
  const handleNavigation = () => {

      if(name){

        navigation.navigate("Quiz", {
          name: name
        })
      } else {
         ToastAndroid.show("Please enter name", ToastAndroid.LONG)
      }
      
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}>
          QuizApp
        </Text>

        <Card handleNavigation={handleNavigation} name={name} setName={setName}/>
      </ImageBackground>

      {/* <StatusBar style="auto" hidden={true} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
