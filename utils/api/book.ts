import { books } from "@/interface/books"; // Pastikan file ini mendefinisikan tipe 'books'
import { faker } from '@faker-js/faker';
import { getRandomElement } from "../array";

class ApiBooks {
  getBooks(): books[] {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i + 1,
      name: faker.person.fullName(), // Perhatikan penggantian 'fullname' ke 'fullName' (sesuai versi faker)
      editor: getRandomElement(['fadly', 'inom', 'dasae', 'rasas']),
    }));
  }
}

export default ApiBooks;
