import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"></img>
        </header>
    )
}
 
export default Header;
