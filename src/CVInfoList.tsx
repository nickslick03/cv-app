import { useState } from 'react';
import plusSVG from '../node_modules/@mdi/svg/svg/plus-circle.svg';
import xSVG from '../node_modules/@mdi/svg/svg/close.svg';
import { CVInput, CVInputList } from './CVInput';
import './CVInfoList.css';

interface CVInfoListProps {
    type: 'work' | 'education';
};

interface CVInfoProps extends CVInfoListProps {
    remove: Function,
};

const today = new Date().toISOString().substring(0, 10);

const CVInfo = ({ type, remove }: CVInfoProps) => {

    const [ title, setTitle ] = useState('');
    const [ institution, setInstitution ] = useState('');
    const [ location, setLocation ] = useState('');

    const [ infoList, setInfoList ] = useState(['']); 

    return (
        <div className="CVInfo">
            
            <div className="dateContainer">
                <input type="date" defaultValue={today}/>
                <div>——</div>
                <input type="date" defaultValue={today}/>
            </div>
            <div className="main">
                <img src={xSVG} alt="delete" className="topRight websiteOnly" onClick={() => remove()}/>
                <div>
                    <CVInput fontSize={1.4} placeholder={`Enter ${type === 'work' ? 'job title' : 'certification'}...`} value={title} setValue={setTitle} />
                    <CVInput fontSize={1.2} placeholder={`Enter ${type === 'work' ? 'company' : 'school'}...`} value={institution} setValue={setInstitution} />
                    <CVInput fontSize={1.1} placeholder='Enter Location...' value={location} setValue={setLocation} />
                </div>
                <div className="list">
                    <CVInputList fontSize={1} placeholder='Enter Something...' valueList={infoList} setValueList={setInfoList}/>
                    <div className='add websiteOnly' onClick={() => setInfoList(infoList.concat(''))} >
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

const CVInfoList = ({ type }: CVInfoListProps) => {
    
    const [ infoList, setInfoList ] = useState([0]);
    
    return (
        <div className="CVInfoList">
            {infoList.map((_, index) => 
                   <CVInfo 
                type={type}
                key={'' + index}
                remove={() => setInfoList(infoList.filter(loopNum => index !== loopNum))}/> 
            )}
            <div className='websiteOnly add' onClick={() => setInfoList(infoList.concat(infoList.length))}>
                <img src={plusSVG} alt="plus" /> 
                <span>
                    Add {type} Listing
                </span> 
            </div>
        </div>
    );
};

export default CVInfoList;