
import { signInWithGoogle, googleSignout } from "../../firebase";
import React from "react";
import Popup from 'reactjs-popup';
import SelectionInput from "../../components/SelectionInput";
import SettingsIcon from "./three_bar.svg";
import 'reactjs-popup/dist/index.css';
import './Settings.css';

/* TODO: Change this to account settings popup, including: login/logout, change username? */

function SettingsPopup() {

 return (
    <Popup className="my-popup"
        trigger={<button className='button-style'> <img src={SettingsIcon} alt="Settings"/></button>}
            modal>
            {
            close => (
                <React.Fragment>
                    <div className="settings-check-in-wrapper" style={{backgroundColor: 'transparent'}}>
                        <div className="settings-wrapper">
                        <span className="settings-check-in-title">DONE EATING?</span>
                        <div className="settings-submit" onClick={googleSignout}>
                            <span>SIGN OUT</span>
                        </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    </Popup>
  );
}

export default SettingsPopup;
