import React, { useRef } from 'react'
import {
  TouchableOpacity, StyleSheet, View, Text, Animated, StatusBar
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import Icon from 'react-native-vector-icons/AntDesign'


function Content({ title }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>
        Edit
        {' '}
        <Text style={styles.highlight}>App.js</Text>
        {' '}
        to change this
        screen and then come back to see your edits.
      </Text>
    </View>
  )
}

const IMAGE_HEIGHT = 200
const statusBarHeight = StatusBar.currentHeight

const App = () => {
  const tabsScroll = useRef(new Animated.Value(0)).current

  const tabsTop = tabsScroll.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [IMAGE_HEIGHT + statusBarHeight, statusBarHeight],
    extrapolate: 'clamp',
  })

  const text = tabsScroll.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [0, 35],
    extrapolate: 'clamp'
  })

  const opacity = tabsScroll.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: ['rgba(51, 51, 51, 0.6)', 'rgba(51, 51, 51, 0)'],
    extrapolate: 'clamp'
  })

  const imageOpacity = tabsScroll.interpolate({
    inputRange: [0, IMAGE_HEIGHT / 2, IMAGE_HEIGHT],
    outputRange: [1, .5, 0],
    extrapolate: 'clamp'
  })

  const left = tabsScroll.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [16, 0],
    extrapolate: 'clamp'
  })


  return (
    <>
      <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
      <Animated.ScrollView
        style={styles.scrollView}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: tabsScroll } } }],
          { useNativeDriver: false }
        )}>

        <Animated.Image
          source={require('./ice.png')}
          style={[styles.image, { opacity: imageOpacity }]} />

        <View style={styles.body}>
          <Content title='Step One' />
          <Content title='Step Two' />
          <Content title='Step Three' />
          <Content title='Step Four' />
          <Content title='Step Five' />
          <Content title='Step Six' />
          <Content title='Step Seven' />
        </View>
      </Animated.ScrollView>


      <Animated.View style={[styles.tabs, { transform: [{ translateY: tabsTop }] }]}>
        <Animated.View style={{
          height: 74,
          marginBottom: 8,
          justifyContent: 'center',
          transform: [{ translateX: text }]
        }}>
          <Text style={{ color: '#333333', fontSize: 16, fontWeight: '600' }}>Minuman</Text>
          <Text style={{ color: '#8C8D8C' }}>Aneka pilihan minuman buat kamu</Text>
        </Animated.View>

        <TouchableOpacity style={{
          backgroundColor: 'indigo',
          paddingVertical: 10,
          borderRadius: 7,
          alignItems: 'center'
        }}>
          <Text>INI BUTTON</Text>
        </TouchableOpacity>

        <View style={{
          height: 10,
          width: 360,
          marginLeft: -16,
          backgroundColor: 'cyan',
          marginTop: 10
        }} />
      </Animated.View>

      <Animated.View style={{
        padding: 10,
        height: 48,
        width: 48,
        position: 'absolute',
        left,
        top: statusBarHeight + 12,
        backgroundColor: opacity,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
      }}>
        <Icon name='arrowleft' size={25} style={{ color: 'red' }} />
      </Animated.View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    height: IMAGE_HEIGHT,
    width: '100%'
  },
  tabs: {
    paddingHorizontal: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 90,
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 20,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: '#fff'
  },
  activeTabText: { fontWeight: '700' },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 190
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: { fontWeight: '700' },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default App
