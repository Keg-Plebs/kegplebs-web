import { useState } from "react";
import { container, button, content, holder } from '../styles/Accordion.module.css';


const Accordion = props =>  {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={holder}>
      <div
        className={container}
      >
        <button
          className={button}
          style={{ backgroundColor: isShowing ? "#ccc" : "#eee"}}
          onClick={toggle}
          type="button"
        >
          <p>{props.title}</p>
        </button>
        <div
          className={content}
          style={{ display: isShowing ? "block" : "none"}}
          dangerouslySetInnerHTML={{
            __html: props.content
          }}
        />
      </div>
    </div>
    
  );
}


export default Accordion