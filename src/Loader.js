import React from 'react'
import LottieView from 'lottie-react-native'


const Loader = () => (
  <LottieView
    // eslint-disable-next-line global-require
    source={require('./loader.json')}
    loop
    autoPlay
    style={{
      alignSelf: 'center',
      height: 50
    }}
  />
)

export default Loader
