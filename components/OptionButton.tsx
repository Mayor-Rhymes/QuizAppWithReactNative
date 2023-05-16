import { Text, Pressable, StyleSheet } from "react-native";
interface OptionProps {
  option: string;
  selected: boolean;
  pressEvent: () => void;
  correct?: boolean;
  wrong?: boolean;
}

export default function OptionButton({
  option,
  selected,
  pressEvent,
  correct,
  wrong
}: OptionProps) {
  if (correct) {
     return <Pressable
      style={[styles.defaultStyle, styles.correctStyle]}
      onPress={pressEvent}
    >
      <Text style={{ fontWeight: "bold", color: "white" }}>{option}</Text>
    </Pressable>;
  } else if (wrong) {
    return <Pressable
    style={[styles.defaultStyle, styles.wrongStyle]}
    onPress={pressEvent}
    >
    <Text style={{ fontWeight: "bold", color: "white" }}>{option}</Text>
  </Pressable>;
     
  }
  else if (selected) {
    return <Pressable
      style={[styles.defaultStyle, styles.selectedStyle]}
      onPress={pressEvent}
    >
      <Text style={{ fontWeight: "bold" }}>{option}</Text>
    </Pressable>;
  } else {
    return <Pressable style={styles.defaultStyle} onPress={pressEvent}>
      <Text>{option}</Text>
    </Pressable>;
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    height: 50,
    width: "80%",
    backgroundColor: "#fff",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedStyle: {
    borderColor: "blue",
    borderWidth: 2,
  },

  correctStyle: {
    backgroundColor: "green",
    borderColor: "green",
  },

  wrongStyle: {

    backgroundColor: "red",
    borderColor: "red"
  }
});
