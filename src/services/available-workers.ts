import axios from 'axios';
import { Worker, AvailableWorker, AvailableWorkersServiceResponse } from '../types';
import getWorkers from './workers';

export default async function getAvailableWorkers(slot_id: number): Promise<Worker[] | undefined> {
  try {
    const response = await axios.get<AvailableWorkersServiceResponse>("https://storage.googleapis.com/urban-technical/available-workers.json");

    const selectedSlotData = response.data['available-workers'].find((worker: AvailableWorker) => worker.slot_id === slot_id);

    if(!selectedSlotData) {
      return;
    }
    const workerIds = selectedSlotData.availableWorker_ids;

    const allWorkers: Worker[] = await getWorkers();

    return allWorkers.filter(worker => workerIds.includes(worker.id))

  } catch (error) {
    throw error
  }

}
