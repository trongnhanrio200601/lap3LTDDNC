import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, Button } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import images from "../../assets/index";
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(229, 244, 245, 1)",
          "rgba(209, 244, 246, 1)",
          "rgba(199, 244, 246, 1)",
          "rgba(0, 204, 249, 1)",
        ]}
        style={styles.background}
      >
        <Image source={images.circle} style={styles.logo} />
        <Text style={styles.textTitle}>GROW YOUR BUSINESS</Text>
        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>
        <View style={styles.buttonView}>
          <LinearGradient
            style={styles.button}
            colors={["rgba(227, 192, 0, 1)", "rgba(227, 192, 0, 1)"]}
          >
            <Button
              title="LOGIN"
              accessibilityLabel="Learn more about this purple button"
              onPress={() => navigation.navigate("Login")}
            />
          </LinearGradient>
          <LinearGradient
            style={styles.button}
            colors={["rgba(227, 192, 0, 1)", "rgba(227, 192, 0, 1)"]}
          >
            <Button
              title="SIGN UP"
              accessibilityLabel="Learn more about this purple button"
            />
          </LinearGradient>
        </View>
        <Text style={styles.textBottom}>HOW WE WORK?</Text>
      </LinearGradient>
    </View>
  );
}

export default Home;

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
    marginTop: 200,
    resizeMode: "stretch",
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
  buttonView: {
    paddingTop: 50,
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  button: {
    fontStyle: "bold",
    fontSize: 18,
    width: 120,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
  },
  textBottom: {
    paddingTop: 50,
    fontStyle: "bold",
    fontSize: 18,
    width: 189,
    fontWeight: "700",
    lineHeight: "20",
    textAlign: "center",
  },
});
