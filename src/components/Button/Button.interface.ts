import { ComponentProps } from '../Interface';

export interface ButtonProps extends ComponentProps {
    fontWeight?: string;
    borderRadius?: string;
    variant?: 'text' | 'outlined' | 'contained';
}