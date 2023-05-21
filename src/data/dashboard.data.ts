import { v4 as uuidv4 } from "uuid";

export type IDashboard = {
  id: string;
  percentage: number;
  title: string;
};

export const dashboardData: IDashboard[] = [
  {
    id: uuidv4(),
    percentage: 95,
    title: "Clients satisfaits",
  },
  {
    id: uuidv4(),
    percentage: 33,
    title: "Nouveaux produits",
  },
  {
    id: uuidv4(),
    percentage: 53,
    title: "Nouveaux clients",
  },
];
