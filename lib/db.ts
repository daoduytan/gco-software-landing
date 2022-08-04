import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "db.json");

console.log(file);

type User = {
  username: string;
  password: string;
};

export type TAboutListItem = {
  id: string;
  title: string;
  description: string;
};

export type TAboutData = {
  title: string;
  description: string;
  items: TAboutListItem[];
};

type Data = {
  users: User[];
  about: TAboutData;
};

const adapter = new JSONFile<Data>(file);

export const db = new Low(adapter);
