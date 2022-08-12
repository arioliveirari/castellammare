
import React from "react";
import { useState } from "react";


const Dropdown = () => {
    const [items, setItems] = useState([])
    const [showItems, setShowItems] = useState(false)
    const [selectedItems, setSelectedItems] = useState(items && [0])
    const dropDown = () => {
        setShowItems(!showItems)
    }
    const selectItem = (item: any) => {
        setSelectedItems(items)
    }
    return (
        <div className="selectBoxContainer">
            <div className="selectBoxWrapper">
                <div className="selectBoxSelectedItem">
                    {selectedItems}
                </div>
                <div className="selectBoxArrow" onClick={dropDown}>
                    <span className={(showItems) ? "selectBoxArrowUp" : "selectBoxArrowDown"} ></span>
                </div>
                <div className={(showItems) ? "blockBoxItem" : "noneBoxItem"}>

                    {items.map(item => (
                        <div key={1}
                            onClick={() => selectItem(item)}
                            className={selectedItems === item ? "selected" : ""}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dropdown