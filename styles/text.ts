import { Platform, StyleSheet } from "react-native";
import { COLORS as colors } from "./colors";

const regularFontFamilyName =
  Platform.OS === "ios" ? "SourceSansPro-Regular" : "SourceSansPro";

export const TEXT_STYLES = StyleSheet.create({
  h0White: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 42,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  biggerTextWhite: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  bigTextWhite: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 36,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  bigTextBlack: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 36,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.black
  },
  bigTextWhiteRegular: {
    fontFamily: regularFontFamilyName,
    fontSize: 36,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  bigTextBlackRegular: {
    fontFamily: regularFontFamilyName,
    fontSize: 36,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.black
  },
  bigTextBlack30: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 36,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.black30
  },
  h1PlusBlack: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h1White: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  h1WhiteLittleBold: {
    fontFamily: regularFontFamilyName,
    fontWeight: "300",
    fontStyle: "normal",
    fontSize: 24,
    color: colors.whiteFour
  },
  h1Black: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h1CharcoalGreySemiBold: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h1BlackLittleBold: {
    fontFamily: regularFontFamilyName,
    fontSize: 24,
    fontWeight: "300",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h1Gray: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.greyish
  },
  h2Green: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.mediumGreen
  },
  h2Lightblue: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.perrywinkle
  },
  h2Red: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.vermillion
  },
  h2Black: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h2Gray: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.greyish
  },
  h2White: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  h2Blue: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.blue
  },
  h2Executive: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.executive
  },
  h2Orange: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.squash
  },
  h2LighterPurple: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.lighterPurple
  },
  h2Heliotrope: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.heliotrope
  },
  h2WindowsBlue: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.windowsBlue
  },
  h2SeafoamBlue: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.seafoamBlue
  },
  h3Black: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.greyishBrown
  },
  h3CharcoalGrey: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h3CharcoalGreyNormal: {
    fontFamily: regularFontFamilyName,
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h3Gray: {
    fontFamily: regularFontFamilyName,
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.greyish
  },
  h3ExecutiveBold: {
    fontFamily: regularFontFamilyName,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.executive
  },
  h3White: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  h3WhiteBold: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  h3White70: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.whiteFour70
  },
  h3White50: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.whiteFour50
  },
  largeTextBlack: {
    fontFamily: regularFontFamilyName,
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  largeTextGray: {
    fontFamily: regularFontFamilyName,
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.greyish
  },
  h4Black: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h4BlackNormal: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h4Error: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.squash
  },
  h4GrayishNormal: {
    fontFamily: regularFontFamilyName,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.greyish
  },
  h4Grayish: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.greyish
  },
  h4Gray50Normal: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.grey50
  },
  h4BlackLine20: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h4White: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteFour
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
    color: colors.whiteFour
  },
  h4WhiteNormal: {
    fontFamily: regularFontFamilyName,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  h4WhiteThree: {
    fontFamily: regularFontFamilyName,
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteThree
  },
  h4Green: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.mediumGreen
  },
  h4PinkishGrey: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.pinkishGrey
  },
  h4Greyish: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.greyish
  },
  h4Blue: {
    fontFamily: regularFontFamilyName,
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.darkSkyBlue
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
    color: colors.charcoalGrey
  },
  runningBlackSemiBold: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  runningWhite: {
    fontFamily: regularFontFamilyName,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  runningWhite80: {
    fontFamily: regularFontFamilyName,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.whiteFour80
  },
  runningGray: {
    fontFamily: regularFontFamilyName,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.greyish
  },
  runningOrange: {
    fontFamily: regularFontFamilyName,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.squash
  },
  h5White: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  h5WhiteRegular: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  h5Black: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h5Green: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.mediumGreen
  },
  h5Black600: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h5Gray600: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.greyish
  },
  h5White600: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  h5Green600: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.mediumGreen
  },
  h5BlackRegular: {
    fontFamily: regularFontFamilyName,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h5Black40: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.black40
  },
  h5Heliotrope: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.heliotrope
  },
  h5LighterPurple: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.lighterPurple
  },
  h5SeafoamBlue: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.seafoamBlue
  },
  h5WindowsBlue: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.windowsBlue
  },
  h5Black30: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.black30
  },
  h5Gray: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.greyish
  },
  h5GrayRegular: {
    fontFamily: regularFontFamilyName,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.greyish
  },
  h5Gray30: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.black30
  },
  h5MediumGreen: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.mediumGreen
  },
  mediumTextBlack: {
    fontFamily: regularFontFamilyName,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  mediumTextWhite: {
    fontFamily: regularFontFamilyName,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  mediumTextGray: {
    fontFamily: regularFontFamilyName,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.pinkishGrey
  },
  mediumTextGreyish: {
    fontFamily: regularFontFamilyName,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.greyish
  },
  mediumTextGreyish600: {
    fontFamily: regularFontFamilyName,
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.greyish
  },
  miniTextBlack: {
    fontFamily: regularFontFamilyName,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  miniTextBlackBold: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  miniTextLightblueBold: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.perrywinkle
  },
  miniTextOrange: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.squash
  },
  miniTextWhiteBold: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  miniTextGray: {
    fontFamily: regularFontFamilyName,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.greyish
  },
  miniTextGrayBold: {
    fontFamily: "SourceSansPro-Bold",
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    color: colors.greyish
  },
  miniTextGraySemiBold: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.greyish
  },
  smallTextBoldBlack: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.greyishBrown
  },
  smallTextBoldUnits: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  smallTextWhiteBold: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  smallTextBlack: {
    fontFamily: "SourceSansPro-SemiBold",
    fontSize: 10,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  smallTextUnits: {
    fontFamily: regularFontFamilyName,
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.greyish
  },
  smallTextWhite: {
    fontFamily: regularFontFamilyName,
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  smallTextBlackUnits: {
    fontFamily: regularFontFamilyName,
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  dataCenterBlack: {
    fontFamily: regularFontFamilyName,
    fontSize: 36,
    fontWeight: "300",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  symbolOrganizerGroupTitle: {
    fontFamily: "HelveticaNeue",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black
  },
  navigationTitle: {
    fontFamily: "SFProText",
    fontSize: 17,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.blackSecond
  },
  iOsUiKitBodyAltsEmphasized: {
    fontFamily: "SFProText",
    fontSize: 17,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.black
  },
  iOsUiKitSubheadAltsEmphasized: {
    fontFamily: "SFProText",
    fontSize: 15,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.black
  },
  iOsUiKitSubheadAltsShort: {
    fontFamily: "SFProText",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.black
  },
  searchBarInput: {
    fontFamily: "SFProText",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.black
  },
  searchBarPlaceholder: {
    fontFamily: "SFProText",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.grey3
  },
  navigationTitleSmall: {
    fontFamily: "SFProText",
    fontSize: 15,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.blackSecond
  },
  h6Black: {
    fontFamily: regularFontFamilyName,
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  h6Green: {
    fontFamily: regularFontFamilyName,
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.mediumGreen
  },
  navigationSegmentedLabelActive: {
    fontFamily: "SFProText",
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  iOsUiKitFootnote: {
    fontFamily: "SFProText",
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.black
  },
  navigationPrompt: {
    fontFamily: "SFUIText",
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.blackSecond
  },
  navigationDescription: {
    fontFamily: "SFProText",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.blackSecond
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
    color: colors.charcoalGrey
  },
  miniTextSemiBoldBlack: {
    fontFamily: regularFontFamilyName,
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.charcoalGrey
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
    color: colors.charcoalGrey
  },
  tinyTextwhite: {
    fontFamily: regularFontFamilyName,
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.whiteFour
  },
  tinyTextGrayLeft: {
    fontFamily: regularFontFamilyName,
    fontSize: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.greyish
  },
  tinyTextblackLight: {
    fontFamily: regularFontFamilyName,
    fontSize: 10,
    fontWeight: "300",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  hugeTextBlack: {
    fontFamily: regularFontFamilyName,
    fontSize: 22,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.charcoalGrey
  },
  hugeTextGray: {
    fontFamily: regularFontFamilyName,
    fontSize: 22,
    fontWeight: "600",
    fontStyle: "normal",
    color: colors.greyish
  }
});
