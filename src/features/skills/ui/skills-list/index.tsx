import { List, ListItem } from "@chakra-ui/react";
import { useSkills } from "@/features/skills";
import { SkillCard } from "@/entities/skills";
import "./styles.scss";

export function SkillsList() {
  const { skills } = useSkills();

  return (
    <List className="skills-list">
      {skills.map((skill) => (
        <ListItem key={skill.title}>
          <SkillCard {...skill} />
        </ListItem>
      ))}
    </List>
  );
}
