import { Experience } from "@/shared/config/experience";

export interface CareerCompany extends Experience {
  position: string;
  accomplishments?: string[];
}
