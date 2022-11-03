import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Core/model/user';
import { UserService } from 'src/app/Core/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
public id:String;
public user:User;
constructor(private route :ActivatedRoute,private userService : UserService ){

}
  

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

  }

}
