import { datas } from "../Api/Getdata"
import { userData } from "../Api/Post";

export let CheckAdmin=(admin)=>{
    let token=datas();
    if(token){
        userData(token).then((data)=>{if(data.users[0].email=='rajapandiyan444@gmail.com'){
            admin(true)
        }})
    }
}