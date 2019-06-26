import { User } from './personal-info';


export interface FamilyHistory {
    id?: number;
    patientId?: number;
    patient?: User;
    relative?: string;
    diseaseName?: string;
    status?: boolean;
    notes?: string;
    }
