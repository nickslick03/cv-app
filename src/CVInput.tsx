import './CVInput.css';
import deleteSVG from '../node_modules/@mdi/svg/svg/cancel.svg';

type CVInputProps = {
    fontSize: number,
    placeholder: string,
    value: number | string,
    setValue: Function,
    isHeader?: boolean,
    SVGSource?: string,
};

type CVInputListProps = Omit<CVInputProps, 'value' | 'setValue'> & {
    valueList: number[] | string[],
    setValueList: Function,
};

const CVInput = ({ fontSize, placeholder, value, setValue, isHeader, SVGSource }: CVInputProps) =>
    <div className="CVInput">
        {SVGSource ? <img src={SVGSource} alt="marker"/> : <></>}
        <input 
        type='text'
        maxLength={50}
        style={{
            color: isHeader ? 'var(--header-color)' : 'var(--text-color)',
            fontSize: fontSize + 'rem',
            fontWeight: isHeader ? 'bold' : 'light',
        }}
        placeholder={placeholder} 
        value={value} 
        onChange={({ target: { value } }) => setValue(value)}/>
    </div>;

const CVTextArea = ({ fontSize, placeholder, value, setValue, isHeader, SVGSource }: CVInputProps) =>
    <div className="CVInput">
        {SVGSource ? <img src={SVGSource} alt="marker"/> : <></>}
        <textarea 
        cols={30} 
        rows={9}
        maxLength={300}
        style={{
            color: isHeader ? 'var(--header-color)' : 'var(--text-color)',
            fontSize: fontSize + 'rem',
        }}
        placeholder={placeholder} 
        value={value} 
        onChange={({ target: { value } }) => setValue(value)}>
        </textarea>
    </div>;

const CVInputList = ({ fontSize, placeholder, valueList, setValueList }: CVInputListProps) => <>
        {valueList.map((value, index) => 
        <div key={index} style={{display: 'flex', alignItems: 'center'}}>
            •
            <CVInput
            fontSize={fontSize} 
            placeholder={placeholder} 
            value={value} 
            setValue={(newValue: string) => setValueList([...valueList.slice(0, index), newValue, ...valueList.slice(index + 1)])}/>
            <img 
            src={deleteSVG} 
            alt="delete" 
            onClick={() => setValueList([...valueList.slice(0, index), ...valueList.slice(index + 1)])} />
        </div>)}
    </>
    

export { 
    CVInput,
    CVInputList,
    CVTextArea,
};
