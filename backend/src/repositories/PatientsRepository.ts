import Patient from '../models/Patient';

interface CreatePatientDTO {
  name: string;
  age: number;
  city: string;
  state: string;
}

class PatientsRepository {
  private patients: Patient[];

  constructor() {
    this.patients = [];
  }

  public list(): Patient[] {
    return this.patients;
  }

  public findByName(name: string): Patient | null {
    const findPatient = this.patients.find(patient => patient.name === name);

    return findPatient || null;
  }

  public create({ name, age, city, state }: CreatePatientDTO): Patient {
    const patient = new Patient({ name, age, city, state });

    this.patients.push(patient);

    return patient;
  }
}

export default PatientsRepository;
