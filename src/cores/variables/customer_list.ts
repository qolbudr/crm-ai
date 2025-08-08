import type { CustomerListType } from "../types/customer_list_type";

export const customerList: CustomerListType[] = [
  {
    id: "1",
    name: "John Doe",
    contact: "+1234567890",
    status: "ACTIVE",
    tags: ["VIP", "Newsletter"],
    lastContact: new Date("2023-10-01T10:00:00+00:00")
  },
  {
    id: "2",
    name: "Jane Smith",
    contact: "+0987654321",
    status: "INACTIVE",
    tags: ["Regular"],
    lastContact: new Date("2023-09-15T14:30:00+00:00")
  },
  {
    id: "3",
    name: "Alice Johnson",
    contact: "+1122334455",
    status: "PENDING",
    tags: ["Prospect"],
    lastContact: new Date("2023-10-05T09:15:00+00:00")
  },
  {
    id: "4",
    name: "Bob Brown",
    contact: "+5566778899",
    status: "ACTIVE",
    tags: ["Loyal", "Newsletter"],
    lastContact: new Date("2023-10-10T11:45:00+00:00")
  },
  {
    id: "5",
    name: "Charlie Green",
    contact: "+2233445566",
    status: "INACTIVE",
    tags: ["Regular"],
    lastContact: new Date("2023-09-20T16:20:00+00:00")
  },
  {
    id: "6",
    name: "Diana Prince",
    contact: "+3344556677",
    status: "PENDING",
    tags: ["Prospect"],
    lastContact: new Date("2023-10-12T08:30:00+00:00")
  },
  {
    id: "7",
    name: "Eve Adams",
    contact: "+4455667788",
    status: "ACTIVE",
    tags: ["VIP"],
    lastContact: new Date("2023-10-15T10:00:00+00:00")
  },
  {
    id: "8",
    name: "Frank Castle",
    contact: "+5566778899",
    status: "INACTIVE",
    tags: ["Regular"],
    lastContact: new Date("2023-09-25T13:45:00+00:00")
  },
  {
    id: "9",
    name: "Grace Hopper",
    contact: "+6677889900",
    status: "PENDING",
    tags: ["Prospect"],
    lastContact: new Date("2023-10-20T15:30:00+00:00")
  },
  {
    id: "10",
    name: "Hank Pym",
    contact: "+7788990011",
    status: "ACTIVE",
    tags: ["Loyal", "Newsletter"],
    lastContact: new Date("2023-10-22T12:00:00+00:00")
  },
  {
    id: "11",
    name: "Ivy League",
    contact: "+8899001122",
    status: "INACTIVE",
    tags: ["Regular"],
    lastContact: new Date("2023-09-30T17:00:00+00:00")
  },
  {
    id: "12",
    name: "Jack Sparrow",
    contact: "+9900112233",
    status: "PENDING",
    tags: ["Prospect"],
    lastContact: new Date("2023-10-25T14:15:00+00:00")
  }
]