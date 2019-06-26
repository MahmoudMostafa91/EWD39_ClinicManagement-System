import { Diseases } from 'src/app/_interfaces/diseases';
import { deepStrictEqual } from 'assert';
import { UserService } from '../user.service';
import { PersonalDataService } from './personal-data.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DiseasesService {
    diseases: Diseases[];
    constructor(public user: PersonalDataService) {
        this.diseases = [
            {id: 1, name: 'soha x-ray 1', infectionDate: '2019-01-01', recoveryDate: '', type: 'Chronic', patientId: 1,
            hospitalization: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(1)
        },
            {id: 2, name: 'soha test 1', infectionDate: '2019-0-01', recoveryDate: '', type: 'Current', patientId: 1,
            hospitalization: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(1)
        },
            {id: 3, name: 'x-ray 2', infectionDate: '2019-02-01', recoveryDate: '2019-05-07', type: 'Previous', patientId: 1,
            hospitalization: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(1)
        },
            {id: 4, name: 'test 2', infectionDate: '2019-02-01' , recoveryDate: '', type: 'Chronic', patientId: 1,
            hospitalization: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(1)
        },
            {id: 5, name: 'x-ray 3', infectionDate: '2019-03-01', recoveryDate: '', type: 'Current', patientId: 1,
            hospitalization: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(1)
        },
            {id: 6, name: 'test 3', infectionDate: '2019-03-01', recoveryDate: '2019-05-07', type: 'Previous', patientId: 2,
            hospitalization: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(2)
        },
            {id: 1, name: 'soha x-ray 1', infectionDate: '2019-01-01', recoveryDate: '', type: 'Chronic', patientId: 2,
            hospitalization: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(2)
        },
            {id: 2, name: 'soha test 1', infectionDate: '2019-0-01', recoveryDate: '', type: 'Current', patientId: 2,
            hospitalization: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(2)
        },
            {id: 3, name: 'x-ray 2', infectionDate: '2019-02-01', recoveryDate: '2019-05-07', type: 'Previous', patientId: 2,
            hospitalization: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(2)
        },
            {id: 4, name: 'test 2', infectionDate: '2019-02-01' , recoveryDate: '', type: 'Chronic', patientId: 2,
            hospitalization: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(2)
        },
            {id: 5, name: 'x-ray 3', infectionDate: '2019-03-01', recoveryDate: '', type: 'Current', patientId: 2,
            hospitalization: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(2)
        },
            {id: 6, name: 'test 3', infectionDate: '2019-03-01', recoveryDate: '2019-05-07', type: 'Previous', patientId: 3,
            hospitalization: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(3)
        },
            {id: 1, name: 'soha x-ray 1', infectionDate: '2019-01-01', recoveryDate: '', type: 'Chronic', patientId: 3,
            hospitalization: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(3)
        },
            {id: 2, name: 'soha test 1', infectionDate: '2019-0-01', recoveryDate: '', type: 'Current', patientId: 3,
            hospitalization: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(3)
        },
            {id: 3, name: 'x-ray 2', infectionDate: '2019-02-01', recoveryDate: '2019-05-07', type: 'Previous', patientId: 4,
            hospitalization: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(4)
        },
            {id: 4, name: 'test 2', infectionDate: '2019-02-01' , recoveryDate: '', type: 'Chronic', patientId: 3,
            hospitalization: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto',
            patient: this.user.getById(3)
        },
        ];
    }
    getAll() {
        return this.diseases.slice();
    }

    getById(id: number) {
       return this.diseases.find(a => a.id === id);
    }

    getByType(type: string) {
        return this.diseases.filter(ds => {
            return ds.type === type;
        });
    }
    getByUser(userid: number) {
        return this.diseases.filter(ds => {
            return ds.patientId === userid;
        });
    }
    add(disease: Diseases): boolean {
        const oldlength = this.diseases.length;
        disease.id = this.diseases.length + 10;
        const newlength = this.diseases.push(disease);
        if (oldlength !== newlength) {
            return true;
        }
        return false;
    }

    save(disease: Diseases): boolean {
        const index = this.diseases.findIndex(a => a.id === disease.id);
        if (index >= 0) {
            this.diseases[index] = disease;
            return true;
        }
        return false;
    }

    delete(id: number) {
        const index = this.diseases.findIndex(a => a.id === id);
        if (index >= 0) {
            this.diseases.splice(index , 1);
            return true;
        }
        return false;
    }
}
