import { Divider, Heading, List, ListItem } from "@chakra-ui/react";
import { JOB_TITLES } from "@/entities/me";
import "./styles.scss";

export function JobTitles() {
  return (
    <div className="job-titles">
      <Divider className="job-titles-line" />
      <List>
        {JOB_TITLES.map((title) => (
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
