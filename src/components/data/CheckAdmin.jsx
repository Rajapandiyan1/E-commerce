import { datas } from "../Api/Getdata"
import { userData } from "../Api/Post";

export let CheckAdmin=(admin)=>{
    let token=datas();
    if(token){
        userData(token).then((data)=>{
            let dat=data.users[0];
            // console.log(dat)
            if(data.users.email=='rajapandiyan444@gmail.com'){
            admin(true);
        } return data})
    }
}