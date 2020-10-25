import styled from 'styled-components';
import { colors } from '../../assets/colors'
import { ButtonProps } from './Button.interface';

export default function style(Button: React.SFC<ButtonProps>) {
    const styledButton = styled(Button) <ButtonProps>`
    border-radius: ${({ borderRadius }) => borderRadius || '4px'};
    cursor: pointer;
    letter-spacing: 0;
    height: ${({ height }) => height || 'auto'};
    width: ${({ width }) => width || '10em'};
    font-size: ${({ fontSize }) => fontSize || '16px'};
    padding: ${({ padding }) => padding || '9px 14px'};
    margin: ${({ margin }) => margin};
    font-weight: ${({ fontWeight }) => fontWeight};
    background: ${({  bgColor }) =>
        bgColor || colors.blue};
    &:hover {
      background: ${({ bgColor }) =>
            bgColor || colors.blue};
    }
    color: ${({ color }) =>
            color || colors.lightblack};
    font-family: ${({ fontFamily }) => fontFamily};
    text-transform: none;
    display: ${({ display }) => display};
    &.transparent {
      background: none;
      &:hover {
        background: none;
      }
    }
  `;
    return styledButton;
}