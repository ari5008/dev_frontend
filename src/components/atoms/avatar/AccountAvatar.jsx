import { Avatar, Input } from "@chakra-ui/react"
import { memo } from "react"

export const AccountAvatar = memo(({ updateAccount, editedAccount }) => {

  const handleAvatarClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <>
      <Input
        type="file"
        id="file-input"
        style={{ display: "none" }}
        onChange={(e) =>
          updateAccount({ ...editedAccount, image_url: URL.createObjectURL(e.target.files[0]) })
        }
      />
      <Avatar
        type="file"
        size='lg'
        mr={6}
        src={editedAccount.image_url}
        onClick={handleAvatarClick}
        _hover={{ cursor: "pointer" }}
      />
    </>
  )
})