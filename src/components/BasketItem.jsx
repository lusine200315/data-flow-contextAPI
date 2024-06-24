import { useContext } from "react";
import { UserContext } from "./userContext";

export const BasketItem = ({id, title, price, count, hide, onAddCount, onRemoveCount, onRemoveItem}) => {
    const {dispatch} = useContext(UserContext);

    return (
        <tr>
            <td>{title}</td>
            <td>{`${price}USD`}</td>
            <td>{count}</td>
            <td>{`${hide ? price*(count-1) : price * count} USD`}</td>
            <td style={{display: 'flex', gap: '10px'}}>
                <button onClick={() => dispatch({type: 'Add', payload: id})}>+</button>
                <button onClick={() => dispatch({type: 'Remove_Count', payload: id})}>-</button>
                <button onClick={() => dispatch({type: 'Delete', payload: id})}>x</button>
            </td>
        </tr>
    )
}