import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newName, setNewName] = useState("");
  const [newCate, setNewCate] = useState("Produce");

  const newItem = {
    id: uuid(),
    name: newName,
    category: newCate,
  }

  return (
    <form className="NewItem" onSubmit={e => {
      e.preventDefault();
      setNewName("");
      setNewCate("Produce");
      onItemFormSubmit(newItem);
      }}>
      <label>
        Name:
        <input type="text" name="name" value={newName} onChange={(e)=> setNewName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={newCate} onChange={(e)=> setNewCate(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
