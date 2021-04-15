import{nanoid} from 'nanoid'

const ProductList = [
    {name: 'canon camera', src: './storeAssets/camera-510524__340.jpg', price: 150, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'sony Headset', src: './storeAssets/headphones-5596990__340.jpg', price: 75, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'samsung keypad', src: './storeAssets/computer-component-2834138_960_720.jpg', price: 34, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'apple tablets', src: './storeAssets/apple-888724__340.jpg', price: 350, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'apple laptop', src: './storeAssets/finance-5752805_960_720.jpg', price: 2000, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'electric kettle', src: './storeAssets/kettle-3288479__340.png', price: 59, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'sofa', src: './storeAssets/living-room-1853203_960_720.webp', price: 1500, category:'furniture', id:nanoid(), quantity:1, added:false },
    {name: 'sneakers', src: 'https://pixabay.com/photos/headphones-sony-music-headset-5596990/', price: 75, category:'kids', id:nanoid(), quantity:1, added:false },
    {name: 'table', src: 'https://pixabay.com/photos/computer-component-computer-hardware-2834138/', price: 400, category:'furniture', id:nanoid(), quantity:1, added:false },
    {name: 'shelf', src: 'https://pixabay.com/photos/apple-ipad-product-tablet-888724/', price: 350, category:'furniture', id:nanoid(), quantity:1, added:false },
    {name: 'bed', src: 'https://pixabay.com/photos/apple-smartphone-desk-laptop-1282241/', price: 200, category:'furniture', id:nanoid(), quantity:1, added:false },
    {name: 'face mask', src: 'https://pixabay.com/photos/electric-kettle-plastic-white-413744/', price: 15, category:'face Masks', id:nanoid(), quantity:1, added:false },
]
export default ProductList;