import { LabInvesigation } from 'src/app/_interfaces/lab-investigation';
import { PersonalDataService } from './personal-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LabInvestigationService {
    labInvestigations: LabInvesigation[];
    constructor(public user: PersonalDataService) {
        this.labInvestigations = [
            {id: 1, name: 'x-ray 1', labName: 'lab 1', date: '2019-01-01', type: 'x-ray', patientId: 1,
            patient: this.user.getById(1),
            notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 2, name: 'test 1', labName: 'lab 1', date: '2019-0-01', type: 'test', patientId: 1,
            patient: this.user.getById(1),
            notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 3, name: 'x-ray 2', labName: 'lab 2', date: '2019-02-01', type: 'x-ray', patientId: 1,
            patient: this.user.getById(1),
            notes: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 4, name: 'test 2', labName: 'lab 2', date: '2019-02-01' , type: 'test', patientId: 1,
            patient: this.user.getById(1),
            notes: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 5, name: 'x-ray 3', labName: 'lab 3', date: '2019-03-01', type: 'x-ray', patientId: 1,
            patient: this.user.getById(1),
            notes: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 6, name: 'test 3', labName: 'lab 3', date: '2019-03-01', type: 'test', patientId: 1,
            patient: this.user.getById(1),
            notes: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 7, name: 'x-ray 4', labName: 'lab 4', date: '2019-04-01', type: 'x-ray', patientId: 1,
            patient: this.user.getById(1),
            notes: '4-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 8, name: 'test 4', labName: 'lab 4', date: '2019-04-01', type: 'test', patientId: 2,
            patient: this.user.getById(1),
            notes: '4-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 9, name: 'x-ray 2', labName: 'lab 2', date: '2019-02-01', type: 'x-ray', patientId: 2,
            patient: this.user.getById(2),
            notes: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 10, name: 'test 2', labName: 'lab 2', date: '2019-02-01' , type: 'test', patientId: 2,
            patient: this.user.getById(2),
            notes: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 11, name: 'x-ray 3', labName: 'lab 3', date: '2019-03-01', type: 'x-ray', patientId: 2,
            patient: this.user.getById(2),
            notes: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 12, name: 'test 3', labName: 'lab 3', date: '2019-03-01', type: 'test', patientId: 3,
            patient: this.user.getById(3),
            notes: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 13, name: 'x-ray 4', labName: 'lab 4', date: '2019-04-01', type: 'x-ray', patientId: 3,
            patient: this.user.getById(3),
            notes: '4-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 14, name: 'x-ray 4', labName: 'lab 4', date: '2019-04-01', type: 'x-ray', patientId: 3,
            patient: this.user.getById(3),
            notes: '4-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 15, name: 'test 4', labName: 'lab 4', date: '2019-04-01', type: 'test', patientId: 4,
            patient: this.user.getById(4),
            notes: '4-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 16, name: 'x-ray 2', labName: 'lab 2', date: '2019-02-01', type: 'x-ray', patientId: 4,
            patient: this.user.getById(4),
            notes: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
        ];
    }
    getAll() {
        return this.labInvestigations.slice();
    }

    getById(id: number) {
       return this.labInvestigations.find(a => a.id === id);
    }
    getByUser(id: number) {
        return this.labInvestigations.filter(a => {
            return a.patientId === id;
        });
     }

    add(medication: LabInvesigation): boolean {
        const oldlength = this.labInvestigations.length;
        medication.id = this.labInvestigations.length + 10;
        const newlength = this.labInvestigations.push(medication);
        if (oldlength !== newlength) {
            return true;
        }
        return false;
    }

    save(medication: LabInvesigation): boolean {
        const index = this.labInvestigations.findIndex(a => a.id === medication.id);
        if (index >= 0) {
            this.labInvestigations[index] = medication;
            return true;
        }
        return false;
    }

    delete(id: number) {
        const index = this.labInvestigations.findIndex(a => a.id === id);
        if (index >= 0) {
            this.labInvestigations.splice(index , 1);
            return true;
        }
        return false;
    }
}
