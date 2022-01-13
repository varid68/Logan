import React from 'react'
import { StyleSheet, View, Animated, PanResponder } from 'react-native'

export default class AnimatedFlick extends React.Component {
  constructor(props) {
    super(props)

    this.state = { pan: new Animated.ValueXY() }
  }


  componentWillMount() {
    const { pan } = this.state

    this._animatedValueX = 0
    this._animatedValueY = 0
    pan.x.addListener((value) => this._animatedValueX = value.value)
    pan.y.addListener((value) => this._animatedValueY = value.value)

    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({ x: this._animatedValueX, y: this._animatedValueY })
        pan.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([
        null, { dx: pan.x, dy: pan.y },
      ]),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: 0 }).start()
      }
    })
  }

  componentWillUnmount() {
    const { pan } = this.state

    pan.x.removeAllListeners()
    pan.y.removeAllListeners()
  }


  getStyle() {
    const { pan } = this.state

    return [styles.square, {
      transform: [
        { translateX: pan.x },
        { translateY: pan.y },
        {
          rotate: pan.x.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: ['-30deg', '0deg', '30deg']
          })
        }
      ]
    },
    {
      opacity: pan.x.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: [0.5, 1, 0.5]
      })
    }
    ]
  }


  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={this.getStyle()}
          {...this._panResponder.panHandlers} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height: 600,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
})
