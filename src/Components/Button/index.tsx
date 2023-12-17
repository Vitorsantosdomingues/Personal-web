import styles from './buttons.module.scss';

interface ButtonProps{
    ColorVariation: string;
}

export const Button: React.FC<ButtonProps> = ({ColorVariation}) => {

    return(
        <button className={`${styles['Button-Primary']} ButtorVariation-${ColorVariation}`}>

        </button>
    )
}