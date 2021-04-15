import {createSlice} from '@reduxjs/toolkit'
import ProductList from './ProductList'


const initialState = {
    ProductList,
    Bag: [],
    Total: 0
}

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterByCategory: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.products.map(product => {
                if(product.category === action.payload){
                    return product
                }
            })
        },
        addToBag: (state, action) => {
            const selectedItem = state.ProductList.find(item => item.id === action.payload)
            const searchBagItem = state.Bag.find(item => item.id === action.payload)
            const increaseBagQuantity = () => ({Bag: searchBagItem.quantity++, Total:state.Total += selectedItem.price})
            const addingToBag = () => ({Bag: state.Bag.push(selectedItem), Total:state.Total += selectedItem.price})
            searchBagItem ? increaseBagQuantity() : addingToBag()

        },
        removeFromBag: (state, action) => ({
            ...state,
            Bag: state.Bag.filter((product) => product.id !== action.payload),
            Total: 0
        }),
        addQuantity: (state, action) => {
            const selecteditem = state.Bag.find(item => item.id === action.payload)
            selecteditem.quantity++ 
            state.Total += selecteditem.price
        },
        reduceQuantity: (state, action) => {
            const selectedItem = state.Bag.find(item => item.id === action.payload)
            const reduceItemQty = () => ({Bag: selectedItem.quantity--, Total: state.Total -= selectedItem.price })
            const removingItemQty = () => ({Bag: state.Bag.filter((item) => item.id !== action.payload), Total: state.Total })
            selectedItem.quantity === 0 ? 
            removingItemQty() : reduceItemQty() 
        }, 
        emptyBag: state => ({
            ...state,
            Bag : [],
            Total: 0
        })

    }
})
export default ProductSlice.reducer
export const {filterByCategory, addToBag, removeFromBag, addQuantity, reduceQuantity, emptyBag} = ProductSlice.actions