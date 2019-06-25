import { Vital } from 'src/app/_interfaces/vitals';

export class VitalService {
    vitals: Vital[];
    constructor() {
        this.vitals = [
            {
                id: 1, vid: 1, type: 'blood sugar', measurment: '5', date: '2019-02-01',
                patient: {
                    Id: 1, name: 'Soha', age: 70, bloodType: 'AB+', gender: 'Female',
                    telephone: '01001111002', occupation: 'Hacker', adress: 'ElMa3adi', imgURL: '../../../../assets/images/services/1.jpg'
                },
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
        const newlength = this.vitals.push(medication);
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
