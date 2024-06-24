import { useState } from "react"
import { BasketItem } from "./BasketItem"

    export const Basket = ({ items }) => {

    return (
        <div>
            <h3>Basket</h3>
            {items.length ?
            <>
                <br />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>SubTotal</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map(item =>
                            <BasketItem
                                key={item.id}
                                {...item}
                            />)
                        }
                    </tbody>
                </table>
            </>
            : "You have no item"}
        </div>
    )
}