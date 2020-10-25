import styled from 'styled-components';
import { TextProps } from './text.interface';
import { colors } from '../../assets/colors'

export default function style(Text: React.SFC<TextProps>) {
    const styledText = styled(Text) <TextProps>`
    font-size: ${({ fontSize }) => fontSize || ''};
    text-transform: none;
    width: ${({ width }) => width};
    line-height: ${({ lineHeight }) => lineHeight};
    letter-spacing: 0;
    text-align: ${({ textAlign }) => textAlign};
    display: ${({ display }) => display};
    margin: ${({ margin }) => margin};
    margin-top: ${({ marginTop }) => marginTop};
    margin-left: ${({ marginLeft }) => marginLeft};
    padding: ${({ padding }) => padding};
    font-family: ${({ fontFamily }) => fontFamily || 'cebebri sans'};
    font-weight: ${(prop) => prop.fontWeight};
    color: ${({ color }) => color || colors.lightblack };
    background-color: ${({ bgColor }) => bgColor || '' };
  `;
    return styledText;
}
