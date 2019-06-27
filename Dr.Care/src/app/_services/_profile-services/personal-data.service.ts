import { User } from 'src/app/_interfaces/personal-info';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonalDataService {
    User: User[];
    constructor() {
        this.User = [
            {
                Id: 3, name: 'Soha Ahmed', age: 70, bloodType: 'AB+', gender: 'Female',
                telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'
            },
            {
                Id: 4, name: 'Salma Hossam'
            },

            {
                Id: 5, name: 'Osama Korashy'
            },

            {
                Id: 2, name: 'Ahmed Mostafa', age: 70, bloodType: 'AB+', gender: 'Male',
                telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'
            },
            {
                Id: 1, name: 'Mohmoud Mostafa', age: 70, bloodType: 'AB+', gender: 'Male',
                telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'
            }
        ];
    }


    // getById(id: number) {
    //     return this.User
    // }

    get() {
        return this.getById(1);
    }

    getById(id: number) {
        return this.User.find(a => a.Id === id);
    }

    save(use: User): boolean {
        const index = this.User.findIndex(a => a.Id === Number(use.Id));
        if (index >= 0) {
            this.User[index] = use;
            return true;
        }
        return false;
    }
    add(user: User): boolean {
        const oldlength = this.User.length;
        user.Id = this.User.length + 9;
        const newlength = this.User.push(user);
        if (oldlength !== newlength) {
            return true;
        }
        return false;
    }

}

