import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

type ImagesList = {
  after: string;
  data: {
    title: string;
    description: string;
    url: string;
    ts: number;
    id: string;
  }[]
}

export default function Home(): JSX.Element {
  
  async function fetchImages({ pageParam = null }): Promise<ImagesList> {
    const after = pageParam
    const result = await api.get('/api/images', {
      params: {
        after,
      }
    })
    
    return result.data
  } 

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    fetchImages,
    {
      getNextPageParam: (lastPage, pages) => lastPage.after,
    });


  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    const result = data?.pages.map(res => res.data).flat(2)

    return result
  }, [data]);


  // TODO RENDER LOADING SCREEN
  if(isLoading) {
    return <Loading />
  }

  // TODO RENDER ERROR SCREEN
  if(isError) {
    return <Error />
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage && 
          <Button
            mt={10}
            onClick={() => fetchNextPage()}
          >
            {!isFetchingNextPage ? 'Carregar mais' : 'Carregando...' }
          </Button>
        }

      </Box>
    </>
  );
}
