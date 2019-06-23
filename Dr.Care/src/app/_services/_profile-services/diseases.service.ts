import { Diseases } from 'src/app/_interfaces/diseases';
import { deepStrictEqual } from 'assert';


export class DiseasesService {
    diseases: Diseases[];
    constructor() {
        this.diseases = [
            {id: 1, name: 'x-ray 1', infectionDate: '2019-01-01', recoveryDate: '', type: 'Chronic',
            hospitalization: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 2, name: 'test 1', infectionDate: '2019-0-01', recoveryDate: '', type: 'Current',
            hospitalization: '1-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 3, name: 'x-ray 2', infectionDate: '2019-02-01', recoveryDate: '2019-05-07', type: 'Previous',
            hospitalization: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 4, name: 'test 2', infectionDate: '2019-02-01' , recoveryDate: '', type: 'Chronic',
            hospitalization: '2-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 5, name: 'x-ray 3', infectionDate: '2019-03-01', recoveryDate: '', type: 'Current',
            hospitalization: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'},
            {id: 6, name: 'test 3', infectionDate: '2019-03-01', recoveryDate: '2019-05-07', type: 'Previous',
            hospitalization: '3-One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto'}
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
