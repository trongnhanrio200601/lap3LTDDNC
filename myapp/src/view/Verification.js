import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import images from "../../assets/index";

function Verification() {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(199, 244, 246, 0)",
          "rgba(209, 244, 246, 1)",
          "rgba(229, 244, 245, 1)",
          "rgba(0, 204, 249, 1)",
        ]}
        style={styles.background}
      >
        <Text style={styles.textLogo}>CODE</Text>
        <Text style={styles.textTitle}>VERIFICATION</Text>
        <Text style={styles.text}>
          Enter ontime password sent on +0999999999
        </Text>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </View>
        <LinearGradient
          style={styles.button}
          colors={["rgba(227, 192, 0, 1)", "rgba(227, 192, 0, 1)"]}
        >
          <Button
            title="VERIFICATION"
            color={"#000"}
            accessibilityLabel="Learn more about this purple button"
          />
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

export default Verification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  background: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  textLogo: {
    marginTop: 130,
    fontSize: 60,

    fontWeight: "700",
  },
  textTitle: {
    paddingTop: 60,
    fontStyle: "bold",
    fontSize: 25,
    width: 189,
    fontWeight: "700",
    lineHeight: "30",
    textAlign: "center",
  },
  text: {
    paddingTop: 50,
    fontStyle: "bold",
    fontSize: 15,
    width: 302,
    fontWeight: "700",
    lineHeight: "18",
    textAlign: "center",
  },
  button: {
    width: "85%",
    marginTop: 50,
    paddingTop: 5,
    paddingBottom: 5,
    fontStyle: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  viewInput: {
    width: "100%",
    position: "relative",
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  input: {
    borderWidth: 1,
    width: 50,
    height: 50,
    fontSize: 18,
    color: "#000",
    opacity: 0.5,
    backgroundColor: "#E5E5E5",
  },
});
