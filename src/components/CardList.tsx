import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [imgUrl, setImageUrl] = useState('')

  function viewImage(url: string) {
    setImageUrl(url)
    onOpen()
  }

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(isOpen, onOpen, onClose) {
    
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px" >
        {cards?.map(card => {
          return (
            <Card data={card} viewImage={viewImage}/>
          )
        })}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl} /> 
    </>
  );
}
