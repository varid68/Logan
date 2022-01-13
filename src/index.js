import React from 'react'
import {
  FlatList, View, Image, Text, StyleSheet
} from 'react-native'
import { useLoadMore } from './hooks'
import Loader from './Loader'


const Logan = () => {
  const { execute, list, isLoading } = useLoadMore('api')


  const renderItem = ({ item }) => (
    <View style={styles.itemWrapperStyle}>
      <Image style={styles.itemImageStyle} source={{ uri: item.picture.large }} />
      <View style={styles.contentWrapperStyle}>
        <Text style={styles.txtNameStyle}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
        <Text style={styles.txtEmailStyle}>{item.email}</Text>
      </View>
    </View>
  )

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: '#FFF',
        paddingHorizontal: 16
      }}
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.email}
      // eslint-disable-next-line react/no-unstable-nested-components
      ListFooterComponent={isLoading && <Loader />}
      onEndReached={execute}
      onEndReachedThreshold={0.1}
    />
  )
}

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 7,
    backgroundColor: '#EEE'
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: { justifyContent: 'space-around' },
  txtNameStyle: { fontSize: 16 },
  txtEmailStyle: { color: '#777' },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
})

export default Logan
