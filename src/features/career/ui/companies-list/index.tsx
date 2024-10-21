import { useCareerCompanies } from "@/features/career";
import { CareerCompanyCard } from "@/entities/career";
import "./styles.scss";

export function CompaniesList() {
  const { careerCompanies } = useCareerCompanies();

  return (
    <div className="companies-list">
      {careerCompanies.map((company) => (
        <CareerCompanyCard key={company.name} {...company} />
      ))}
    </div>
  );
}
