import { Visit } from 'src/app/_interfaces/visit';

export class VisitService {
    visits: Visit[];
    constructor() {
        this.visits = [
            {id: 1, date: '2019-01-01', time: '01:30 pm', clininc: 'ITI 1',
             doctor: 'Hamada 1', specialization: 'Dentist 1', type: 'previous'},
            {id: 2, date: '2019-02-01', time: '02:30 pm', clininc: 'ITI 2',
             doctor: 'Hamada 2', specialization: 'Dentist 2', type: 'current'},
            {id: 3, date: '2019-03-01', time: '03:30 pm', clininc: 'ITI 3',
             doctor: 'Hamada 3', specialization: 'Dentist 3', type: 'current'},
            {id: 4, date: '2019-04-01', time: '04:30 pm', clininc: 'ITI 4',
             doctor: 'Hamada 4', specialization: 'Dentist 4', type: 'previous'},
        ];
    }
    getAll() {
        return this.visits.slice();
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
