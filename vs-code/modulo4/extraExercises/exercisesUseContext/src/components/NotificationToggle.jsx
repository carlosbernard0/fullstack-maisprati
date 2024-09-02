import { useContext } from "react";
import NotificationSettingsContext from "../context/NotificationSettingsContext";

const NotificationToggle = () => {
    const {notificationIsActive, setNotificationIsActive} = useContext(NotificationSettingsContext)

    return(
        <div>
            <h2>Toggle Notification</h2>
            {notificationIsActive ? <button onClick={() => {setNotificationIsActive(false)}}>Disactive</button> : <button onClick={() => {setNotificationIsActive(true)}}>Active</button> }
        </div>
    )
}

export default NotificationToggle