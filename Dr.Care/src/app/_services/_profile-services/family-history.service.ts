import { PersonalDataService } from './personal-data.service';
import { Injectable } from '@angular/core';
import { FamilyHistory } from 'src/app/_interfaces/family-history';

@Injectable()
export class FamilyHistoryService {
    familyHistories: FamilyHistory[];
    constructor(public user: PersonalDataService) {
        this.familyHistories = [
            {id: 1, diseaseName: 'cancer', patientId: 1, relative: 'uncle', status: true,
            notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(1)
            },
            {id: 2, diseaseName: 'sugar', patientId: 1, relative: 'aunt', status: true,
            notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(1)
            },
            {id: 3, diseaseName: 'sugar', patientId: 1, relative: 'uncle', status: true,
            notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(1)
            },
            {id: 4, diseaseName: 'soha x-ray 1', patientId: 2, relative: 'uncle', status: true,
            notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(2)
            },
            {id: 5, diseaseName: 'cancer', patientId: 2, relative: 'uncle', status: true,
            notes: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(2)
            },
        ];
    }
    getAll() {
        return this.familyHistories.slice();
    }

    getById(id: number) {
       return this.familyHistories.find(a => a.id === id);
    }

    getByUser(id: number) {
        return this.familyHistories.filter(ds => {
            return ds.patientId === id;
        });
    }
    add(disease: FamilyHistory): boolean {
        const oldlength = this.familyHistories.length;
        disease.id = this.familyHistories.length + 1;
        const newlength = this.familyHistories.push(disease);
        if (oldlength !== newlength) {
            return true;
        }
        return false;
    }

    save(disease: FamilyHistory): boolean {
        const index = this.familyHistories.findIndex(a => a.id === disease.id);
        if (index >= 0) {
            this.familyHistories[index] = disease;
            return true;
        }
        return false;
    }

    delete(id: number) {
        const index = this.familyHistories.findIndex(a => a.id === id);
        if (index >= 0) {
            this.familyHistories.splice(index , 1);
            return true;
        }
        return false;
    }
}
