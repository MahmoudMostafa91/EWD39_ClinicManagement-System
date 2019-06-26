import { Vital } from 'src/app/_interfaces/vitals';
import { Injectable } from '@angular/core';
import { PersonalDataService } from './personal-data.service';

@Injectable()
export class VitalService {
    vitals: Vital[];
    constructor(public patient: PersonalDataService) {
        this.vitals = [
            {
                id: 1, vid: 1, type: 'blood sugar', measurment: '150', date: '2019-02-01', pId: 1,
                patient: patient.getById(1)
            },
            {
                id: 2, vid: 3, type: 'blood pressure', measurment: '120/80', date: '2019-02-01', pId: 2,
                patient: patient.getById(2)
            },
            {
                id: 3, vid: 1, type: 'weight', measurment: '70', date: '2019-02-01', pId: 1,
                patient: patient.getById(1)
            },
            {
                id: 4, vid: 2, type: 'height', measurment: '170', date: '2019-02-01', pId: 3,
                patient: patient.getById(3)
            }
        ];
    }

    getAll() {
        return this.vitals.slice();
    }

    getById(id: number) {
        return this.vitals.find(a => a.id === id);
    }

    add(medication: Vital): boolean {
        const oldlength = this.vitals.length;
        medication.id = this.vitals.length + 10;
        this.vitals.push(medication)
        const newlength = this.vitals.length;
        if (oldlength !== newlength) {
            return true;
        }
        return false;
    }

    save(medication: Vital): boolean {
        const index = this.vitals.findIndex(a => a.id === medication.id);
        if (index >= 0) {
            this.vitals[index] = medication;
            return true;
        }
        return false;
    }

    delete(id: number) {
        const index = this.vitals.findIndex(a => a.id === id);
        if (index >= 0) {
            this.vitals.splice(index, 1);
            return true;
        }
        return false;
    }
}
