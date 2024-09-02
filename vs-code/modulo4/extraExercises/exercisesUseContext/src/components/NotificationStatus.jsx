import { useContext } from "react";
import NotificationSettingsContext from "../context/NotificationSettingsContext";

const NotificationStatus = () => {
    const {notificationIsActive} = useContext(NotificationSettingsContext)

    return(
        <div>
            <h4>
                Your status about notificatios is Active : {notificationIsActive ? 'True' : 'False'}
            </h4>
        </div>
    )
}

export default NotificationStatus