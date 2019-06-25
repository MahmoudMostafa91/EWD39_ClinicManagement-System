import { Medication } from 'src/app/_interfaces/medication';

export class MedicationService {
    medications: Medication[];

    constructor() {
        this.medications = [
            {id: 1, name: 'MegaMox 1', noOfTimes: 1, unitOfTime: 'week', doctor: {id: 1, name: 'Hamada 1'},
             clinic: {id: 1, name: 'ITI 1'}, from: '2019-01-01', period: 7,
             notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.',
             patient: {Id: 1, name: 'Soha', age: 70, bloodType: 'AB+', gender: 'Female',
             telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'}},
            {id: 2, name: 'MegaMox 2', noOfTimes: 2, unitOfTime: 'day', doctor: {id: 2, name: 'Hamada 2'},
            clinic: {id: 2, name: 'ITI 2'}, from: '2019-02-01',
            notes: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.',
            patient: {Id: 2, name: 'salma', age: 70, bloodType: 'AB+', gender: 'Female',
            telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'} },
            {id: 3, name: 'MegaMox 3', noOfTimes: 3, unitOfTime: 'day', doctor: {id: 3, name: 'Hamada 3'},
            clinic: {id: 1, name: 'ITI 1'}, from: '2019-03-01', period: 14,
            notes: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.',
            patient: {Id: 3, name: 'Osama', age: 70, bloodType: 'AB+', gender: 'Female',
            telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'} },
            {id: 4, name: 'MegaMox 4', noOfTimes: 4, unitOfTime: 'day', doctor: {id: 2, name: 'Hamada 2'},
            clinic: {id: 2, name: 'ITI 2'}, from: '2019-04-01', period: 21,
            notes: '4-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.',
            patient: {Id: 4, name: 'Mahmoud', age: 70, bloodType: 'AB+', gender: 'Female',
            telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'} }
        ];
    }

    getAll() {
        return this.medications.slice();
    }

    getById(id: number) {
       return this.medications.find(a => a.id === id);
    }

    add(medication: Medication): boolean {
        const oldlength = this.medications.length;
        medication.id = this.medications.length + 10;
        const newlength = this.medications.push(medication);
        if (oldlength !== newlength) {
            return true;
        }
        return false;
    }

    save(medication: Medication): boolean {
        const index = this.medications.findIndex(a => a.id === medication.id);
        if (index >= 0) {
            this.medications[index] = medication;
            return true;
        }
        return false;
    }

    delete(id: number) {
        const index = this.medications.findIndex(a => a.id === id);
        if (index >= 0) {
            this.medications.splice(index , 1);
            return true;
        }
        return false;
    }
}
