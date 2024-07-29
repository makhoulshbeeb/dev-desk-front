import "./styles/ListItem.css";

export default function ListItem({ title, subText = null, time_ago, image=require(`./assets/icons/javascript.png`), imageBorderRadius='0.2rem', bgColor = 'var(--background-light)'}) {
    return (
        <div className="item-container" style={{backgroundColor: bgColor}}>
            <div className="flex">
                <div className='img' style={{ backgroundImage: `url(${image})` , borderRadius: imageBorderRadius }} ></div>
                <div className="flex column">
                    <p className="title">
                        {title}
                    </p>
                    {subText ?
                        <p className="sub-text">
                            {subText}
                        </p> : ''}
                </div>
            </div>
            <div className="time-ago">{time_ago} ago</div>
        </div>
    )
}