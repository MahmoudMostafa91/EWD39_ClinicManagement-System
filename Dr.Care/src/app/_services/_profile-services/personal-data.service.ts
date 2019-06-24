import { User } from 'src/app/_interfaces/personal-info';

export class PersonalDataService {
    User: User[];
    constructor() {
        this.User = [
            {patientId: 1, name: 'Soha', age: 70, bloodType: 'AB+', gender: 'Female', height: 176, weight: 75,
             telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'},
            {patientId: 2, name: 'Salma', age: 70, bloodType: 'AB+', gender: 'Female', height: 176, weight: 75,
             telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'},
             {patientId: 3, name: 'Osama', age: 70, bloodType: 'AB+', gender: 'Female', height: 176, weight: 75,
             telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'},
             {patientId: 4, name: 'Mohmoud', age: 70, bloodType: 'AB+', gender: 'Female', height: 176, weight: 75,
             telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'}
        ];
    }


    // getById(id: number) {
    //     return this.User
    // }

    get() {
        return this.getById(1);
    }

    getById(id: number) {
        return this.User.find(a => a.patientId === id);
     }

    save(use: User): boolean {
        const index = this.User.findIndex(a => a.patientId === use.patientId);
        if (index >= 0) {
            this.User[index] = use;
            return true;
        }
        return false;
    }

}

