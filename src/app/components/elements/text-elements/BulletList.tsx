import { List, ListItem } from '@material-ui/core';

export const BulletList = ({ data }) => {
  return (
    <List>
      {data.items.map(item => (
        <ListItem
          key={Math.random()
            .toString(36)
            .substring(2, 15)}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export default BulletList;
