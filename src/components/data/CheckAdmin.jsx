import { datas } from "../Api/Getdata"
import { userData } from "../Api/Post";

export  let CheckAdmin=async (admin)=>{
    let token=datas();
    if(token){
       await userData(token).then((data)=>{
            if(data.email=='rajapandiyan444@gmail.com'){
                console.log('admin')
            admin(true);
        }
         return data})
    }
}