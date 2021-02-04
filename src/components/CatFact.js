import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import Button from '@material-ui/core/Button';

const CatFact = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isActive, setIsActive] = useState(false);
  console.log("CatFact props", props)

  // useEffect(() => {
  //   setIsActive(props.props)
  // }, [props.props])

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

  console.log("isA",isActive)

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if(isActive === true){
    return (
      <Draggable>
        <div className="cat-fact-div">
          <ul className="cat-facts">
            {items.map(item => (
              <li key={item._id} className="cat-fact">
                {item.text}
                <Button onClick={() => {props.setClose(false)}}>X</Button>
              </li>
            ))}
          </ul>
        </div>
      </Draggable>
    );
  } else {
    return null;
  }
}

export default CatFact