import React from 'react';

import './custom-button.scss';

const CutomButton = ({children, isGoogleLogin, inverted, ...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleLogin ? 'google-login': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}


export default CutomButton;