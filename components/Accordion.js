import { useState } from "react";
import { 
  accordion, 
  container, 
  answer, 
  toggleIcon 
} from '../styles/Accordion.module.css';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion = ({title, content}) =>  {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={accordion}>
      <div className={container}>
        <button
          style={{ backgroundColor: isShowing ? "transparent" : "#eee",
            color: isShowing ? 'white' : 'black'
          }}
          onClick={toggle}
          type="button"
        >
          <p>{title}</p>

          {
            isShowing ?
            <FontAwesomeIcon icon={faMinus} className={toggleIcon}/> :
            <FontAwesomeIcon icon={faPlus} className={toggleIcon}/>
          }
        </button>
        <div
          className={answer}
          style={{ display: isShowing ? "block" : "none"}}
          dangerouslySetInnerHTML={{
            __html: content
          }}
        > 
        </div>
      </div>
    </div>
    
  );
}


export default Accordion