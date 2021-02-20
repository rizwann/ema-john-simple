import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart =props.cart;

    //const total = cart.reduce((total, prd)=> total+ prd.price,0)
   let total = 0;
   for(let i=0; i<cart.length; i++){
       const product =cart[i];
       total = total+ product.price * product.quantity;
       
   }
   let shipping = 0;
   if (total>50){
       shipping =0;
   }
   else if(total>30){
       shipping= 4.99;
   }
   else if(total>0){
       shipping= 12.99;
   }
   const tax = (total/10);

const grandTotal= total+shipping+tax; 
const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}

    return (
        <div>
            <h4 className="text-primary">Order Summary</h4>
            <p>Items Added: {cart.length}  </p>
            <p>Prodcut Price: {formatNumber(total)}</p>
            <p><small>Shipping cost: {formatNumber(shipping)}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
            <br/>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;