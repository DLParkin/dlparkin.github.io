import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

interface ThemTunes {
  name: string;
  url: string;
  author: string;
}

const TunesPlayer = () => {
  const [url, setUrl] = useState<string>(
    "https://www.youtube.com/watch?v=SNRtmwWsgHA"
  );
  const [start, setStart] = useState<boolean>(false);

  const themTunes: ThemTunes[] = [
    {
      name: "Best Mashups Of Popular Songs | Best Club Music Mix 2021 #12 🎉",
      url: "https://www.youtube.com/watch?v=SNRtmwWsgHA",
      author: "Darley Jefferson",
    },
    {
      name: "Avicii, Dua Lipa, Coldplay, Martin Garrix & Kygo, The Chainsmokers Style - Summer Vibes",
      url: "https://www.youtube.com/watch?v=kvB-fCGjUJA",
      author: "Summer Love",
    },
    {
      name: "Avicii, Calvin Harris, Kygo, Alok, Robin Schulz, David Guetta, Gryffin - Summer Vibes Mix",
      url: "https://www.youtube.com/watch?v=N36chN7a",
      author: "Rammor",
    },
    {
      name: "Hardwell Live at Tomorrowland 2018 WEEK 1 [FULL SET]",
      url: "https://www.youtube.com/watch?v=Y8N9vxYxWcc",
      author: "Hardwell",
    },
    {
      name: "Tiësto - Live @ Ultra Music Festival 2022",
      url: "https://www.youtube.com/watch?v=e94gack-DJk",
      author: "Tiësto",
    },
    {
      name: "Mega Hits 2021 🌱 The Best Of Vocal Deep House Music Mix 2021 🌱 Summer Music #9",
      url: "https://www.youtube.com/watch?v=or047P2NOjc",
      author: "Helios Deep",
    },
  ];

  return (
    <Box>
      <ReactPlayer width={"100%"} url={url} controls={true} playing={start} />
      <InputGroup padding={1}>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} />
        <InputRightElement width="4.4rem" top={"3px"}>
          <Button h="1.75rem" size="sm" onClick={() => setStart(true)}>
            Play
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box>
        <Box padding={1}>
          <Text fontSize={"sm"} marginBottom={2}>
            Some fav programming tunes (no particular order)
          </Text>
          <Box
            overflow={"auto"}
            height={"85px"}
            borderBottom={"1px solid rgb(255 255 255 / 30%)"}
          >
            {themTunes.map((tune) => {
              return (
                <Box
                  onClick={() => setUrl(tune.url)}
                  cursor={"pointer"}
                  border={"1px solid rgb(255 255 255 / 30%)"}
                  borderRadius={"6px"}
                  marginBottom={"3px"}
                  padding={"4px"}
                >
                  <Text fontSize={"sm"}>{tune.name}</Text>
                  <Text fontSize={"xs"}>{tune.author}</Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TunesPlayer;
