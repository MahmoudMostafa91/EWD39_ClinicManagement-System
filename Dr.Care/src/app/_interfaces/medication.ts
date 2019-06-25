
import { clinicdata } from '../_models/clinicdata';
import { DoctorData } from '../_models/DoctorData';
import { User } from './personal-info';

export interface Medication {
    id?: number;
    patientId?: number;
    patient?: User;
    vid?: number;
    name?: string;
    noOfTimes?: number;
    unitOfTime?: string;
    doctor?: DoctorData;
    clinic?: clinicdata;
    from?: string;
    period?: number;
    notes?: string;
}
