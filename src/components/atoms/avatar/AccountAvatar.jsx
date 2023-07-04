import { Avatar, Input } from "@chakra-ui/react"
import { memo } from "react"

export const AccountAvatar = memo(({ updateAccount, editedAccount }) => {

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    // 画像のリサイズ処理
    const handleImageResize = (img) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // リサイズ後の幅と高さを指定（例: 幅が300pxでアスペクト比を保持）
      const maxWidth = 50;
      const maxHeight = img.height * (maxWidth / img.width);

      // canvasに描画してリサイズ
      canvas.width = maxWidth;
      canvas.height = maxHeight;
      context.drawImage(img, 0, 0, maxWidth, maxHeight);

      // リサイズ後の画像をBase64形式で取得
      const resizedImageUrl = canvas.toDataURL(file.type);

      // アップデート処理
      updateAccount({ ...editedAccount, image_url: resizedImageUrl });
    };

    reader.onload = (upload) => {
      const img = new Image();
      img.onload = () => {
        handleImageResize(img);
      };
      img.src = upload.target.result;
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