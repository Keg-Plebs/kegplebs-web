
import { useState } from "react";
import { container, button, content, holder, toggleIcon } from '../styles/Accordion.module.css';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          style={{ backgroundColor: isShowing ? "transparent" : "#eee",
            color: isShowing ? 'white' : 'black'
          }}
          onClick={toggle}
          type="button"
        >
          <p>{props.title}</p>

          {
            isShowing ?
            <FontAwesomeIcon icon={faMinus} className={toggleIcon}/> :
            <FontAwesomeIcon icon={faPlus} className={toggleIcon}/>
          }
        </button>
        <div
          className={content}
          style={{ display: isShowing ? "block" : "none"}}
          dangerouslySetInnerHTML={{
            __html: props.content
          }}
        > 
        </div>
      </div>
    </div>
    
  );
}


export default Accordion