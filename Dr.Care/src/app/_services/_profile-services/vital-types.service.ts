import { VitalTypes } from 'src/app/_interfaces/vitalTypes';

export class VitalTypesService {
    vitalTypes: VitalTypes[];
    constructor() {
        this.vitalTypes = [
            { id: 1, name: 'Blood Pressure'},
            { id: 1, name: 'Blood Sugar'},
            { id: 1, name: 'Heart Rate'},
            { id: 1, name: 'Height'},
            { id: 1, name: 'Weight'},
        ];
    }

    getAll() {
        return this.vitalTypes.slice();
    }
}
