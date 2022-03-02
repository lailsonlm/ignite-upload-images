import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen} >
      <ModalOverlay />
      <ModalContent
        w="fit-content"
        maxW="100%" 
        maxH="600px"
      >
        <ModalBody p={0} >
          <Image 
            maxW="900px" 
            maxH="600px"
            src={imgUrl} 
          />
        </ModalBody>
        <ModalFooter 
          p={2} 
          bg="pGray.800" 
          justifyContent="flex-start" 
          alignItems="center" 
          fontSize="sm"
          borderBottomRadius="6px"
        >
          <Link href={imgUrl} isExternal _focus={{outline: 'none'}} >Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
