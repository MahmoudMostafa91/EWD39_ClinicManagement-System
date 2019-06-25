import { Visit } from 'src/app/_interfaces/visit';
import { DoctorService } from '../Doctor.service';
import { PersonalDataService } from './personal-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class VisitService {
    visits: Visit[];
    constructor(public vS: PersonalDataService) {
        this.visits = [
            {
                id: 1, date: '2019-01-01', time: '01:30 pm', clinic: { id: 1, name: 'ITI' }, patientId: 1,
                doctor: { id: 1, name: 'Hamada' }, specialization: 'Dentist 1', type: 'previous',
                patient: vS.getById(1)
            },
            {
                id: 2, date: '2019-02-01', time: '02:30 pm', clinic: { id: 1, name: 'ITI' }, patientId: 2,
                doctor: { id: 2, name: 'Hamada 2' }, specialization: 'Dentist 2', type: 'current',
                patient: vS.getById(2)
            },
            {
                id: 3, date: '2019-03-01', time: '03:30 pm', clinic: { id: 1, name: 'ITI' }, patientId: 3,
                doctor: { id: 3, name: 'Hamada 3' }, specialization: 'Dentist 3', type: 'current',
                patient: vS.getById(3)
            },
            {
                id: 4, date: '2019-04-01', time: '04:30 pm', clinic: { id: 1, name: 'ITI' }, patientId: 4,
                doctor: { id: 1, name: 'Hamada 1' }, specialization: 'Dentist 4', type: 'previous',
                patient: vS.getById(4)
            },
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
