import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from '@chakra-ui/react';

interface IProps {
  guests: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ guests }) => {
  const renderList = (): JSX.Element[] => {
    return guests.map(({ name, age, url, note }) => {
      return (
        <>
          <Tr>
            <Td>
              <Image src={url} alt='image' />
            </Td>
            <Td>{name}</Td>
            <Td>{age}</Td>
            <Td>{note}</Td>
          </Tr>
        </>
      );
    });
  };

  return (
    <div>
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
    </div>
  );
};

export default List;
