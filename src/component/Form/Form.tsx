import * as React from 'react';
import Radio from '../UI/RadioButton/RadioButton';

export default () => {

    const [urlstring, setUrl] = React.useState('cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');

    return (
        <form>
            <Radio 
                type='radio' 
                value="cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0" 
                label="1" 
                checked={urlstring === "cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"}
                onChange={() => setUrl("cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0")}/>
            <Radio 
                type='radio' 
                value="ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9" 
                label="2" 
                checked={urlstring === "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"}
                onChange={() => setUrl("ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9")}/>
        </form>
    );
}