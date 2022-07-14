import { useState } from 'react';
import ColorInput from './ColorInput';
import './CV.css';

function CV() {
    
    const [ backgroundColor, setBackgroundColor ] = useState('#ffffff');
    const [ headerColor, setHeaderColor ] = useState('#000000');
    const [ textColor, setTextColor ] = useState('#000000');
    const [ secondaryColor, setSecondaryColor ] = useState('#add8e6');

    return (
        <>  
            <div className='colorContainer'>
                <ColorInput name='background' color={backgroundColor} setColor={setBackgroundColor}/>
                <ColorInput name='header' color={headerColor} setColor={setHeaderColor} />
                <ColorInput name='text' color={textColor} setColor={setTextColor} />
                <ColorInput name='secondary' color={secondaryColor} setColor={setSecondaryColor} />
            </div>
            <div className='CV' style={{ color: textColor, backgroundColor }}>
                <h2>hello</h2>
                hi
            </div>
            <style>
                {`h1, h2, h3, h4, h5, h6 { color: ${headerColor} }`}
            </style>
        </>
    );
}

export default CV;