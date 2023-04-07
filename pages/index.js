import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container css={{ paddingTop: '30px'}}>
      <Box
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi, I&apos;m a Costa Rican-based software engineer.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jore Madriz Z.
          </Heading>
          <p>Developer / Chess Player / Photography Enthusiast</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jore.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
      <Heading as="h3" variant="section-title"></Heading>
        <Paragraph>
        Jore specializes in problem solving through building software.
        Currently, he is an engineer at {' '}
        <Link as={NextLink} href="https://gorillalogic.com" passHref scroll={false}>
          Gorilla Logic
        </Link> 
        {' '}mainly building 
        accessible back-end products.He has worked with some technologies
        like Java, Scala, Kubernetes, React and a little bit of Golang. When
        he is not online he loves to spend time at playing and trying to 
        improve at chess or taking photos.
        One of his main goals is to improve at building software in order to
        solve basic problem we face everyday as humans.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Time Line
        </Heading>
        <BioSection>
          <BioYear>2016</BioYear>
          Get an intership at First Factory SLR (FF).
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Graduated from computer programming 🎓 (Instituto Nacional de Aprendizaje).
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Start working as a full time engineer at First Factory 👨‍💻.
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Move from First Factory and start working as a back-end engineer to Gorilla Logic 🦍.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Online presence
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.instagram.com/joremadriz/" target="_blank">
              <Button
                variant="ghost"
                colorScheme= "teal"
                leftIcon={<IoLogoInstagram />}
              >
                @joremadriz
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/jorge-madriz-25b246156/" target="_blank">
              <Button
                variant="ghost"
                colorScheme= "teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Jorge Madriz
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
