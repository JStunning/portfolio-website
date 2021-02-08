import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const CatFact = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  if(props.props === true && isActive !== true){
    setIsActive(true)
  } 
  if(props.props === false && isActive !== false){
    setIsActive(false)
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("error")
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if(isActive === true){
    return (
      <Draggable handle=".handle" bounds={{top: 0, left: 0, right: 1000, bottom: 600}}>
        <div className="cat-fact-div">
          <ul className="cat-facts">
            {<li key={items[itemCount]._id} className="cat-fact">
              <div className="cat-fact-x-button-div handle">
                <p className="cat-fact-title"><strong>CatFact</strong></p>
                <button className="cat-fact-x-button" onClick={() => {props.setClose(false); setItemCount(itemCount === 4 ? 0 : itemCount + 1)}}><span className="cat-fact-x-button-text">x</span></button>
              </div>
              <div className="cat-fact-text">
                {items[itemCount].text}
              </div>
            </li>}
          </ul>
        </div>
      </Draggable>
    );
  } else {
    return null;
  }
}

export default CatFact