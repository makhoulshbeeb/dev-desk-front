import "./styles/ScriptListItem.css";

export default function ScriptListItem({script_name, username=null, time_ago, language='javascript'}){
    var bg=require(`./assets/icons/${language}.png`);
    return(
        <div className="item-container">
            <div className="flex">
            <div className='img' style={{backgroundImage: `url(${bg})`}} ></div>
            <div className="flex column">
                <div className="script-name">
                    {script_name}
                </div>
                {username?
                <div className="script-username">
                    @{username}
                </div>:''}
            </div>
            </div>
            <div className="time-ago">{time_ago} ago</div>
        </div>
    )
}