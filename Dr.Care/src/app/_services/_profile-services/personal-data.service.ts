import { User } from 'src/app/_interfaces/personal-info';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonalDataService {
    User: User[];
    constructor() {
        this.User = [
            {
                Id: 1, name: 'Soha', age: 70, bloodType: 'AB+', gender: 'Female',
                telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'
            },
            {
                Id: 2, name: 'Salma', age: 70, bloodType: 'AB+', gender: 'Female',
                telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'
            },
            {
                Id: 3, name: 'Osama', age: 70, bloodType: 'AB+', gender: 'Female',
                telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'
            },
            {
                Id: 4, name: 'Mohmoud', age: 70, bloodType: 'AB+', gender: 'Female',
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

}

