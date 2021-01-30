import Preloader from '../../common/Preloader/Preloader';
import classes from './Profile.module.css';

const Content = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div><img className={classes.img} src="https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?size=626&ext=jpg&ga=GA1.2.1135173464.1609286400"></img></div>
            
            <div>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    )  
}

export default Content;