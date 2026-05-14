import { Injectable } from '@nestjs/common';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Injectable()
export class UsersService {
    private users = [
    { id: 1, name: 'John Doe'},
    { id: 2, name: 'Jane Doe'},
    { id: 3, name: 'Jim Doe'},
    { id: 4, name: 'Jack Doe'},
    { id: 5, name: 'Jill Doe'},
    ];

    getUsers() {
        return this.users;
    }

    createUsers(name: string) {
        const newUser = { id: Date.now(), name };
        this.users.push(newUser);
        return newUser;
    }
}
