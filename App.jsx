import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useGetProducts from './src/Hooks/useGetProducts'

const App = () => {
  const { products, loading, categoryList, handleCategoryHeader, selectedCatProducts, selectedCategoryList } = useGetProducts()
  return (
    <View style={styles.container}>
      <Text style={styles.categoryStaticText}>Category App</Text>
      <Text style={styles.categoriesText}>Categories</Text>
      {loading ? (
        <ActivityIndicator size='small' />
      ) : (
        <View>
          <FlatList
            horizontal
            data={categoryList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const isSelected = selectedCategoryList?.includes(item)
              return (
                <TouchableOpacity
                  style={styles.categoryHeaderList(isSelected)}
                  onPress={() => handleCategoryHeader(item)}
                >
                  <Text style={styles.categoryText(isSelected)}>{item}</Text>
                </TouchableOpacity>
              );
            }}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={selectedCatProducts.length !== 0 ? selectedCatProducts : products}
            // keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.productItem}>
                <Text style={styles.productTitle}>{item?.title}</Text>
                <Text style={styles.productCategory}>{item?.category}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  categoryStaticText: {
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 10,
  },
  categoriesText: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: 'bold',
    alignSelf: "center"
  },
  categoryHeaderList: (selected) => ({
    padding: 10,
    marginRight: 10,
    backgroundColor: selected ? 'yellow' : '#f0f0f0',
    borderRadius: 5,
  }),
  categoryText: (selected) => ({
    fontSize: 20,
    color: selected ? 'red' : "black",
    fontStyle: selected ? "italic" : "normal"
  }),
  productItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productCategory: {
    fontSize: 14,
    color: '#888',
  },
})
