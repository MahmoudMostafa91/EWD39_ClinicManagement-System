import { BloodTypes } from 'src/app/_interfaces/bloodType';

export class BloodTypesService {
    bloodTypes: BloodTypes[];
    constructor() {
        this.bloodTypes = [
            { id: 1, name: 'O+' },
            { id: 2, name: 'O-' },
            { id: 3, name: 'A+' },
            { id: 4, name: 'A-' },
            { id: 5, name: 'AB+' },
            { id: 6, name: 'AB-' },
        ];
    }

    getAll() {
        return this.bloodTypes.slice();
    }
}