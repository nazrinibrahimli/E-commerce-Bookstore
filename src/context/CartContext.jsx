import { useState, useContext,createContext } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({})

export function CartContext() {
    return useContext(ShoppingCartContext);

}

export function ShoppingCartProvider({children}){

    
const [cartItems,setCartItems] = useState([]);
const [isOpen,setIsOpen] = useState([]);






const cartQuantity = cartItems.reduce((quantity, item) => item.quantity+quantity,0)

const openCart = () => setIsOpen(true)
const closeCart =() => setIsOpen(false)


function getItemQuantity(id) {
    return cartItems.find(item=> item.id===id)?.quantity || 0 

}

function increaseItemQuantity(id) {
    setCartItems(currItems => {
        if(currItems.find(item=> item.id===id)==null){
            return [...currItems,{id,quantity:1}]
        }
        else {
            return currItems.map(item => {
                if(item.id === id) {
                    return {...item, quantity: item.quantity+1}
                }
                else{
                    return item
                }
            })
        }
       
    })
     
}


function decreaseItemQuantity(id) {
    setCartItems(currItems => {
        if(currItems.find(item=> item.id===id)?.quantity === 1){
            return currItems.filter(item => item.id!==id)
        }
        else {
            return currItems.map(item => {
                if(item.id === id) {
                    return {...item, quantity: item.quantity-1}
                }
                else{
                    return item
                }
            })
        }
       
    })
     
}


function removeFromCart(id){
    setCartItems(currItems => {
        return currItems.filter(item=> item.id!==id)

    })
}





     return <ShoppingCartContext.Provider value={{getItemQuantity,increaseItemQuantity, decreaseItemQuantity, removeFromCart, cartItems, cartQuantity, closeCart, openCart}}>
         {children}
         <ShoppingCart isOpen={isOpen} />

     </ShoppingCartContext.Provider>
}