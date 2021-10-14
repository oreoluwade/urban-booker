import axios from 'axios';
import getWorkers from './workers';

type Data = {
  id: number,
  name: string,
  rating: string,
  isNew: boolean
}[]

export default async function getAvailableWorkers(slot_id: number): Promise<any> {
  const response = await axios.get("https://storage.googleapis.com/urban-technical/available-workers.json");
  const jsonData = await response.data;

  const selectedSlotData = jsonData['available-workers'].find(worker => worker.slot_id === slot_id);

  if(selectedSlotData) {
    const workerIds = selectedSlotData.availableWorker_ids;

    const allWorkers = await getWorkers();

    return allWorkers.filter(person => workerIds.includes(person.id))
  }

  return undefined
}
