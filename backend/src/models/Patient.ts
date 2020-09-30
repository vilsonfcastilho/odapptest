import { uuid } from 'uuidv4';
import { formatISO, parseISO } from 'date-fns';

const parsedDate = parseISO(formatISO(Date.now()));

class Patient {
  id: string;

  name: string;

  age: number;

  date: Date;

  city: string;

  state: string;

  constructor({ name, age, city, state }: Omit<Patient, 'id' | 'date'>) {
    this.id = uuid();
    this.name = name;
    this.age = age;
    this.date = parsedDate;
    this.city = city;
    this.state = state;
  }
}

export default Patient;
