import { useState } from 'react';
import List from './components/List';
import { Heading, FormControl, FormLabel, Input } from '@chakra-ui/react';
import './App.css';

interface IState {
  guests: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [guests, setGuests] = useState<IState['guests']>([
    {
      name: 'Lebron James',
      url: 'https://www.biography.com/.image/t_share/MTY2NzA3MjE1MzQyNzczNTQw/lebron-james-photo-by-streeter-lecka_getty-images.jpg',
      age: 35,
      note: 'American professional basketball player',
    },
    {
      name: 'Kobe Bryant',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpojuAAvfdTQR5K7i6_qBFmZejn2-va6VMf7hOPC9v73iF_FezXkuaEjEaHrfJtpcbWo&usqp=CAU',
      age: 35,
      note: 'American professional basketball player',
    },
  ]);

  return (
    <div className='App'>
      <Heading py={10}>People invited to the Party</Heading>
      <List guests={guests} />
      <FormControl my={10}>
        <FormLabel my={1}>
          Image URL
          <Input my={3} placeholder='First name' />
        </FormLabel>
        <FormLabel my={1}>
          Name
          <Input my={3} placeholder='First name' />
        </FormLabel>
        <FormLabel my={1}>
          Age
          <Input my={3} placeholder='First name' />
        </FormLabel>
        <FormLabel my={1}>
          Note
          <Input my={3} placeholder='First name' />
        </FormLabel>
      </FormControl>
    </div>
  );
}

export default App;
