import { useState } from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  // Manage changing positions
  const [itemPositions, setItemPositions] = useState(
    items.map(item => ({ ...item.position }))
  );

  // New random position
  const handleItemClick = (index) => {
    const newPositions = [...itemPositions];
    newPositions[index] = {
      x: Math.random() * 500, 
    };
    setItemPositions(newPositions);
  };

  return items.map((item, index) => (
    <Item
      key={item._id}
      textureKey={item.texture} // Pass texture key
      position={itemPositions[index]} // Dynamic position
      onClick={() => handleItemClick(index)} // Pass click handler
    />
  ));
};

export default ItemList;
