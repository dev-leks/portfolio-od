export interface CareerCompany {
  name: string;
  position: string;
  logoSource: string;
  url: string;
  startDate: Date;
  endDate?: Date;
  accomplishments?: string[];
}
