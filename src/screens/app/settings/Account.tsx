import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../Globals/Colors";
import { Button, Paragraph } from "react-native-paper";
import Scroller from "../../../Globals/Scroller";
import Wrapper, { TitleWrapper } from "../../../components/Wrapper";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
    const navigation = useNavigation();
  
  const transitAccount = (): void => {
    navigation.navigate("account");
  };
  const transitUpdates = (): void => {
    navigation.navigate("updates");
  };

  return (
    <>
      <HeaderComp />
      <Scroller>
        <ContainerWrapper>
          <TitleWrapper title={"account"} />

          <Row>
            <Wrapper
              title="my account"
              icon={"user"}
              onPress={transitAccount}
            />
          </Row>

          <TitleWrapper title={"Updates"} />

          <Row>
            <Wrapper
              title="update rank prices"
              icon={"briefcase"}
              onPress={transitUpdates}
            />
          </Row>

          {/* <TitleWrapper title={"sign out"} /> */}
          <Button
            mode="contained"
            contentStyle={styles.btnContent}
            style={styles.btn}
          >
            Log out
          </Button>
          
        </ContainerWrapper>
      </Scroller>
    </>
  );
};

const HeaderComp = () => {
  return (
    <View style={styles.header}>
      <Paragraph style={styles.headerTxt}>Account Settings</Paragraph>
    </View>
  );
};

type con = {
  children: any;
};

const ContainerWrapper = (props: con) => {
  return <View style={styles.con}>{props.children}</View>;
};

type c = {
  children: any;
};
const Row = (props: c) => {
  return <View style={styles.accCon}>{props.children}</View>;
};

export default React.memo(Account);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary_1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  headerTxt: {
    //   fontFamily: roboto.medium,
    fontSize: 17,
    textTransform: "capitalize",
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
});
