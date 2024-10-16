import { useMemo } from "react";
import { Skill } from "@/features/skills";
import {
  BootstrapIcon,
  ExpressIcon,
  GitIcon,
  GraphQLIcon,
  JestIcon,
  JsIcon,
  MySQLIcon,
  NestJsIcon,
  NextJsIcon,
  NodeJsIcon,
  ReactIcon,
  SassIcon,
  TailwindCSSIcon,
  TsIcon,
  VueIcon
} from "@/shared/ui/icons";

interface UseSkillsReturnValues {
  skills: Skill[];
}

export const useSkills = (): UseSkillsReturnValues => {
  const skills = useMemo(() => (
    [
      { title: "TypeScript", icon: TsIcon },
      { title: "JavaScript", icon: JsIcon },
      { title: "React / ReactNative", icon: ReactIcon },
      { title: "Next.js", icon: NextJsIcon },
      { title: "Vue.js", icon: VueIcon },
      { title: "Node.js", icon: NodeJsIcon },
      { title: "Express.js", icon: ExpressIcon },
      { title: "Nest.js", icon: NestJsIcon },
      { title: "MySQL", icon: MySQLIcon },
      { title: "GraphQL", icon: GraphQLIcon },
      { title: "TailwindCSS", icon: TailwindCSSIcon },
      { title: "Bootstrap", icon: BootstrapIcon },
      { title: "Sass/Scss", icon: SassIcon },
      { title: "Jest", icon: JestIcon },
      { title: "Git", icon: GitIcon },
    ]
  ), []);

  return { skills };
};
