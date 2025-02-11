import { useState } from "react"


export function NewTodoForm({ onSubmit }) {
    
    const [newItem, setNewItem] = useState("")

    // Handle Submit Function
    function handleSubmit(e) {
      e.preventDefault()

      if (newItem === "") return
        
      onSubmit(newItem)
  
      setNewItem("")
    }
  
    // Returns New Item Form
    return (
    <form 
    onSubmit={handleSubmit} 
    className="new-item-form">
        <div className="form-row">
            <label htmlFor="item"><h1 className="header">Enter New Item</h1></label>
            <textarea value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
    </form>
  )
}
