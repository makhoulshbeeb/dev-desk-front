import { useNavigate } from "react-router-dom";
import "./styles/ListItem.css";
import { Link } from "react-router-dom";

export default function ListItem({ title, subText = null, time_ago, image = require(`./assets/icons/javascript.png`), imageBorderRadius = '0.2rem', bgColor = 'var(--background-light)' }) {
    const navigate = useNavigate()
    return (
        <div className="item-container" style={{ backgroundColor: bgColor }}>
            <div className="flex">
                <div className='img' style={{ backgroundImage: `url(${image})`, borderRadius: imageBorderRadius }} ></div>
                <div className="flex column">
                    <p className="title">
                        {title}
                    </p>
                        {subText &&
                        <p className="sub-text">
                        <Link to={`/user/${subText.substr(1)}`}>
                            
                                {subText}
                            
                        </Link>
                        </p>
                        }
                </div>
            </div>
            <div className="time-ago">{time_ago}</div>
        </div>
    )
}