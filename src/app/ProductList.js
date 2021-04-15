import{nanoid} from 'nanoid'
import camera from './storeAssets/camera-510524__340.jpg'
import headphones from './storeAssets/headphones-5596990__340.jpg'
import keypad from './storeAssets/computer-component-2834138_960_720.jpg'
import appletab from './storeAssets/apple-888724__340.jpg'
import appleLaptop from './storeAssets/finance-5752805_960_720.jpg'
import kettle from './storeAssets/kettle-3288479__340.png'
import sofa from './storeAssets/living-room-1853203_960_720.webp'
import sneakers from './storeAssets/reebok-sneakers.jpg'
import table from './storeAssets/table.png'
import shelf from './storeAssets/shelf.jpg'
import faceMask from './storeAssets/nose-mask.jpg'
import bed from './storeAssets/bed-design.jpg'


const ProductList = [
    {name: 'canon camera', src: camera, price: 150, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'sony Headset', src: headphones, price: 75, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'samsung keypad', src: keypad, price: 34, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'apple tablets', src: appletab, price: 350, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'apple laptop', src: appleLaptop, price: 2000, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'electric kettle', src: kettle, price: 59, category:'electronics', id:nanoid(), quantity:1, added:false },
    {name: 'sofa', src: sofa, price: 1500, category:'furniture', id:nanoid(), quantity:1, added:false },
    {name: 'sneakers', src: sneakers, price: 75, category:'kids', id:nanoid(), quantity:1, added:false },
    {name: 'table', src: table, price: 400, category:'furniture', id:nanoid(), quantity:1, added:false },
    {name: 'shelf', src: shelf, price: 350, category:'furniture', id:nanoid(), quantity:1, added:false },
    {name: 'bed', src: bed, price: 200, category:'furniture', id:nanoid(), quantity:1, added:false },
    {name: 'face mask', src: faceMask, price: 15, category:'face Masks', id:nanoid(), quantity:1, added:false },
]
export default ProductList;