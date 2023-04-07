import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
    <Box align="center" opacity={0.1} fontSize="sm">
      &copy; {new Date().getFullYear()} Jore Madriz Z. All Rights Reserved.

    </Box>
    </>
  )
}

export default Footer
