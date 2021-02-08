import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';


const MotivationalQuote = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  if(props.props === true && isActive !== true){
    setIsActive(true)
  } 
  if(props.props === false && isActive !== false){
    setIsActive(false)
  }

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
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
        <div className="MotivationalQuote">
          <ul className="motivational-quotes">
            {<li key={itemCount} className="motivational-quote">
              <div className="motivational-quote-x-button-div handle">
                <p className="motivational-quote-title"><strong>Motivational Quote</strong></p>
                <button className="motivational-quote-x-button" onClick={() => {props.setClose(false); setItemCount(itemCount === itemCount.length - 1 ? 0 : itemCount + 1)}}><span className="motivational-quote-x-button-text">x</span></button>
              </div>
              <div className="motivational-quote-text">
                {console.log("items count", items)}
                {items[itemCount].text}
                <br />
                <p className="quote-author"><i>{items[itemCount].author ? "- "+items[itemCount].author : "- Unknown"}</i></p>
              </div>
            </li>}
          </ul>
        </div>
      </Draggable>
    )
  } else {
    return null;
  }
}

export default MotivationalQuote