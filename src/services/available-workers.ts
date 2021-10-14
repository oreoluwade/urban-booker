import axios from 'axios';

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

  // Get List iof workers, then map to get theri details

  return selectedSlotData ? selectedSlotData.availableWorker_ids : undefined;
}
