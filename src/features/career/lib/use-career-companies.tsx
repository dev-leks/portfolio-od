import { useMemo } from "react";
import { CareerCompany } from "@/entities/career";

interface UseCareerCompaniesReturnValues {
  careerCompanies: CareerCompany[]
}

export const useCareerCompanies = (): UseCareerCompaniesReturnValues => {
  const careerCompanies = useMemo<CareerCompany[]>(() => [
    {
      name: "Newxel",
      position: "Software Engineer",
      logoSource: "newxel_logo.jpg",
      url: "https://newxel.com/",
      startDate: new Date("05.01.2024"),
      accomplishments: [
        "Worked for WSC Sports as an outstaff developer, focusing on continuous R&D, UI improvements, and seamless collaboration with the internal team."
      ],
    },
    {
      name: "NIX",
      position: "Senior Software Engineer",
      logoSource: "nix_logo.jpg",
      url: "https://www.nixsolutions.com/",
      startDate: new Date("05.01.2019"),
      endDate: new Date("05.01.2024"),
      accomplishments: [
        "Researched and developed platforms across web and mobile, driving both frontend and backend solutions.",
        "Refactored legacy systems and introduced modern architectures like micro-frontends and serverless.",
        "Mentored junior engineers and maintained high code quality standards.",
      ],
    },
    {
      name: "Rubika",
      position: "Software Engineer",
      logoSource: "rubika.png",
      url: "https://rubika.agency/",
      startDate: new Date("01.01.2019"),
      endDate: new Date("05.01.2024"),
      accomplishments: [
        "Developed online stores, promo sites, and landings. Markup sites by design.",
        "Built interactive tree list using Canvas API.",
      ],
    }
  ], []);

  return { careerCompanies };
};
