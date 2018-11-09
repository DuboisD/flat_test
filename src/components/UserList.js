import React from 'react'
import { FlatList, Text, View } from 'react-native'
import UserRow from './UserRow'

const _renderItem = ({ item }) => (
	<UserRow
		firstName={item.name.first}
		name={item.name.last}
		email={item.email}
	/>
)

const _renderSeparator = () => (
  <View style={{ height: 1, backgroundColor: 'grey', marginLeft: 80 }} />
)

const _renderHeader = () => (
  <View
    style={{ height: 30, backgroundColor: 'brown', justifyContent: 'center' }}
  >
    <Text>Header</Text>
  </View>
)
const _renderFooter = () => (
  <View
    style={{ height: 30, backgroundColor: 'brown', justifyContent: 'center' }}
  >
    <Text>Footer</Text>
  </View>
)

const _renderEmpty = () => (
  <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
    <Text>Aucun résultat</Text>
  </View>
);

export default (UserList = props => (
  <FlatList 
  data={props.data} 
  renderItem={_renderItem} 
  keyExtractor={item => item.email}
  ItemSeparatorComponent={_renderSeparator}
  ListHeaderComponent={_renderHeader}
  ListFooterComponent={_renderFooter}
  ListEmptyComponent={_renderEmpty}
  />
))
