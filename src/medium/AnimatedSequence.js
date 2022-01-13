import React from 'react'
import { View, Animated, StyleSheet } from 'react-native'

const arr = []
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 500; i++) {
  arr.push(i)
}

export default class AnimatedSequence extends React.Component {
  constructor(props) {
    super(props)
    this.animatedValue = []
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }


  componentDidMount() {
    this.animate()
  }


  animate() {
    const animations = arr.map((item) => Animated.timing(
      this.animatedValue[item],
      {
        toValue: 1,
        duration: 300
      }
    ))
    Animated.sequence(animations).start()
  }


  render() {
    const animations = arr.map((a, i) => <Animated.View
      key={i}
      style={{
        opacity: this.animatedValue[a],
        height: 20,
        width: 20,
        backgroundColor: 'red',
        marginLeft: 3,
        marginTop: 3
      }} />)

    return (
      <View style={styles.container}>
        {animations}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
