function RenderList() {
  // const names = ["Shanto", "Momo", "Oggy", "Tom"];
  // const nameList = names.map((name) => <h2>{name}</h2>);

  const person = [
    {
      id: 1,
      name: "Shanto",
      age: 25,
      skill: "M",
    },
    {
      id: 2,
      name: "Momo",
      age: 23,
      skill: "CG",
    },
    {
      id: 3,
      name: "Bob",
      age: 19,
      skill: "Nothing about that",
    },
    {
      id: 4,
      name: "Jack",
      age: 24,
      skill: "No Skill",
    },
  ];

  const personList = person.map((person) => (
    <h2 key={person.id}>
      I am {person.name}. I am {person.age} years old. I know {person.skill}.
    </h2>
  ));

  return <div>{personList}</div>;
}

export default RenderList;
