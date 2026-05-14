import { Injectable } from '@nestjs/common';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Injectable()
export class UsersService {
    private users = [
    { id: 1, name: 'Maria Linares'},
    { id: 2, name: 'Juan Rubio'},
    { id: 3, name: 'Marta Sánchez'},
    { id: 4, name: 'Isabel Hernández'},
    { id: 5, name: 'Lucas Rodríguez'},
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
