"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMON_STYLES = void 0;
const react_native_1 = require("react-native");
exports.COMMON_STYLES = react_native_1.StyleSheet.create({
    fill: { flex: 1 },
    flexWrap: { flexWrap: "wrap" },
    justifyContentCenter: { justifyContent: "center" },
    alignItemsCenter: { alignItems: "center" },
    alignSelfCenter: { alignSelf: "center" },
    directionRow: { flexDirection: "row" },
    directionColumn: { flexDirection: "column" },
    fullAbsolute: { position: "absolute", top: 0, bottom: 0, right: 0, left: 0 },
    rightLeftPadding16: { paddingLeft: 16, paddingRight: 16 },
    rightLeftPadding8: { paddingLeft: 8, paddingRight: 8 },
    rightLeftPadding4: { paddingLeft: 4, paddingRight: 4 },
    flexCenter: { alignItems: "center", justifyContent: "center" },
    relative: { position: "relative" },
    marginLeft2: { marginLeft: 2 },
    marginRight2: { marginRight: 2 },
    marginLeft4: { marginLeft: 4 },
    marginRight4: { marginRight: 4 },
    marginLeft5: { marginLeft: 5 },
    marginRight5: { marginRight: 5 },
    marginLeft6: { marginLeft: 6 },
    marginRight6: { marginRight: 6 },
    marginLeft8: { marginLeft: 8 },
    marginRight8: { marginRight: 8 },
    marginLeft16: { marginLeft: 16 },
    marginRight16: { marginRight: 16 },
    marginTop2: { marginTop: 2 },
    marginTop4: { marginTop: 4 },
    marginTop8: { marginTop: 8 },
    marginTop16: { marginTop: 16 },
    marginTop32: { marginTop: 32 },
    marginBottom2: { marginBottom: 2 },
    marginBottom4: { marginBottom: 4 },
    marginBottom8: { marginBottom: 8 },
    marginBottom16: { marginBottom: 16 },
    marginBottom32: { marginBottom: 32 },
    textAlignCenter: { textAlign: "center" },
    textAlignLeft: { textAlign: "left" },
    textAlignRight: { textAlign: "right" },
    absolute: { position: "absolute" },
    visibilityHidden: { opacity: 0 },
    tooltipContainer: {
        zIndex: 999,
        borderRadius: 3,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 12,
        shadowOpacity: 1
    }
});
