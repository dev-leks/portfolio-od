import { Text } from "@chakra-ui/react";
import { Skill } from "@/entities/skills";
import "./styles.scss";

interface SkillCardProps extends Skill {}

export function SkillCard(props: SkillCardProps) {
  const { title, icon: Icon } = props;

  return (
    <div className="skill-card">
      <Icon className="skill-card-icon" />
      <Text className="skill-card-title">
        {title}
      </Text>
    </div>
  );
}
