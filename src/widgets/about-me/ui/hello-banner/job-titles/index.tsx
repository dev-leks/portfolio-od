import { Divider, Heading, List, ListItem } from "@chakra-ui/react";
import "./styles.scss";

export function JobTitles() {
  const titles = ["Senior Software Engineer", "Frontend Developer"];

  return (
    <div className="job-titles">
      <Divider className="job-titles-line" />
      <List>
        {titles.map((title) => (
          <ListItem key={title}>
            <Heading as="h4" className="job-title">
              {title}
            </Heading>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
