import * as React from 'react';
import { Box } from '@material-ui/core';
import MUIButton from '@material-ui/core/Button';
import style from './button.style';
import { ButtonProps } from './Button.interface';


const Button: React.SFC<ButtonProps> = ({
    children,
    variant,
    className,
    params,
}) => {
    return (
        <MUIButton
         
            variant={variant}
            className={className}
            
            type="button"
            {...params}
          
        >
        
            {children}
        </MUIButton>
    );
};

export default style(Button);