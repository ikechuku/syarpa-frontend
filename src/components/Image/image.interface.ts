import { ComponentProps } from '../Interface';

export interface ImageProps extends ComponentProps {
    alt?: string;
    src?: string;
    srcSet?: string;
}
