import { useMemo } from "react";
import { Education } from "@/entities/education";

export const useEducationsList = () => {
  const educationsList = useMemo<Education[]>(() => [
    {
      name: "Simon Kuznets Kharkiv National University of Economics",
      degree: "Master's degree in Computer Science",
      logoSource: "KhNUE.png",
      url: "https://www.hneu.edu.ua/en/",
      startDate: new Date("09.01.2019"),
      endDate: new Date("12.01.2022")
    },
    {
      name: "Kharkiv Computer and Technology College NTU \"KhPI\"",
      degree: "Junior specialist in maintenance of software systems and complexes",
      logoSource: "KhCTC.png",
      url: "http://ct-college.net/",
      startDate: new Date("09.01.2015"),
      endDate: new Date("06.01.2019")
    }
  ], []);

  return { educationsList };
};
