import { useState, useEffect } from 'react';

const SearchField = (props) => {

const [searchText, setSearchText] = useState('');
 
// Add a Set Interval and watch it explode
useEffect( () => {

  const intervalReference = setInterval( () => {
    console.log('ET phone home');
  }, 1000 );

  return () => {
    clearInterval(intervalReference);
  };

}, [] );

  return (
    <div className="SearchField">
      <input 
        value={searchText}
        onChange={ (event) => { setSearchText( (prev) => { return event.target.value; } ) } }
      />
    </div>
  );
};

export default SearchField;
