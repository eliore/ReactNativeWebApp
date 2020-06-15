import * as React from "react";
import {Button, StyleSheet, TextInput, View } from "react-native";

const login = () => alert("login");

class Login extends React.Component<any> {
  render() {
    return (<View style={styles.center}>
            <TextInput textContentType={"username"} placeholder={"Username"}/>
            <TextInput textContentType={"password"} placeholder={"Password"}/>
            <Button title={"Login"} onPress={login}/>
          </View>);
  }
}

export default Login;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
