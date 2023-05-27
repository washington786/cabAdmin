import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, IconButton, Paragraph, TextInput } from "react-native-paper";
import { colors, rgba } from "../../../Globals/Colors";
import Scroller from "../../../Globals/Scroller";
import MainView from "../../../Globals/MainView";
import { useNavigation } from "@react-navigation/native";
import { Column } from "./Settings";
import { MainStyle } from "../../../styles/MainStyle";

const isIos = Platform.OS === "ios";

const UpdatesOnPrices = () => {
  return (
    <MainView>
      <HeaderComp />
      <Scroller>
        <Column>
          <TextInputsWrapper />
        </Column>
      </Scroller>
    </MainView>
  );
};

const HeaderComp = () => {
  const navigation = useNavigation();
  const goBack = (): void => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <IconButton
        icon={"arrow-left"}
        size={20}
        iconColor="#333"
        onPress={goBack}
      />
      <Paragraph style={styles.headerTxt}>Price Updates</Paragraph>
    </View>
  );
};

const TextInputsWrapper = () => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={"from(e.g Seshego)"}
        inputMode="text"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
      />
      <TextInput
        placeholder={"to(e.g Polokwane CBD)"}
        inputMode="text"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
      />

      <TextInput
        placeholder={"Price"}
        inputMode="numeric"
        keyboardAppearance="default"
        keyboardType="number-pad"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
      />

      <Button
        mode="contained"
        contentStyle={MainStyle.buttonGlobal}
        labelStyle={MainStyle.label}
        style={MainStyle.btn}
      >
        update price
      </Button>
    </View>
  );
};
export default React.memo(UpdatesOnPrices);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary_10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    flexDirection: "row",
  },
  headerTxt: {
    fontSize: 17,
    textTransform: "capitalize",
    color: "#333",
    fontWeight: "500",
    flex: 1,
    textAlign: "center",
  },
  con: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    flex: 1,
  },
  accCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContent: {
    borderRadius: 0,
    backgroundColor: colors.primary_5,
  },
  btn: {
    marginHorizontal: 8,
    borderRadius: 5,
  },
  label: {
    fontStyle: "normal",
  },
  avatar: {
    backgroundColor: colors.primary_5,
    alignSelf: "center",
    elevation: 2,
  },
  email: {
    // fontFamily: roboto.light,
    letterSpacing: 1,
  },
  inputWrapper: {
    paddingVertical: 10,
  },
  outlined: {
    borderRadius: 2,
    borderWidth: isIos ? 0.5 : 1,
    borderColor: isIos ? rgba.grey_2 : rgba.grey_1,
  },
  input: {
    marginVertical: 6,
  },
  col: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});
