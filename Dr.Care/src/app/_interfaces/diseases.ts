import { User } from './personal-info';


export interface Diseases {
    id?: number;
    patientId?: number;
    patient?: User;
    name?: string;
    infectionDate?: string;
    recoveryDate?: string;
    hospitalization?: string;
    type?: string;
    }
