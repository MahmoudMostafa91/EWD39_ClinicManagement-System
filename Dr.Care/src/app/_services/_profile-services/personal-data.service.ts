import { User } from 'src/app/_interfaces/personal-info';

export class PersonalDataService {
    User: User;
    constructor() {
        this.User = {
            patientId: 1, name: 'Soha', age: 70, bloodType: 'AB+', gender: 'Female', height: 176, weight: 75, telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'
        }
    }


    // getById(id: number) {
    //     return this.User
    // }

    get() {
        return this.User;
    }

    save(Use: User) {
        this.User = Use;
    }

}

