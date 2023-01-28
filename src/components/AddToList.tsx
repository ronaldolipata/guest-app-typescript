import React, { useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { IState as Props } from '../App';

interface IProps {
  guests: Props['guests'];
  setGuests: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        age: number;
        img: string;
        note?: string | undefined;
      }[]
    >
  >;
}

const AddToList: React.FC<IProps> = ({ guests, setGuests }) => {
  const [input, setInput] = useState({
    img: '',
    name: '',
    age: '',
    note: '',
  });

  const hanldleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.img || !input.name || !input.age) {
      return;
    }

    setGuests([
      ...guests,
      {
        img: input.img,
        age: parseInt(input.age),
        name: input.name,
        note: input.note,
      },
    ]);

    setInput({
      img: '',
      name: '',
      age: '',
      note: '',
    });
  };

  return (
    <Container>
      <FormControl my={10}>
        <FormLabel my={1}>
          Image img
          <Input
            onChange={hanldleChange}
            name='img'
            value={input.img}
            my={3}
            placeholder='Image img'
          />
        </FormLabel>
        <FormLabel my={1}>
          Name
          <Input
            onChange={hanldleChange}
            name='name'
            value={input.name}
            my={3}
            placeholder='Name'
          />
        </FormLabel>
        <FormLabel my={1}>
          Age
          <Input
            onChange={hanldleChange}
            name='age'
            value={input.age}
            my={3}
            placeholder='Age'
          />
        </FormLabel>
        <FormLabel my={1}>
          Note
          <Textarea
            onChange={hanldleChange}
            name='note'
            value={input.note}
            my={3}
            placeholder='Note'
          />
        </FormLabel>
        <Button onClick={handleClick} colorScheme='teal'>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddToList;
