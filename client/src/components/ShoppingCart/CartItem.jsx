import * as React from 'react';

 export default function CartItem  ({image, price, title, id, quantity}) {
return (
<div>
    <h4>{title}</h4>
    <img src={image} alt="imagen no encontrada" width="50px" height="50px" />
    <h5>{price}$ x {quantity}= {price*quantity}$</h5>
    <button>Eliminar</button>
</div>
)
 }
