import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/UserCard.css'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { useLogoutMutation } from '../api/AuthApi'
import { useNavigate } from 'react-router-dom';

export default function UserCard({userData}){
    const [logout] = useLogoutMutation();
    const navigator = useNavigate();
    const username = localStorage.getItem('username')
    return (
        <div className='user-card'>
            <div className="user-banner"></div>
            <div className="user-info">
                <h3>{userData.username}</h3>
                {username==userData.username && <FontAwesomeIcon style={{cursor:'pointer'}} icon={faDoorOpen} size='2x' onClick={()=>{logout(); localStorage.clear();navigator('/form/login')}}></FontAwesomeIcon>}
            </div>
            <div className='user-pfp'></div>
        </div>
    )
}