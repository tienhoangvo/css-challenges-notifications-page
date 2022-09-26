import type Notification from "../../types/Notification"
import NotificationListItem from "../NotificationListItem"
import styles from './Notifications.module.scss'
type NotificationProps = {
  notifications: Notification[]
}

const Notifications = ({
  notifications
}: NotificationProps) => {

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>Notifications</h1>
          <span>3</span>
        </div>

        <button className={styles.markAllAsReadBtn}>Mark all as read</button>
      </header>
      <ul className={styles.notificationList}>
        {
          notifications.map((notification) => {
            return (<NotificationListItem key={notification.id} notification={notification}/>)
          })
        }
      </ul>
    </article>
  )
}

export default Notifications