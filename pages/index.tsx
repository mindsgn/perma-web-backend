import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Container, Flex, Box, Text } from "@chakra-ui/react"
import axios from 'axios';
import Navigation from '../components/navigation';

interface Data{
  blocks: number;
  current: string;
  height: number;
  network: string;
  node_state_latency: number;
  peers: number;
  queue_length: number;
  release: number;
  version: number;
}

const Home: NextPage = () => {
  const [data, setData] = useState(null);
  const [ready, setReady] =useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await axios("https://arweave.net/info");
        setData(result.data);
        console.log(result.data);
        setReady(true);
      }catch(error){
        console.log(error);
      }
    };
    fetchData();
  }, [ready]); 

  return (
      <Box flex="1" bg="black" height="100vh">
        <Box flex="1" >
          <Navigation />
        </Box>

        <Box flex="1" >
          {
            ready?
              <Flex wrap="wrap" justify="flex-start">
                <Box m="20px" p="6" color="white" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
                  <Text></Text>
                  <Box>
                    <Text>Blocks</Text>
                  </Box>
                  <Box>
                    <Text>{data.blocks}</Text>
                  </Box>
                </Box>
                <Box m="20px" p="6" color="white" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
                  <Box>
                    <Text>Current</Text>
                  </Box>
                  <Box>
                    <Text>{data.current}</Text>
                  </Box>
                </Box>
                <Box m="20px" p="6" color="white" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
                  <Box>
                    <Text>Height</Text>
                  </Box>
                  <Box>
                    <Text>{data.height}</Text>
                  </Box>
                </Box>
                <Box m="20px" p="6" color="white" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
                  <Box>
                    <Text>Network</Text>
                  </Box>
                  <Box>
                    <Text>{data.network}</Text>
                  </Box>
                </Box>
                <Box m="20px" p="6" color="white" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
                  <Box>
                    <Text>Node State Latency</Text>
                  </Box>
                  <Box>
                    <Text></Text>
                  </Box>
                </Box>
                <Box m="20px" p="6" color="white" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
                  <Box>
                    <Text>Peers</Text>
                  </Box>
                  <Box>
                    <Text>{data.peers}</Text>
                  </Box>
                </Box>
                <Box m="20px" m="20px" p="6" color="white" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
                  <Box>
                    <Text>Queue Length</Text>
                  </Box>
                  <Box>
                    <Text>{data.node_state_latency}</Text>
                  </Box>
                </Box>
                <Box m="20px" p="6" color="white" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
                  <Box>
                    <Text>Release</Text>
                  </Box>
                  <Box>
                    <Text>{data.release}</Text>
                  </Box>
                </Box>
                <Box m="20px" p="6" color="white" maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden"  >
                  <Box>
                    <Text>Version</Text>
                  </Box>
                  <Box>
                    <Text>{data.version}</Text>
                  </Box>
                </Box>
            </Flex>
            :
            null
          }
        </Box>
        <Box flex="1" >
          <Flex>
          </Flex>  
        </Box>
      </Box>
  )
}

export default Home
