import { observer, Provider } from "mobx-react";
import React from "react";
import { Dimensions, StyleSheet, View} from "react-native";
import Login from "./components/screens/login";

const { height } = Dimensions.get("window");

@observer
class App extends React.Component<any> {
  render() {
    return (
        <Provider>
          <View style={styles.container}>
            <Login/>
          </View>
        </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    height
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
