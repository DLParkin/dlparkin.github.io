import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Me from "./Me";

const AboutMe = () => {
  return (
    <Box margin={3}>
      <Box display={"flex"} flexDirection={["column", "row"]}>
        <Box marginLeft={5} margin={["auto", "inherit"]}>
          <Me />
          <Box marginTop={1} textAlign={"center"}>
            <IconButton
              as={"a"}
              color="white"
              aria-label="github-icon"
              fontSize={"20px"}
              marginRight={"4px"}
              backgroundColor={"transparent"}
              _hover={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}
              cursor={"pointer"}
              icon={<FaGithub />}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dlparkin"
            />
            <IconButton
              as={"a"}
              color="white"
              aria-label="code-icon"
              fontSize={"20px"}
              backgroundColor={"transparent"}
              _hover={{
                bg: "transparent",
              }}
              _focus={{
                bg: "transparent",
              }}
              cursor={"pointer"}
              icon={<FaLinkedin />}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/david-parkin-654849152/"
            />
          </Box>
        </Box>
        <Box marginLeft={5}>
          <Heading as={"h4"} size={"md"}>
            Firstly a big welcome however you made it here!
          </Heading>
          <br />
          <Text fontSize={"md"}>
            I could write a big long blurb about me but will try and keep it
            short. I am a developer who loves a bit of typescript. In fact you
            could call me an addict... but I am ok with this, it keeps me warm
            at night.
          </Text>
          <br />
          <Text fontSize={"md"}>
            It all started in 2018 when I decided to change when after working
            in transport for 20 odd years a choice was to be made, continue with
            my current path or go with a childhood passion to become a
            developer. The kids where in high school so the choice made and here
            we are now, writing good code, bad code and bashing my head against
            the keyboard... but that is part of the journey.
          </Text>
          <br />
          <Text fontSize={"md"}>
            I went to tafe for a year and in that time started working (partime)
            for a great guy (
            <Text
              textDecoration={"underline"}
              as="a"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aosteraas"
            >
              Aaron Osteraas
            </Text>
            ) who took me under his wing and mentored me with his god mode
            skills.
          </Text>
          <br />
          <Text fontSize={"md"}>
            Landed my first real job in 2020 and work with some great people who
            are passionate about the products we work on.
          </Text>
          <br />
          <Text fontSize={"md"}>
            Lets leave it at that since I have nothing more to say for now,
            enjoy my little project here which was created because I found about
            about github pages and went woohoo.
          </Text>
          <br />
          <Text fontSize={"md"}>
            Feel free to hit me up on linkedIn or Github as always keen to
            connect with likeminded people and the road we are on.
          </Text>
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
