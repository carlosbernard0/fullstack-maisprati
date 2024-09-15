import { useParams } from "react-router-dom"

const userDetails = {
    1: { name: "Carlos", job: "Intership", yearsOld: "Twenty years"},
    2: { name: "Carla", job: "Student", yearsOld: "Thirteen years"}
}

export default function UserDetail(){
    const {userId} = useParams()

    const user = userDetails[userId]

    if(!user){
        return(
            <h2>Something went wrong</h2>
        )
    }

    return(
        <div>
            <label>{user.name}</label>
            <label>{user.job}</label>
            <label>{user.yearsOld}</label>
        </div>
    )

}
