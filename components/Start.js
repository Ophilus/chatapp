import React from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import BackgroundImage from "../assets/background-image.png";

export default class Start extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      bgColor: this.colors.third,
    };
  }

  
  changeBgColor = (newColor) => {
    this.setState({ bgColor: newColor });
  };

  colors = {
    first: "#090C08",
    second: "#474056",
    third: "#8A95A5",
    fourth: "#B9C6AE",
  };

  render() {
    return (
    
      <View style={styles.container}>
        <ImageBackground
          source={BackgroundImage}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <View style={styles.titleBox}>
            <Text style={styles.title}>Chat App</Text>
          </View>

          <View style={styles.box1}>
            
              <View style={styles.inputBox}>
                <Image source={require('../assets/user.png')} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => this.setState({ name: text })}
                  value={this.state.name}
                  placeholder="Your Name"
                />
                </View>
            
            <View style={styles.colorBox}>
              <Text style={styles.chooseColor}>
                
                Choose Background Color:
              </Text>
            </View>

            
            <View style={styles.colorArray}>
              <TouchableOpacity
                accessible={true}
                accessibilityRole="button"
                style={styles.color1}
                onPress={() => this.changeBgColor(this.colors.first)}
              ></TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityRole="button"
                style={styles.color2}
                onPress={() => this.changeBgColor(this.colors.second)}
              ></TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityRole="button"
                style={styles.color3}
                onPress={() => this.changeBgColor(this.colors.third)}
              ></TouchableOpacity>
                <TouchableOpacity
                accessible={true}
                accessibilityRole="button"
                style={styles.color4}
                onPress={() => this.changeBgColor(this.colors.fourth)}
                ></TouchableOpacity>
            </View>

            
            <Pressable
              accessible={true}
              accessibilityRole="button"
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  bgColor: this.state.bgColor,
                })
              }
            >
              <Text style={styles.buttonText}>Start Chatting</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  titleBox: {
    height: "50%",
    width: "88%",
    alignItems: "center",
    paddingTop: 100,
  },

  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  box1: {
    backgroundColor: "white",
    height: "46%",
    width: "88%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  inputBox: {
    borderWidth: 2,
    borderRadius: 1,
    borderColor: "grey",
    width: "88%",
    height: 60,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.5,
    marginLeft: 10,
  },

  colorBox: {
    marginRight: "auto",
    paddingLeft: 15,
    width: "88%",
  },

  chooseColor: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
  },

  colorArray: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  color1: {
    backgroundColor: "#090C08",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  color2: {
    backgroundColor: "#474056",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  color3: {
    backgroundColor: "#8A95A5",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  color4: {
    backgroundColor: "#B9C6AE",
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  button: {
    width: "88%",
    height: 70,
    borderRadius: 8,
    backgroundColor: "#757083",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});