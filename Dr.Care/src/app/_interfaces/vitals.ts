import { User } from './personal-info';
import { DoctorData } from '../_models/DoctorData';
import { clinicdata } from '../_models/clinicdata';

export interface Vital {
    id?: number;
    patientId?: number;
    patient?: User;
    type?: string;
    date?: string;
    doctor?: DoctorData;
    clinic?: clinicdata;
}
