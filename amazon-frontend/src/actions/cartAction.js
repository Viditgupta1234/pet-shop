import axios from "../Axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from "../constants/CartConstant";

export const addToCart = (productID,qty) => async(dispatch, getState) =>{
    const {data} = await axios.get(`/api/products/${productID}`);
    const {
        cart : {cartItems},
    } = getState();

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            product: data.id,
            qty,
        }
    })


    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
};


export const removeFromCart = (productID) => (dispatch,getState) =>{
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productID
    });
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));

}


export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    });

    localStorage.setItem('shippingAddress', JSON.stringify(data));
}