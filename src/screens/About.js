import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import React from "react";
  
  const About = () => {
    return (
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>WHAT IS SANKETLIFE?</Text>
        <Text style={styles.paraStyle}>WORLD'S SMALLEST, POCKET, 12-LEAD ECG MONITOR</Text>
  
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://play-lh.googleusercontent.com/3t6lE1DLGWUn31ltkcDzQ-oN1lZLXnx3_ryjP3Aar9ukzgFrIbGaBNXlIQBWcswlvw",
            }}
          />
        </View>
  
        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}> About me </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
          SanketLife is the world's smallest, clinical grade, touch based 12-Lead ECG Monitor. This is a pocket ECG machine, which can be carried anywhere and can be operated by anyone with minimal or no training. Since, it is capable of taking full 12-Lead ECG, it is apt for use by doctors, healthcare professionals, diagnostic services and users and patients equally.Along with ECG, this portable Heart monitor can measure accurate Heart rate (HR), Heart Rate Variability (HRV), Stress and almost 100+ Heart diseases.
          </Text>
        </View>
  
        <Text style={styles.mainHeader}> Follow me on Social Network </Text>
  
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/sanketlife_in/?hl=en")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UC_DEStSXEIIRQCFfj2ObS1g"
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://sanketlife.in/")}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://img.icons8.com/color/48/000000/google-logo.png/"
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    aboutContainer: {
      display: "flex",
      alignItems: "center",
    },
  
    imgStyle: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    mainHeader: {
      fontSize: 18,
      color: "#344055",
      textTransform: "uppercase",
      fontWeight: "500",
      marginTop: 50,
      marginBottom: 10,
      fontFamily: "JosefinSans_700Bold",
    },
    paraStyle: {
      fontSize: 18,
      color: "#7d7d7d",
      paddingBottom: 30,
      marginLeft:30,
      marginRight:30,
    },
    aboutLayout: {
      backgroundColor: "#4c5dab",
      paddingHorizontal: 30,
      marginVertical: 30,
    },
    aboutSubHeader: {
      fontSize: 18,
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "500",
      marginVertical: 15,
      fontFamily: "JosefinSans_700Bold",
      alignSelf: "center",
    },
    aboutPara: {
      color: "#fff",
    },
    menuContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  
    iconStyle: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
  });
  
  export default About;