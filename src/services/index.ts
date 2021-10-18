import axios from 'axios';
import { Slot, SlotServiceResponse, Worker, WorkersServiceResponse, AvailableWorker, AvailableWorkersServiceResponse} from '../types';

async function getSlots(): Promise<Slot[]> {
  try {
    const response = await axios.get<SlotServiceResponse>("https://storage.googleapis.com/urban-technical/slots.json");

    return response.data.slots
  } catch (error) {
    throw error
  }
}

async function getWorkers(): Promise<Worker[]> {
  try {
    const response = await axios.get<WorkersServiceResponse>("https://storage.googleapis.com/urban-technical/workers.json");

    return response.data.workers
  } catch (error) {
    throw error;
  }
}

async function getAvailableWorkers(slot_id: number): Promise<Worker[] | undefined> {
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

export {
  getSlots,
  getWorkers,
  getAvailableWorkers
}
