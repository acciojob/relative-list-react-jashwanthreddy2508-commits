import React from 'react';

const App = () => {
  const relatives = [
    {
      id: "relativeListItem1",
      name: "Hari",
      Welcome: "hi, happy diwali"
    },
    {
      id: "relativeListItem2",
      name: "saideep",
      Welcome: "hi, happy diwali"
    },
    {
      id: "relativeListItem3",
      name: "akki",
      Welcome: "hi, happy diwali"
    },
    {
      id: "relativeListItem4",
      name: "rishi",
      Welcome: "hi, happy diwali"
    },
    {
      id: "relativeListItem5",
      name: "Harsha",
      Welcome: "hi, happy diwali"
    }
  ];

  return (
    <div id="main">
      <h1>Relatives list for Diwali</h1>

      <ol>
        {
          relatives.map((items) => (
          <li key={items.id}>
            {items.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
