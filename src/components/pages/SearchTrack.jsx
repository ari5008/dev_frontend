import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react"
import axios from "axios"
import { memo, useState } from "react"
import DataTable from "react-data-table-component"
import { useNavigate } from "react-router-dom"
import { trackResultStore } from "../../store/trackResultStore"
import { selectedDataStore } from "../../store/selectedDataStore"
import { NoDataComponent } from "../atoms/defaultData/NoDataComponent"
import { CustomSpinner } from './../atoms/spinner/CustomSpinner';

export const SearchTrack = memo(() => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { editedSelectedData, updateEditedSelectedData } = selectedDataStore()
  const updateSelectedData = selectedDataStore((state) => state.updateEditedSelectedData)
  const { editedResultTrack, updateEditedResultTrack } = trackResultStore()

  const customStyles = {
    rows: {
      style: {
        minHeight: '70px',
      },
    },
  };

  const columns = [
    {
      name: 'ジャケット',
      selector: row => <Image src={row.image_url} borderRadius="50%" boxSize={"65px"} />,
      style: {
        minWidth: '25%',
        maxWidth: '25%',
      },
      width: '25%',
    },
    {
      name: '曲名',
      selector: row => row.name,
      sortable: true,
      style: {
        minWidth: '40%',
        maxWidth: '40%'
      },
      width: '40%',
    },
    {
      name: 'アーティスト名',
      selector: row => row.artists,
      sortable: true,
      style: {
        minWidth: '40%',
      },
      width: '40%',
    },
  ];

  const onRowClicked = (rowData) => {
    updateEditedSelectedData(rowData)
    navigate('/account/createTrack')
  };

  const submitSearchHandler = (e) => {
    e.preventDefault()
    const params = {
      q: editedSelectedData.name,
      type: "track",
      market: "JP",
    };
    setLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/searchApi`,
      {
        withCredentials: true,
        params: params,
      }).then(res => {
        setLoading(false);
        updateEditedResultTrack(res.data);
      });
  }


  return (
    <>
      <Box
        bg='white'
        mt="2rem"
        mb="2rem"
        borderRadius="15px"
        color="black"
      >
        <Heading display="flex" alignItems="center" justifyContent="center" color="gray.600" pt={8}>検索</Heading>
        <form action="get" onSubmit={submitSearchHandler}>
          <Flex alignItems="center" justifyContent="center" w="90%" margin="auto" py={5}>
            <Input
              type='text'
              placeholder='曲を検索してください'
              mr={3}
              value={editedSelectedData.name}
              onChange={(e) => updateSelectedData({ ...editedSelectedData, name: e.target.value })}
            />
            <Button
              colorScheme='teal'
              variant='outline'
              type="submit"
            >
              検索する <SearchIcon ml={1} />
            </Button>
          </Flex>
        </form>
        {loading ? (
          <Flex flexDirection='column' alignItems='center' justifyContent='center' h='60vh'>
            <CustomSpinner />
          </Flex>
        ) : (
          <Box py={5}>
            <Box w="90%" margin="auto" px={0}>
              <DataTable
                columns={columns}
                data={editedResultTrack}
                highlightOnHover
                pointerOnHover
                onRowClicked={onRowClicked}
                noDataComponent={<NoDataComponent />}
                customStyles={customStyles}
              />
            </Box>
          </Box>
        )}
      </Box>
    </>
  )
})