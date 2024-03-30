import React, {FC} from 'react';

interface ITextInput {
    title: string,
    value: string,
    setValue: (val: string) => void,
    multiline?: boolean
}

const TextInput: FC<ITextInput> = ({title, value, setValue, multiline = false}) => {
    return (
        <div className = "TextInput">
            <p>{title}</p>
            {!multiline
                ? <input type={"text"} value={value} onChange={e => setValue(e.target.value)}/>
                : <textarea value={value} onChange={e => setValue(e.target.value)}/>
            }
        </div>
    );
};

export default TextInput;