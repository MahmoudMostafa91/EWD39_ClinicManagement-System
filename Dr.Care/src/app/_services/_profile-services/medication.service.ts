import { Medication } from 'src/app/_interfaces/medication';
import { PersonalDataService } from './personal-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MedicationService {
    medications: Medication[];

    constructor(public us: PersonalDataService) {
        this.medications = [
            {id: 1, name: 'MegaMox 1', noOfTimes: 1, unitOfTime: 'week', doctor: {id: 1, name: 'Hamada 1'},
             clinic: {id: 1, name: 'ITI 1'}, from: '2019-01-01', period: 7, patientId: 1,
             notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.',
             patient: this.us.getById(1)},
            {id: 2, name: 'MegaMox 2', noOfTimes: 2, unitOfTime: 'day', doctor: {id: 2, name: 'Hamada 2'},
            clinic: {id: 2, name: 'ITI 2'}, from: '2019-02-01', patientId: 1,
            notes: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.',
            patient: this.us.getById(1)},
            {id: 3, name: 'MegaMox 3', noOfTimes: 3, unitOfTime: 'day', doctor: {id: 3, name: 'Hamada 3'},
            clinic: {id: 1, name: 'ITI 1'}, from: '2019-03-01', period: 14, patientId: 2,
            notes: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.',
            patient: this.us.getById(2)},
            {id: 4, name: 'MegaMox 4', noOfTimes: 4, unitOfTime: 'day', doctor: {id: 2, name: 'Hamada 2'},
            clinic: {id: 2, name: 'ITI 2'}, from: '2019-04-01', period: 21, patientId: 3,
            notes: '4-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.',
            patient: this.us.getById(3)}
        ];
    }

    getAll() {
        return this.medications.slice();
    }

    getById(id: number) {
       return this.medications.find(a => a.id === id);
    }
    getByUser(id: number) {
        return this.medications.filter(a => a.patient.Id === id);
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
