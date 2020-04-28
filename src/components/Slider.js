import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?tree"
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
            images={this.state.images}
            dotColor="#6B6B6B"
            inactiveDotColor="#C3C3C3"
            autoplay
            circleLoop
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: "rgba(128, 128, 128, 0.92)"
              }}
            ImageComponentStyle={{width: '88%'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  }
});