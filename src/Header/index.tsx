import styles from './header.module.scss';
import '../styles/index.scss';

export const Header = () => {
    return (
        <header className='header'>
                <div>
                    <img className={`${styles['logo']} outra classe`} src="src\assets\img\simbolo-branco.png" alt="Logo V com um S" />
                </div>
        </header>
    )
}