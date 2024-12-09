function NewList(props) {
    const category = props.category;
    const itemList = props.items;
  
    const listItems = itemList.map((item) => (
      <li key={item.id}>
        This is {item.name}, it has {item.color} color and it tastes {item.taste}.
      </li>
    ));
  
    return (
      <>
        <h3>{category}</h3>
        <ul>{listItems}</ul>
      </>
    );
  }

  NewList.defaultProps = {
    category : "Category",
    items : []
  }

  
  export default NewList;
  


  /// These items should add in the APP.jsx 

//   const fruits = [
//     {
//       id: 1,
//       name: "Apple",
//       color: "Red",
//       taste: "Sweet",
//     },
//     {
//       id: 2,
//       name: "Banana",
//       color: "Yellow",
//       taste: "Sweet",
//     },
//     {
//       id: 3,
//       name: "Orange",
//       color: "Orange",
//       taste: "Citrusy",
//     },
//     {
//       id: 4,
//       name: "Lemon",
//       color: "Yellow",
//       taste: "Sour",
//     },
//   ];

//   const vegetables = [
//     {
//       id: 1,
//       name: "Carrot",
//       color: "Orange",
//       taste: "Sweet",
//     },
//     {
//       id: 2,
//       name: "Broccoli",
//       color: "Green",
//       taste: "Earthy",
//     },
//     {
//       id: 3,
//       name: "Bell Pepper",
//       color: "Red",
//       taste: "Sweet",
//     },
//     {
//       id: 4,
//       name: "Spinach",
//       color: "Green",
//       taste: "Mild",
//     },
//   ];

//   return (
//     <>
//       {fruits.length > 0 ? <NewList items={fruits} category="Fruits" /> : null}
      
//       {vegetables.length > 0 ? <NewList items={vegetables} category="Vagetables" /> : null}
       
//     </>
//   )
