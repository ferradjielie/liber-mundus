import Marquee from "react-fast-marquee";
import styles from './BorderStrip.module.css';

import france from '../../iconsFlag/france.png';
import uk from '../../iconsFlag/gb.png';
import russia from '../../iconsFlag/russia.png';
import spain from '../../iconsFlag/spain.png';
import usa from '../../iconsFlag/usa.png';
import germany from '../../iconsFlag/germany.png';
import japon from '../../iconsFlag/japon.png';





function BorderStrip() {

    return(
        <>
         
            <div  className={styles.flags}> 
            <img src={france} alt="flag of france"/>
            <img src={germany} alt="flag of france"/>
            <img src={uk} alt="flag of france"/>
            <img src={usa} alt="flag of france"/>
            <img src={russia} alt="flag of france"/>
            <img src={spain} alt="flag of france"/>
              <img src={japon} alt="flag of france"/>
            </div>

        



        </>
    )
    
}
export default BorderStrip