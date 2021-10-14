// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios';

type Data = {
  id: number,
  localisedTime: string,
  price: string
}[]

export default async function getSlots(): Promise<Data> {
  const response = await axios.get("https://storage.googleapis.com/urban-technical/slots.json");
  const jsonData = await response.data;

  return jsonData.slots
}
