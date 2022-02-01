import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      larBox: new Animated.Value(150),
      altBox: new Animated.Value(50),
      opacidade: new Animated.Value(0),
    };

    Animated.sequence([
      Animated.timing(
        this.state.opacidade,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.larBox,
          {
            toValue: 300,
            duration: 2000,
            useNativeDriver: false
          }
        ),
        Animated.timing(
          this.state.altBox,
          {
            toValue: 250,
            duration: 2000,
            useNativeDriver: false
          }
        )
      ]),
      Animated.timing(
        this.state.opacidade,
        {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false
        }
      )
    ]).start();

    // Animated.timing(
    //   this.state.larBox,
    //   {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }
    // ).start();

  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Animated.View style={{
          width: this.state.larBox,
          height: this.state.altBox,
          opacity: this.state.opacidade,
          backgroundColor: "#0099ff",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: "#fff",
          }}>Carregando...</Text>
        </Animated.View>
      </View>
    );
  }
}

export default App;