import { List, ListItem, Text } from "@chakra-ui/react";
import { useSkills } from "@/features/skills";
import "./styles.scss";

export function SkillsList() {
  const { skills } = useSkills();

  return (
    <List className="skills-list">
      {skills.map(({ title, icon: Icon }) => (
        <ListItem key={title} className="skills-list-item">
          <Icon className="skills-list-item-icon" />
          <Text className="skills-list-item-title">
            {title}
          </Text>
        </ListItem>
      ))}
    </List>
  );
}
