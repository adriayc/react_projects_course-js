// FETCH DATA AND DECLARATION FILES
// Fetch data
import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

const tourSchema = z.object({
  id: z.string(),
  image: z.string(),
  info: z.string(),
  name: z.string(),
  price: z.string(),
  // something: z.number(),
});

// type Tour = {
//   id: string;
//   image: string;
//   info: string;
//   name: string;
//   price: string;
//   // something: boolean;
// };

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // const data: Tour[] = await response.json();
    // console.log(data);
    // return data;

    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    console.log(result);
    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
  // console.log(tour.something); // undefined
});

// Zod (Zod is a TypeScript-first schema declaration and validation library.)

// Declaration files
import { Random } from './types';
// import { z } from 'zod';
import bcyptjs from 'bcryptjs';

// document.
// bcyptjs.

let something = 'something';
