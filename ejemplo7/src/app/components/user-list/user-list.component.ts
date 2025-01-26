import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.dataService.getUsers().subscribe(
      (data: any) => { this.users = data; },
      (error: any) => { console.error('Error al obtener usuarios:', error); }
    );
  }
}
