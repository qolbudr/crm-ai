export interface CustomerListType {
  id: string;
  name: string;
  contact: string;
  status: "ACTIVE" | "INACTIVE" | "PENDING";
  tags: string[];
  lastContact: Date;
}
