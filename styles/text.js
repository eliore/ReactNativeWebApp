"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEXT_STYLES = void 0;
const react_native_1 = require("react-native");
const colors_1 = require("./colors");
const regularFontFamilyName = react_native_1.Platform.OS === "ios" ? "SourceSansPro-Regular" : "SourceSansPro";
exports.TEXT_STYLES = react_native_1.StyleSheet.create({
    h0White: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 42,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    biggerTextWhite: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 40,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    bigTextWhite: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 36,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    bigTextBlack: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 36,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.black
    },
    bigTextWhiteRegular: {
        fontFamily: regularFontFamilyName,
        fontSize: 36,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    bigTextBlackRegular: {
        fontFamily: regularFontFamilyName,
        fontSize: 36,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.black
    },
    bigTextBlack30: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 36,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.black30
    },
    h1PlusBlack: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h1White: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h1WhiteLittleBold: {
        fontFamily: regularFontFamilyName,
        fontWeight: "300",
        fontStyle: "normal",
        fontSize: 24,
        color: colors_1.COLORS.whiteFour
    },
    h1Black: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h1CharcoalGreySemiBold: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 24,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h1BlackLittleBold: {
        fontFamily: regularFontFamilyName,
        fontSize: 24,
        fontWeight: "300",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h1Gray: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h2Green: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.mediumGreen
    },
    h2Lightblue: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.perrywinkle
    },
    h2Red: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.vermillion
    },
    h2Black: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h2Gray: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h2White: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h2Blue: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.blue
    },
    h2Executive: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.executive
    },
    h2Orange: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.squash
    },
    h2LighterPurple: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.lighterPurple
    },
    h2Heliotrope: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.heliotrope
    },
    h2WindowsBlue: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.windowsBlue
    },
    h2SeafoamBlue: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.seafoamBlue
    },
    h3Black: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.greyishBrown
    },
    h3CharcoalGrey: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h3CharcoalGreyNormal: {
        fontFamily: regularFontFamilyName,
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h3Gray: {
        fontFamily: regularFontFamilyName,
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h3ExecutiveBold: {
        fontFamily: regularFontFamilyName,
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.executive
    },
    h3White: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h3WhiteBold: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h3White70: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour70
    },
    h3White50: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour50
    },
    largeTextBlack: {
        fontFamily: regularFontFamilyName,
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    largeTextGray: {
        fontFamily: regularFontFamilyName,
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h4Black: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h4BlackNormal: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h4Error: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.squash
    },
    h4GrayishNormal: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h4Grayish: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h4Gray50Normal: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.grey50
    },
    h4BlackLine20: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h4White: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h4White50: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: "rgba(255, 255, 255, 0.8)"
    },
    h4WhiteSemiBold: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h4WhiteNormal: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h4WhiteThree: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteThree
    },
    h4Green: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.mediumGreen
    },
    h4PinkishGrey: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.pinkishGrey
    },
    h4Greyish: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h4Blue: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.darkSkyBlue
    },
    h4Orange: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: "#f5a623"
    },
    runningBlack: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    runningBlackSemiBold: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    runningWhite: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    runningWhite80: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour80
    },
    runningGray: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    runningOrange: {
        fontFamily: regularFontFamilyName,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.squash
    },
    h5White: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h5WhiteRegular: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h5Black: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h5Green: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.mediumGreen
    },
    h5Black600: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h5Gray600: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h5White600: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    h5Green600: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.mediumGreen
    },
    h5BlackRegular: {
        fontFamily: regularFontFamilyName,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h5Black40: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.black40
    },
    h5Heliotrope: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.heliotrope
    },
    h5LighterPurple: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.lighterPurple
    },
    h5SeafoamBlue: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.seafoamBlue
    },
    h5WindowsBlue: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.windowsBlue
    },
    h5Black30: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.black30
    },
    h5Gray: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h5GrayRegular: {
        fontFamily: regularFontFamilyName,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    h5Gray30: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.black30
    },
    h5MediumGreen: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.mediumGreen
    },
    mediumTextBlack: {
        fontFamily: regularFontFamilyName,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    mediumTextWhite: {
        fontFamily: regularFontFamilyName,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    mediumTextGray: {
        fontFamily: regularFontFamilyName,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.pinkishGrey
    },
    mediumTextGreyish: {
        fontFamily: regularFontFamilyName,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    mediumTextGreyish600: {
        fontFamily: regularFontFamilyName,
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    miniTextBlack: {
        fontFamily: regularFontFamilyName,
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    miniTextBlackBold: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    miniTextLightblueBold: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.perrywinkle
    },
    miniTextOrange: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.squash
    },
    miniTextWhiteBold: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    miniTextGray: {
        fontFamily: regularFontFamilyName,
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    miniTextGrayBold: {
        fontFamily: "SourceSansPro-Bold",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    miniTextGraySemiBold: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    smallTextBoldBlack: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.greyishBrown
    },
    smallTextBoldUnits: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    smallTextWhiteBold: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    smallTextBlack: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    smallTextUnits: {
        fontFamily: regularFontFamilyName,
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    smallTextWhite: {
        fontFamily: regularFontFamilyName,
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    smallTextBlackUnits: {
        fontFamily: regularFontFamilyName,
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    dataCenterBlack: {
        fontFamily: regularFontFamilyName,
        fontSize: 36,
        fontWeight: "300",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    symbolOrganizerGroupTitle: {
        fontFamily: "HelveticaNeue",
        fontSize: 20,
        fontWeight: "bold",
        color: colors_1.COLORS.black
    },
    navigationTitle: {
        fontFamily: "SFProText",
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.blackSecond
    },
    iOsUiKitBodyAltsEmphasized: {
        fontFamily: "SFProText",
        fontSize: 17,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.black
    },
    iOsUiKitSubheadAltsEmphasized: {
        fontFamily: "SFProText",
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.black
    },
    iOsUiKitSubheadAltsShort: {
        fontFamily: "SFProText",
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.black
    },
    searchBarInput: {
        fontFamily: "SFProText",
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.black
    },
    searchBarPlaceholder: {
        fontFamily: "SFProText",
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.grey3
    },
    navigationTitleSmall: {
        fontFamily: "SFProText",
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.blackSecond
    },
    h6Black: {
        fontFamily: regularFontFamilyName,
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    h6Green: {
        fontFamily: regularFontFamilyName,
        fontSize: 14,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.mediumGreen
    },
    navigationSegmentedLabelActive: {
        fontFamily: "SFProText",
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    iOsUiKitFootnote: {
        fontFamily: "SFProText",
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.black
    },
    navigationPrompt: {
        fontFamily: "SFUIText",
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.blackSecond
    },
    navigationDescription: {
        fontFamily: "SFProText",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.blackSecond
    },
    statusBarRightBlack: {
        fontFamily: "SFProText",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        color: "#030303"
    },
    miniTextBoldBlack: {
        fontFamily: "SourceSansPro-SemiBold",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    miniTextSemiBoldBlack: {
        fontFamily: regularFontFamilyName,
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    navigationSubtitle: {
        fontFamily: "SFProText",
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        color: "#030303"
    },
    navigationTabBarLabel: {
        fontFamily: "SFProText",
        fontSize: 10,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#8e8e93"
    },
    tinyTextblack: {
        fontFamily: regularFontFamilyName,
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    tinyTextwhite: {
        fontFamily: regularFontFamilyName,
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.whiteFour
    },
    tinyTextGrayLeft: {
        fontFamily: regularFontFamilyName,
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    },
    tinyTextblackLight: {
        fontFamily: regularFontFamilyName,
        fontSize: 10,
        fontWeight: "300",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    hugeTextBlack: {
        fontFamily: regularFontFamilyName,
        fontSize: 22,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.charcoalGrey
    },
    hugeTextGray: {
        fontFamily: regularFontFamilyName,
        fontSize: 22,
        fontWeight: "600",
        fontStyle: "normal",
        color: colors_1.COLORS.greyish
    }
});
