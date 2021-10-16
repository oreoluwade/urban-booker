import axios from 'axios';
import { Worker, WorkersServiceResponse } from '../types';

export default async function getWorkers(): Promise<Worker[]> {
  try {
    const response = await axios.get<WorkersServiceResponse>("https://storage.googleapis.com/urban-technical/workers.json");

    return response.data.workers
  } catch (error) {
    throw error;
  }

}
