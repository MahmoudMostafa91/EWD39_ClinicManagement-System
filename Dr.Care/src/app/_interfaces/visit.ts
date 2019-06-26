import { User } from './personal-info';
import { DoctorData } from '../_models/DoctorData';
import { clinicdata } from '../_models/clinicdata';
import { Vital } from './vitals';
import { Medication } from './medication';

export interface Visit {
    id?: number;
    patientId?: number;
    date?: string;
    time?: string;
    patient?: User;
    doctor?: DoctorData;
    clinic?: clinicdata;
    specialization?: string;
    complaints?: string;
    procedures?: string;
    diagnosis?: string;
    vitals?: Vital[];
    medications?: Medication[];
    type?: string;
}
