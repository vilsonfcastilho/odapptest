import { Router } from 'express';

import PatientsRepository from '../repositories/PatientsRepository';

const patientsRouter = Router();
const patientsRepository = new PatientsRepository();

patientsRouter.get('/', (req, res) => {
  const patients = patientsRepository.list();

  return res.json(patients);
});

patientsRouter.post('/', (req, res) => {
  const { name, age, city, state } = req.body;

  const patient = patientsRepository.create({
    name,
    age,
    city,
    state,
  });

  return res.json(patient);
});

export default patientsRouter;
