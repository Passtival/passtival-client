import { useState } from 'react';

import AddImage from '@shared/components/add-image/add-image';

const LostItems = () => {
  const [image, setImage] = useState<string>();

  const handleChange = (file?: File) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    } else {
      if (image) URL.revokeObjectURL(image); // 메모리 해제
      setImage(undefined);
    }
  };
  return (
    <div>
      <AddImage
        value={image}
        onChange={handleChange}
      />
    </div>
  );
};

export default LostItems;
