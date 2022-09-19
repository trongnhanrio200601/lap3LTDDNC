import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [total, setTotal] = useState("");

  const handleTotle = () => {
    setTotal(Number(input1) + Number(input2));
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input1}
        onChangeText={setInput1}
        placeholder="Nhap a"
      />
      <TextInput
        style={styles.input}
        value={input2}
        onChangeText={setInput2}
        placeholder="Nhap b"
      />
      <View style={styles.total}>
        <Button
          color="#841584"
          title="Total"
          onPress={handleTotle}
          style={styles.button}
        />
        <Text style={styles.result}>{total}</Text>
      </View>

      <StatusBar style="auto" />
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
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  button: {
    height: 50,
    padding: 20,
  },
  result: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
