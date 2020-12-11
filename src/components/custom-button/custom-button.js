import React from 'react';

import './custom-button.scss';

const CutomButton = ({children, isGoogleLogin, ...otherProps}) => {
    return (
        <button className={`${isGoogleLogin ? 'google-login': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}


export default CutomButton;