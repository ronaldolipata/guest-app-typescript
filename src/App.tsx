import { useState } from 'react';
import { Container, Heading, Flex, Box } from '@chakra-ui/react';
import List from './components/List';
import AddToList from './components/AddToList';
import './App.css';

export interface IState {
  guests: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [guests, setGuests] = useState<IState['guests']>([
    {
      name: 'Lebron James',
      img: 'https://www.biography.com/.image/t_share/MTY2NzA3MjE1MzQyNzczNTQw/lebron-james-photo-by-streeter-lecka_getty-images.jpg',
      age: 35,
      note: 'American professional basketball player',
    },
    {
      name: 'Kobe Bryant',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpojuAAvfdTQR5K7i6_qBFmZejn2-va6VMf7hOPC9v73iF_FezXkuaEjEaHrfJtpcbWo&usqp=CAU',
      age: 35,
      note: 'American professional basketball player',
    },
  ]);

  return (
    <Container maxWidth='100rem'>
      <Heading py={10}>People invited to the Party</Heading>
      <Flex gap='10rem'>
        <List guests={guests} />
        <AddToList guests={guests} setGuests={setGuests} />
      </Flex>
    </Container>
  );
}

export default App;
