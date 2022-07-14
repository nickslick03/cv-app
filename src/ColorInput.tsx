interface colorInputProps {
    name: string,
    color: string,
    setColor: Function,
}

const colorInput = ({name, color, setColor}: colorInputProps) => 
    <div>
        {name} color: 
        <input 
        type="color" 
        name={name}
        value={color}
        style={{marginLeft: '5px'}}
        onChange={({target: {value}}) => setColor(value)} />
    </div>

export default colorInput;