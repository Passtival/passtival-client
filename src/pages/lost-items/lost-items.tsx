import { useState } from 'react';

import AddImage from '@shared/components/add-image/add-image';

const LostItems = () => {
  const [image, setImage] = useState<string>();

  const handleChange = (file?: File) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    } else {
      if (image) URL.revokeObjectURL(image);
      setImage(undefined);
    }
  };
  return (
    <div>
      <AddImage
        src={image}
        onFileChange={handleChange}
      />
    </div>
  );
};

export default LostItems;
