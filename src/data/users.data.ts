import { v4 as uuidv4 } from "uuid";

// assets
import woman1 from "../assets/users/women1.png";
import woman2 from "../assets/users/women2.png";
import man1 from "../assets/users/man1.png";
import man2 from "../assets/users/man2.png";
import man3 from "../assets/users/man3.png";
import man4 from "../assets/users/man4.png";

export type IUser = {
  id: string;
  name: string;
  memberSince: string;
  picture: string;
};

export const usersData: IUser[] = [
  {
    id: uuidv4(),
    name: "Victor S. Cohen",
    memberSince: "21/03/20",
    picture: man1,
  },
  {
    id: uuidv4(),
    name: "Matt S. Clem",
    memberSince: "11/02/21",
    picture: man2,
  },
  {
    id: uuidv4(),
    name: "Clark T. Pylant",
    memberSince: "01/01/23",
    picture: man3,
  },
  {
    id: uuidv4(),
    name: "Angela R. Rosin",
    memberSince: "21/12/20",
    picture: woman1,
  },
  {
    id: uuidv4(),
    name: "Karen C. Townsend",
    memberSince: "25/11/21",
    picture: woman2,
  },
  {
    id: uuidv4(),
    name: "Harold C. Stephens",
    memberSince: "06/06/22",
    picture: man4,
  },
];
