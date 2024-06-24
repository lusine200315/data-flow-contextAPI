import { useContext } from "react";
import { UserContext } from "./userContext";

export const ProductItem = ({id, title, price, imageUrl} ) => {
    const {dispatch} = useContext(UserContext);

    return (
    <div>
        <img src={imageUrl} alt="" />
        <p>{title}</p>
        <p><strong>{price} USD</strong></p>
        <button onClick={() => dispatch({type: 'Add', payload: id})}>Move</button>
    </div>
    )
}