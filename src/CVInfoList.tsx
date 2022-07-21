import { useState } from 'react';
import plusSVG from '../node_modules/@mdi/svg/svg/plus-circle.svg';
import xSVG from '../node_modules/@mdi/svg/svg/close.svg';
import { CVInput, CVInputList } from './CVInput';
import './CVInfoList.css';

interface CVInputProps {
    type: 'work' | 'education';
};

interface CVInputListProps extends CVInputProps {
    remove: Function,
};

const CVInfo = ({ type, remove }: CVInputListProps) => {

    const [ title, setTitle ] = useState('');
    const [ institution, setInstitution ] = useState('');
    const [ location, setLocation ] = useState('');

    const [ infoList, setInfoList ] = useState(['']); 

    return (
        <div className="CVInfo">
            <img src={xSVG} alt="delete" className="topRight" onClick={() => remove()}/>
            <div className="dateContainer">
                <input type="date" />
                <div>——</div>
                <input type="date" />
            </div>
            <div className="main">
                <div>
                    <CVInput fontSize={1.4} placeholder={`Enter ${type === 'work' ? 'job title' : 'certification'}...`} value={title} setValue={setTitle} />
                    <CVInput fontSize={1.2} placeholder={`Enter ${type === 'work' ? 'company' : 'school'}...`} value={institution} setValue={setInstitution} />
                    <CVInput fontSize={1.1} placeholder='Enter Location...' value={location} setValue={setLocation} />
                </div>
                <div className="list">
                    <CVInputList fontSize={1} placeholder='Enter Something...' valueList={infoList} setValueList={setInfoList}/>
                    <div className='add' onClick={() => setInfoList(infoList.concat(''))} >
                        <img src={plusSVG} alt="plus" /> 
                        <span>
                            Add Bullet Point
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CVInfoList = ({ type }: CVInputProps) => {
    
    const [ infoList, setInfoList ] = useState([0]);
    
    return (
        <div className="CVInfoList">
            {infoList.map(num => 
                <CVInfo 
                type={type} 
                key={num} 
                remove={() => setInfoList(infoList.filter(loopNum => num !== loopNum))}/>
            )}
            <div className='add' onClick={() => setInfoList(infoList.concat(infoList.length))}>
           <img src={plusSVG} alt="plus" /> 
            <span>
                Add {type} Listing
            </span> 
        </div>
        </div>
    );
};

export default CVInfoList;