import { v4 as uuidv4 } from "uuid";

export type IOrder = {
  id: string;
  name: string;
  orderedAt: string;
  price: number;
  status: OrderStatus;
  picture: string;
};

export enum OrderStatus {
  DELIVERED = "Livré",
  IN_PROGRESS = "En cours de livraison",
}
export const productData: IOrder[] = [
  {
    id: uuidv4(),
    name: "Chaussure Samba OG",
    orderedAt: "20/05/2023",
    price: 120,
    status: OrderStatus.IN_PROGRESS,
    picture:
      "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/B75806_01_standard.jpg",
  },
  {
    id: uuidv4(),
    name: "Chaussure Stan Smith",
    orderedAt: "20/05/2023",
    price: 110,
    status: OrderStatus.IN_PROGRESS,
    picture:
      "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/FX5502_01_standard.jpg",
  },
  {
    id: uuidv4(),
    name: "Chaussure Samba Vegan",
    orderedAt: "19/05/2023",
    price: 120,
    status: OrderStatus.DELIVERED,
    picture:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c70105150234ac4b948a8bf01187e0c_9366/Chaussure_Samba_OG_Noir_B75807_01_standard.jpg",
  },
  {
    id: uuidv4(),
    name: "Chaussure Gazelle",
    orderedAt: "18/05/2023",
    price: 100,
    status: OrderStatus.IN_PROGRESS,
    picture:
      "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/698e41ae0196408eb16aa7fb008046ad_9366/BB5478_01_standard.jpg",
  },
  {
    id: uuidv4(),
    name: "Chaussure Stan Smith",
    orderedAt: "18/05/2023",
    price: 110,
    status: OrderStatus.DELIVERED,
    picture:
      "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945ea8dabac210127b11e_9366/FX5501_01_standard.jpg",
  },
];
