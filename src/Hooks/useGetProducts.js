import React, { useCallback, useEffect, useState } from 'react'
import { ApiMethods } from '../api'

const useGetProducts = () => {
    const [products, setProducts] = useState([])
    const [selectedCatProducts, setSelectedCatProducts] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [selectedCategoryList, setSelectedCategoryList] = useState([])
    const [loading, setLoading] = useState(false)
    const init = async () => {
        setLoading(true)
        const data = await ApiMethods.getAllProducts()
        const allCategoryList = data.map(product => product.category)
        const filteredCategories = [...new Set(allCategoryList)]
        if (data) {
            setProducts(data)
            setCategoryList(filteredCategories)
            setLoading(false)
        }
    }

    const handleCategoryHeader = (categoryName) => {
        if (selectedCategoryList.includes(categoryName)) {
            if (selectedCategoryList.length !== 1) {
                setSelectedCategoryList(selectedCategoryList.filter(category => category !== categoryName))
            }
        } else {
            setSelectedCategoryList([...selectedCategoryList, categoryName])
        }
    }

    useEffect(() => {
        console.log("🚀 ---> useEffect selectedCategoryList:", selectedCategoryList)
        const productList = [];
        for (const product of products) {
            if (selectedCategoryList.includes(product.category)) {
                productList.push(product);
            }
        }
        setSelectedCatProducts(productList);
    }, [selectedCategoryList, products])

    
    useEffect(() => {
        init()
    }, [])


    return {
        products,
        categoryList,
        loading,
        handleCategoryHeader,
        selectedCatProducts,
        selectedCategoryList
    }
}

export default useGetProducts
