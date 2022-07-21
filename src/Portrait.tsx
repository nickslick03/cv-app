import './Portrait.css';

interface PortraitProps {
    portraitSource: string,
    setPortraitSource: Function,
}

const Portrait = ({ portraitSource, setPortraitSource }: PortraitProps) =>
    <div className='Portrait'>
        <img src={portraitSource} alt="portraitImage" />
        <label tabIndex={0}>
        upload portrait
        <input 
        type="file"
        className="portrait" 
        name="portrait"
        accept="image/*"
        onChange={({ target: { files } }) => {
                const reader = new FileReader();
                reader.readAsDataURL(files![0]);
                reader.onload = () => setPortraitSource(reader.result as string);
        }}/>
        </label>
    </div>;

export default Portrait;
