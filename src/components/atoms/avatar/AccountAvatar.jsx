import { Avatar, Input } from "@chakra-ui/react"
import { memo } from "react"

export const AccountAvatar = memo(({ updateAccount, editedAccount }) => {

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (upload) => {
      updateAccount({ ...editedAccount, image_url: upload.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <>
      <Input
        type="file"
        name="image_url"
        id="file-input"
        style={{ display: "none" }}
        onChange={handleFileSelect}
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