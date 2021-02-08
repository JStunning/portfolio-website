import Draggable from 'react-draggable';

const ContactInfo = () => {
  return (
    <Draggable handle=".handle">
      <div className="ContactInfo">
        <div className="contact-info-x-button-div handle">
          <p className="contact-info-title"><strong>Clock</strong></p>
          <button className="contact-info-x-button" onClick={() => {props.setClose(false)}}>x</button>
        </div>
        <p className="contact-info-text">Hello World</p>
      </div>
    </Draggable>
  )
}

export default ContactInfo