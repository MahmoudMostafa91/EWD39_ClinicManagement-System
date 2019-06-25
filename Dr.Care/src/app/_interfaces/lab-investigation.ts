import { User } from './personal-info';

export interface LabInvesigation {
id?: number;
patientId?: number;
patient?: User;
name?: string;
labName?: string;
date?: string;
notes?: string;
type?: string;
}
