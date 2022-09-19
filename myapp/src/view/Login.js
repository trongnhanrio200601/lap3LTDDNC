import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import images from "../../assets/index";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(189, 246, 198, 0)", "rgba(189, 246, 198, 1)"]}
        style={styles.background}
      >
        <Image source={images.group} style={styles.logo} />
        <Text style={styles.textTitle}>FORGET PASSWORD</Text>
        <Text style={styles.text}>
          Provide your account’s email for which you want to reset your password
        </Text>
        <View style={styles.viewInput}>
          <Image source={images.mail} style={styles.logoMail} />
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </View>
        <LinearGradient
          style={styles.button}
          colors={["rgba(227, 192, 0, 1)", "rgba(227, 192, 0, 1)"]}
        >
          <Button
            title="NEXT"
            color={"#000"}
            accessibilityLabel="Learn more about this purple button"
            onPress={() => navigation.navigate("Verification")}
          />
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

export default Login;

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
  logo: {
    marginTop: 100,
  },
  textTitle: {
    paddingTop: 50,
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
    width: 350,
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logoMail: {
    backgroundColor: "#E5E5E5",
    position: "absolute",
    top: 52,
    zIndex: 5,
    left: 30,
  },
  input: {
    width: "85%",
    height: 50,
    fontSize: 18,
    paddingLeft: 60,
    marginTop: 50,
    color: "#000",
    backgroundColor: "#E5E5E5",
  },
});
