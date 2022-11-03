import { User } from '../../Core/model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Core/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  list: User[]
 

  constructor(private userService:UserService) { }
  ngOnInit():void{
  }
} 