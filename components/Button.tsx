import { Pressable, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  handleNavigation?: () => void;
  color?: string;
}

export default function Button({
  title,
  handleNavigation,
  color,
}: ButtonProps) {
  if (color) {
    return (
      <Pressable style={[styles.button, {backgroundColor: color}]} onPress={handleNavigation}>
        <Text style={[styles.textStyle, {color: "#880ED4"}]}>{title}</Text>
      </Pressable>
    );
  }
  return (
    <Pressable style={styles.button} onPress={handleNavigation}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#880ED4",
    width: "80%",
    borderRadius: 6,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },

  textStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});
