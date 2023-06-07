import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react"
import { memo } from "react"
import DataTable from "react-data-table-component"

export const SearchModal = memo(({ isOpen, onClose, handleOverlayClick, setSelectedData }) => {

  const data = [
    { jacket_image: 'https://source.unsplash.com/9wg5jCEPBsw', title: 'Conan the Barbarian', artist_name: 'smail' },
    { jacket_image: 'https://source.unsplash.com/phIFdC6lA4E', title: 'The Road Warrior', artist_name: 'サカナクション' },
    { jacket_image: 'https://source.unsplash.com/lSXpV8bDeMA', title: 'Miami Vice', artist_name: '都っとランド' },
  ]

  const columns = [
    {
      name: 'ジャケット',
      selector: row => <Image src={row.jacket_image} borderRadius="50%" boxSize={"50px"} />,
    },
    {
      name: '曲名',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'アーティスト名',
      selector: row => row.artist_name,
      sortable: true,
    },
  ];

  const onRowClicked = (rowData) => {
    setSelectedData(rowData)
    onClose()
  };

  return (
    <>
      {isOpen && (
        <Box
          bg="rgba(0, 0, 0, 0.5)"
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          height="100vh"
          width="100vw"
          zIndex="10"
          onClick={handleOverlayClick}
        >
          <Box
            borderRadius={15}
            bg="white"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            height="85%"
            width="50%"
            boxShadow="-2px 0px 5px rgba(0,0,0,0.25)"
            zIndex="20"
          >
            <Box mt={3}>
              <Heading display="flex" alignItems="center" justifyContent="center" color="gray.600">検索</Heading>
              <Flex alignItems="center" justifyContent="center" w="90%" margin="auto" py={5}>
                <Input type='tel' placeholder='曲を検索してください' mr={3} />
                <Button colorScheme='teal' variant='outline'>
                  検索する <SearchIcon ml={1} />
                </Button>
              </Flex>
              <Box w="90%" margin="auto">
                <DataTable
                  columns={columns}
                  data={data}
                  highlightOnHover
                  pointerOnHover
                  onRowClicked={onRowClicked}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
})