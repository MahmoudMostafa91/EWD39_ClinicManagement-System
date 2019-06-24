import { Visit } from 'src/app/_interfaces/visit';
import { DoctorService } from '../Doctor.service';

export class VisitService {
    visits: Visit[];
    constructor() {
        this.visits = [
            {id: 1, date: '2019-01-01', time: '01:30 pm', clinic: {id: 1, name: 'ITI'},
             doctor: {id: 1, name: 'Hamada'}, specialization: 'Dentist 1', type: 'previous',
             patient: {patientId: 1, name: 'Soha', age: 70, bloodType: 'AB+', gender: 'Female', height: 176, weight: 75,
            telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'}},
            {id: 2, date: '2019-02-01', time: '02:30 pm', clinic: {id: 1, name: 'ITI'},
             doctor: {id: 2, name: 'Hamada 2'} , specialization: 'Dentist 2', type: 'current',
             patient: {patientId: 2, name: 'Salma', age: 70, bloodType: 'AB+', gender: 'Female', height: 176, weight: 75,
             telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'}},
            {id: 3, date: '2019-03-01', time: '03:30 pm', clinic: {id: 1, name: 'ITI'},
             doctor: {id: 3, name: 'Hamada 3'} , specialization: 'Dentist 3', type: 'current',
             patient: {patientId: 3, name: 'Osama', age: 70, bloodType: 'AB+', gender: 'Female', height: 176, weight: 75,
             telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'}},
            {id: 4, date: '2019-04-01', time: '04:30 pm', clinic: {id: 1, name: 'ITI'},
             doctor: {id: 1, name: 'Hamada 1'} , specialization: 'Dentist 4', type: 'previous',
             patient: {patientId: 4, name: 'Mohmoud', age: 70, bloodType: 'AB+', gender: 'Female', height: 176, weight: 75,
             telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'}},
        ];
    }
    getAll() {
        return this.visits.slice();
    }
    getById(id: number) {
        return this.visits.find(a => a.id === id);
     }
    add(medication: Visit): boolean {
        const oldlength = this.visits.length;
        medication.id = this.visits.length + 10;
        const newlength = this.visits.push(medication);
        if (oldlength !== newlength) {
            return true;
        }
        return false;
    }
}
