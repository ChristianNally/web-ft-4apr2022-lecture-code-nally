import { useState, useEffect } from 'react';
import SearchField from './SearchField';
import axios from 'axios';

const Sandbox = (props) => {

const [count, setCount] = useState(0);
const [checked, setChecked] = useState(false);
const [ingredients,setIngredients] = useState([]);

// Add a Counter and update the page title (window.title = 'new value')

const increment = () => {
  setCount( (prev) => { return prev + 1;} );
};

// no dependency array ---> the callback will run on EVERY render
// empty dependency array ---> the callback will run ONCE after the original render
// value that is checked for changes in the dependency array
// ---> the callback will run WHENEVER the value(s) change
 
useEffect( () => {
  console.log('title is being updated 3');
  document.title = `Count: ${count}`;
}, [count]);


useEffect( () => {
  console.log('axios will be called');
  axios.get('https://my-json-server.typicode.com/andydlindsay/chef-andy/ingredients')
  .then( (response) => {
    console.log('response',response);
    setIngredients(response.data);
  })
  .catch((error)=>{
    console.log('error',error);
  });
}, [] );

  console.log('rendering!!');
  return (
    <div className="Sandbox">
      Hello, World!
      <h4>{ count }</h4>
      <button onClick={increment}>Increment</button>

      <input
        value={checked}
        type="checkbox"
        onChange={() => {setChecked(!checked)}}
      />
      { checked && <SearchField/> }
      <h4>Ingredients</h4>
      { <span>{ingredients.map((item)=>{return (<li>{item.name}</li>)})}</span> }
    </div>
  );
};

export default Sandbox;
