import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Container, Flex, Box, Text } from "@chakra-ui/react"
import axios from 'axios';
import Navigation from '../components/navigation';

const Home: NextPage = () => {
  const [data, setData] = useState({});
  const [blocks] = useState(null);
  const [current] = useState(null);
  const [height] = useState(null);
  const [network] = useState(null);
  const [peers] = useState(null);
  const [nodeStateLatency] = useState(null);
  const [QueueLength] = useState(null);
  const [release] = useState(null);
  const [version] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await axios("https://arweave.net/info");
        const { blocks, current, height, network, peers } = result.data
        setReady(true);
      }catch(error){
        console.log(error);
      }
    };

    fetchData();
  }, [data]); 

  return (
      <Box flex="1" >
        <Box flex="1" >
          <Navigation />
        </Box>

        <Box flex="1" >
          <Flex>
            <Box>
              <Text>Blocks</Text>
              <Text>{blocks}</Text>
            </Box>
            <Box>
              <Text>Current</Text>
              <Text>{current}</Text>
            </Box>
            <Box>
              <Text>Height</Text>
              <Text>{height}</Text>
            </Box>
            <Box>
              <Text>Network</Text>
              <Text>{network}</Text>
            </Box>
            <Box>
              <Text>Node State Latency</Text>
              <Text>{nodeStateLatency}</Text>
            </Box>
            <Box>
              <Text>Peers</Text>
              <Text>{peers}</Text>
            </Box>
            <Box>
              <Text>Queue Length</Text>
              <Text>{QueueLength}</Text>
            </Box>
            <Box>
              <Text>Release</Text>
              <Text>{release}</Text>
            </Box>
            <Box>
              <Text>Version</Text>
              <Text>{version}</Text>
            </Box>
          </Flex>  
        </Box>

        <Box flex="1" >
          <Flex>
           
          </Flex>  
        </Box>
      </Box>
  )
}

export default Home
