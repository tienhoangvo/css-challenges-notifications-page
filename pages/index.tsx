import Notifications from "../components/Notifications"
import notifications from "../data/notifications"

const IndexPage = () => {

  return (
    <Notifications notifications={notifications}/>
  )
}

export default IndexPage