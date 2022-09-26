import Image from 'next/image'
import type Notification from "../../types/Notification"
import styles from './NotificationListItem.module.scss'

type NotificationListItemProps = {
  notification: Notification
}

const NotificationListItem = ({ notification }: NotificationListItemProps ) => {
  
  return (
    <li className={`${styles.notificationListItem} ${notification.read ? '' : styles.unread}`}>
      <div className={styles.avatar}>
        <Image src={notification.from.avatar} alt={notification.from.name} width={90} height={90}/>
      </div>
      <div className={styles.content}>
        <div >
          <p>
            <strong>{notification.from.name}</strong> {notification.type} 
            {notification.post && <strong className={styles.postTitle}> {notification.post.title}</strong>}
            {notification.group && <strong className={styles.groupName}> {notification.group.name}</strong>}
            {!notification.read && <span className={styles.unreadNotification}></span>}
          </p>
          <time>
            {notification.createdAt}
          </time>
        </div>
        
        {
          notification.message && <p className={styles.messageText}>{notification.message.text}</p>
        }
      </div>
      {
        notification.picture && <div className={styles.picture}><Image src={notification.picture.url} alt={notification.from.name} width={90} height={90} /></div>
      }
    </li>
  )
}

export default NotificationListItem