import { useState } from 'react';
import ColorInput from './ColorInput';
import Portrait from './Portrait';
import { CVInput, CVTextArea } from './CVInput';
import './CV.css';
import emptyProfile from './empty-profile.png';
import pointSVG from '../node_modules/@mdi/svg/svg/map-marker.svg';
import phoneSVG from '../node_modules/@mdi/svg/svg/cellphone.svg';
import mailSVG from '../node_modules/@mdi/svg/svg/email.svg';
import CVInfoList from './CVInfoList';

function CV() {
    
    const [ backgroundColor, setBackgroundColor ] = useState('#87cefa');
    const [ headerColor, setHeaderColor ] = useState('#000000');
    const [ textColor, setTextColor ] = useState('#000000');
    const [ secondaryColor, setSecondaryColor ] = useState('#e6e6fa');

    const [ portraitSource, setPortraitSource ] = useState(emptyProfile);
    const [ address, setAddress ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ emailAddress, setEmailAddress ] = useState('');

    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    return (
        <>  
            <div className='colorContainer'>
                <ColorInput name='background' color={backgroundColor} setColor={setBackgroundColor} />
                <ColorInput name='header' color={headerColor} setColor={setHeaderColor} />
                <ColorInput name='text' color={textColor} setColor={setTextColor} />
                <ColorInput name='secondary' color={secondaryColor} setColor={setSecondaryColor} />
            </div>
            <div className='CV'>
                <div style={{display: 'flex'}}>
                    <div className="contact info">
                        <Portrait portraitSource={portraitSource} setPortraitSource={setPortraitSource}/>
                        <CVInput fontSize={1.5} placeholder='Enter Address...' value={address} setValue={setAddress} SVGSource={pointSVG}  />
                        <CVInput fontSize={1.5} placeholder='Enter Phone Number...' value={phoneNumber} setValue={setPhoneNumber} SVGSource={phoneSVG} />
                        <CVInput fontSize={1.5} placeholder='Enter Email Address...' value={emailAddress} setValue={setEmailAddress} SVGSource={mailSVG} />
                    </div>
                    <div className="main info">
                        <CVInput isHeader={true} fontSize={3} placeholder='Enter Name...' value={name} setValue={setName} />
                        <label>
                            <div>Description</div>
                            <br />
                            <CVTextArea fontSize={1.5} placeholder='Enter Description...' value={description} setValue={setDescription} />
                        </label>
                    </div>
                </div>
                <div className="work info">
                    <h2>Work Experience</h2>
                    <CVInfoList type='work' />
                </div>
                <div className="education info">
                    <h2>Education</h2>
                    <CVInfoList type='education' />
                </div>
            </div>
            <style>
                {
                `:root {
                        --background-color: ${backgroundColor};
                        --header-color: ${headerColor};
                        --text-color: ${textColor};
                        --secondary-color: ${secondaryColor};
                    }`
                }
            </style>
        </>
    );
}

export default CV;