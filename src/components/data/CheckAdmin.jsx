import { datas } from "../Api/Getdata"
import { userData } from "../Api/Post";

export  let CheckAdmin=async (admin)=>{
    let token=datas();
    if(token){
       await userData(token).then((data)=>{
            if(data.users[0].email=='rajapandiyan444@gmail.com'){
            admin(true);
        }
         return data})
    }
}