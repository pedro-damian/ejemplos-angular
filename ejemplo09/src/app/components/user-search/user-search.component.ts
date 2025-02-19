import { Component, signal, importProvidersFrom } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, map, startWith } from 'rxjs';

@Component({
  selector: 'app-user-search',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css',
})
export class UserSearchComponent {
  users = [
    'Juan',
    'María',
    'Carlos',
    'Ana',
    'Pedro',
    'Laura',
    'Diego',
    'Sofía',
    'Javier',
    'Isabela',
  ];

  searchcontrol = new FormControl('');
  filteredUsers = signal<string[]>(this.users);

  constructor() {
    this.searchcontrol.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map((value) => this.filterUsers(value))
      )
      .subscribe((filtered) => this.filteredUsers.set(filtered));
  }

  private filterUsers(query: string | null): string[] {
    if(!query) return this.users;
    return this.users.filter(user => user.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  }
}
