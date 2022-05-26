// 1
import React, {useEffect, useState} from 'react';

// 2
const Card = function(props){

  const [likes,setLikes] = useState(0);
  const [dislikes,setDislikes] = useState(0);

  const handleClick = () => {
    setLikes(prev => prev + 1);
  };

  useEffect(() => {
    document.title = `Likes: ${likes}`;
    return () => {};
  });

  // 4
  return (
    <div>
      <h1>{props.name}</h1>
      <img
        src={props.img}
      />
      <div>Likes: {likes}</div>
      <button onClick={handleClick}>Like</button>
    </div>
  );
}

// 3
export default Card;
