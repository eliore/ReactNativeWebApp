import { AppRegistry } from "react-native";
import { configure } from "mobx";
import { name as appName } from "./app.json";

require("@babel/runtime/helpers/esm/applyDecoratedDescriptor");
require("@babel/runtime/helpers/esm/initializerDefineProperty");

configure({ enforceActions: "always" });

AppRegistry.registerComponent(appName, () => App);

