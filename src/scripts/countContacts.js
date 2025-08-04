import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const total = await readContacts();
  return total.length;
};

console.log(await countContacts());
