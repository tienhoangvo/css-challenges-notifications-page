import { nanoid } from 'nanoid'
import Notifications from '../components/Notifications/Notifications'
import notifications from '../data/notifications'

const NotificationsPage = () => {
 return (
  <div>
    <Notifications notifications={notifications}/>
  </div>
 )
}

export default NotificationsPage

