import { User } from "./models/user";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users:User[]=[
    {
      id: 1,
      nome: 'Marco',
      cognome: 'Rossi',
      email: 'nn@gg.com',
      ruolo: 'user'
    },
    {
      id: 2,
      nome: 'Gino',
      cognome: 'Forte',
      email: 'nn@gg.com',
      ruolo:'admin'
    }
  ]

  constructor() { }


  getUser(idUser:number){
    return this.users.find((user)=>
      user.id === idUser)
  }

  getUsers(){
    return this.users;
  }
}
