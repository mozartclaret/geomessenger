import {Avatar} from './Avatar';
import {Row, Box, Text} from 'native-base';
import {UserState} from '../types';

export type UserItemProps = UserState;

export function UserItem({name, color}: UserItemProps) {
  return (
    <Row paddingY="2" paddingX="2" alignItems="center">
      <Box marginRight="2">
        <Avatar color={color} name={name} size={42} />
      </Box>
      <Text fontSize="md">{name}</Text>
    </Row>
  );
}
