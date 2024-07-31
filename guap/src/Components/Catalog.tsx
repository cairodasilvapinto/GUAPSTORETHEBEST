import React from 'react';

type ClothingItem = {
  name: string;
  imageUrl: string;
};

type CatalogProps = {
  items: ClothingItem[];
};

const Catalog: React.FC<CatalogProps> = ({ items }) => (
  <div>
    {items.map((item, index) => (
      <div key={index}>
        <img src={item.imageUrl} alt={item.name} />
        <h2>{item.name}</h2>
      </div>
    ))}
  </div>
);

export default Catalog;

// import React from 'react';
// import Catalog from './Components/Catalog';

// const App: React.FC = () => {
//   const clothingItems = [
//     { name: 'Camiseta', imageUrl: 'url-da-imagem-da-camiseta' },
//     { name: 'Calça', imageUrl: 'url-da-imagem-da-calça' },
//     // adicione mais itens aqui...
//   ];

//   return <Catalog items={clothingItems} />;
// };

// export default App;
