import { Container, Text, VStack, Box, Flex, Button, Tabs, TabList, TabPanels, Tab, TabPanel, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Box>
          <Image src="/path-to-logo.png" alt="Logo" boxSize="40px" />
        </Box>
        <Flex alignItems="center">
          <Link href="#" mx={2}>Docs</Link>
          <Box mx={2}>
            <FaUserCircle size="24px" />
          </Box>
        </Flex>
      </Flex>

      {/* Main Section */}
      <VStack spacing={4} textAlign="center" mb={8}>
        <Text fontSize="4xl" fontWeight="bold">What do you want to build?</Text>
        <Text fontSize="xl">recreate this website...</Text>
        <Button size="md" colorScheme="teal">Configure</Button>
      </VStack>

      {/* Projects Section */}
      <Tabs variant="enclosed" mb={8}>
        <TabList>
          <Tab>My Projects</Tab>
          <Tab>Featured</Tab>
          <Tab>Latest</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
              {/* Example Project Card */}
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="/path-to-project-image.png" alt="Project Image" />
                <Box p={4}>
                  <Text fontWeight="bold">csv-manager</Text>
                  <Text>Created 1 minute ago by Bao Lam</Text>
                </Box>
              </Box>
              {/* Add more project cards as needed */}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
              {/* Example Project Card */}
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="/path-to-project-image.png" alt="Project Image" />
                <Box p={4}>
                  <Text fontWeight="bold">flawless-link-fca-customer-ids</Text>
                  <Text>Created 24 minutes ago by Rohit Mukherjee</Text>
                </Box>
              </Box>
              {/* Add more project cards as needed */}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
              {/* Example Project Card */}
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="/path-to-project-image.png" alt="Project Image" />
                <Box p={4}>
                  <Text fontWeight="bold">youtube-replica-logo</Text>
                  <Text>Created 27 minutes ago by Isaak Sundeman</Text>
                </Box>
              </Box>
              {/* Add more project cards as needed */}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Footer */}
      <Flex justifyContent="flex-end">
        <Link href="#" mx={2}>Privacy Policy</Link>
        <Link href="#" mx={2}>Terms of Service</Link>
      </Flex>
    </Container>
  );
};

export default Index;