import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from '@chakra-ui/react';
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ guests }) => {
  const renderList = (): JSX.Element[] => {
    return guests.map(({ img, name, age, note }, index) => {
      return (
        <Tr key={index}>
          <Td>
            <Image src={img} alt='image' />
          </Td>
          <Td>{name}</Td>
          <Td>{age}</Td>
          <Td>{note}</Td>
        </Tr>
      );
    });
  };

  return (
    <Box>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Note</Th>
            </Tr>
          </Thead>
          <Tbody>{renderList()}</Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default List;
