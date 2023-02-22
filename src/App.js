import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faChevronRight,faPlus,faChevronLeft,faCircle,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [items,setItems]=useState([
    { itemName:"item  1", quantity : 1, isSelected:"true"},
   { itemName:"item  2", quantity : 3, isSelected:""},
    {itemName:"item  3", quantity : 1, isSelected:""},
  ]);
  const [inputValue,setInputValue] = useState("");
const [totalItemCount,setTotalItemCount] = useState(0);


const handleAddButtonClick = ()=>{
  const newItem = {
    itemName: inputValue,
    quantity:1,
    isSelected:false,
  }
const newItems =[...items,newItem];
setItems(newItems);
setInputValue("")
};


const handleQuantityIncrease = (index)=>{
 const newItems =[...items];
 newItems[index].quantity++;
 setItems(newItems);
 calculateTotal();
};

const handleQuantityDecrease = (index)=>{
  const newItems =[...items];
  newItems[index].quantity--;
  setItems(newItems);
 };


 const toggleComplete = (index) => {
  const newItems = [...items];
  newItems[index].isSelected = !newItems[index].isSelected
  setItems(newItems);
  calculateTotal();
 };

 const calculateTotal = ()=>{
 const totalItemCount= items.reduce((total, item)=>{
    return  total + item.quantity;
  },0);
  setTotalItemCount(totalItemCount);
 }
  return (
     <div className="app-background">
      <h1>Shopping List</h1>
        <div className="main-container">
           <div className="add-item-box">
                <input className="add-item-input" placeholder="Add items..."
                value={inputValue} onChange={(event)=>setInputValue(event.target.value)}></input>
                <FontAwesomeIcon icon={faPlus} onClick={()=>handleAddButtonClick()}/> 
            </div>
           <div className="item-list">
        {items.map((item,index)=>(
          <div className="item-container">
          <div className="item-name" onClick={()=>toggleComplete(index)}>
           {item.isSelected ? (
           <><FontAwesomeIcon icon={faCheckCircle}/>
          <span className="completed">{item.itemName}</span></>
          ):(
           <>
           <FontAwesomeIcon icon={faCircle}/>
           <span>{item.itemName}</span></>
         )}
     </div>
         <div className="quantity">
       <button>
       <FontAwesomeIcon icon={faChevronLeft} onClick={()=>handleQuantityDecrease(index)}/> 
       </button>
       <span>{item.quantity}</span>
       <button>
       <FontAwesomeIcon icon={faChevronRight} onClick={()=>handleQuantityIncrease(index)}/> 
       </button>
          </div>
   </div>))}
        
     </div>
     <div className="total">Total:{totalItemCount}</div>
  </div>
  </div>
  

  );
}

export default App;
