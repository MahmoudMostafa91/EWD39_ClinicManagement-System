import { VitalTypes } from 'src/app/_interfaces/vitalTypes';

export class VitalTypesService {
    vitalTypes: VitalTypes[];
    constructor() {
        this.vitalTypes = [
            { id: 1, name: 'Blood Pressure' },
            { id: 2, name: 'Blood Sugar' },
            { id: 3, name: 'Heart Rate' },
            { id: 4, name: 'Height' },
            { id: 5, name: 'Weight' },
        ];
    }

    getAll() {
        return this.vitalTypes.slice();
    }
}
