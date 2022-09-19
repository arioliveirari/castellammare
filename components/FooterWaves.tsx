import styles from '../styles/footerWaves.module.scss';
import { usc } from '../utils/helpers';

const FooterWaves = () => {
    return (
        <div className={usc(styles,["waveContainer"])}>
            <div className={usc(styles, ["wales"])}>
            </div>
        </div>
    )
}
export default FooterWaves 