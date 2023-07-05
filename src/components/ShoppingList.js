import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchKey, setSearchKey] = useState("")
  const [itemsList, setItemsList] = useState(items)

  function onSearchChange(event) {
    setSearchKey(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsToDisplayName = itemsToDisplay.filter( (item) => {
    if (item.name.toLowerCase().includes(searchKey.toLowerCase())) {
      return true
    } else {
      return false
    }
  })

  function onItemFormSubmit(element) {
    setItemsList([...items, element])
    console.log(itemsList);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      searchKey={searchKey}
      onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplayName.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
