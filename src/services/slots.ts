import axios from 'axios';
import { Slot, SlotServiceResponse } from '../types';

export default async function getSlots(): Promise<Slot[]> {
  try {
    const response = await axios.get<SlotServiceResponse>("https://storage.googleapis.com/urban-technical/slots.json");

    return response.data.slots
  } catch (error) {
    throw error
  }

}
