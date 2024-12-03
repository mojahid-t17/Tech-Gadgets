
const getCartsFromLocalStorage=()=>{
    const cartitems= localStorage.getItem('products');
   
    if(cartitems){
        return JSON.parse(cartitems)
    }
    else{
        return [];
    }
}
const getWishLIst=()=>{
       const wishlistItems=localStorage.getItem('wishList');
       if(wishlistItems){
        return JSON.parse(wishlistItems)
       }
       else{
        return [];
       }
}
const saveCartToLocalstorage=(id)=>{
    // console.log(id)
    const storedItem=getCartsFromLocalStorage();
    // console.log(storedItem)
    // storedItem.push(id);


    // localStorage.setItem('products',JSON.stringify(storedItem))


    // add only one time an item in cart:
    const filterdItem=storedItem.find(productId=>productId===id);
   
    if(!filterdItem){
        storedItem.push(id);
        localStorage.setItem('products',JSON.stringify(storedItem))
    }
}
const saveWishListToLs=(id)=>{
    const cartItem=getWishLIst();
    const filterCartdItem=cartItem.find(productId=>productId===id);
    console.log(cartItem)
    if(!filterCartdItem){
        const storedWishList=getWishLIst();
        const filterdItem=storedWishList.find(productId=>productId===id);
        if(!filterdItem){
            storedWishList.push(id);
            localStorage.setItem('wishList',JSON.stringify(storedWishList));
        }
    }
  
}
const removeCart=(id)=>{
    console.log(id)
    const cartItem= getCartsFromLocalStorage();
    console.log(cartItem)
     const filterItem= cartItem.filter(item=>item!==id);
    // console.log(filterItem)
    localStorage.setItem('products', JSON.stringify(filterItem))
    // console.log(cartItem)
}
// const removeCart=(id)=>{

//     const cartItem=getCartsFromLocalStorage();
   
//      const updatedCartItem=cartItem.filter(cart=>cart!==id);
//      localStorage.setItem('products',JSON.stringify(updatedCartItem))
//     console.log(updatedCartItem)
   
// }
export { getCartsFromLocalStorage, getWishLIst, removeCart, saveCartToLocalstorage, saveWishListToLs };

