import React, {useState} from 'react';

const useToggle = () => {
    const [state, setState] = useState(false);

    const handleClick = (value) => {
        setState((prev) => !prev)
    }

    return [ state, handleClick ]
}

export default useToggle