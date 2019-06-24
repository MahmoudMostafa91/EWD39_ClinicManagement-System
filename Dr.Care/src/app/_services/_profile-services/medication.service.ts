import { Medication } from 'src/app/_interfaces/medication';

export class MedicationService {
    medications: Medication[];

    constructor() {
        this.medications = [
            {id: 1, name: 'MegaMox 1', noOfTimes: 1, unitOfTime: 'week', doctor: 'Hamada 1',
             clinic: 'ITI 1', from: '2019-01-01', period: 7,
             notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.' },
            {id: 2, name: 'MegaMox 2', noOfTimes: 2, unitOfTime: 'day', doctor: 'Hamada 2',
            clinic: 'ITI 2', from: '2019-02-01',
            notes: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.' },
            {id: 3, name: 'MegaMox 3', noOfTimes: 3, unitOfTime: 'day', doctor: 'Hamada 3',
            clinic: 'ITI 3', from: '2019-03-01', period: 14,
            notes: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.' },
            {id: 4, name: 'MegaMox 4', noOfTimes: 4, unitOfTime: 'day', doctor: 'Hamada 4',
            clinic: 'ITI 4', from: '2019-04-01', period: 21,
            notes: '4-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste.' }
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
