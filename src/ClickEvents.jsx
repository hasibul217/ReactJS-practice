function ClickEvents() {
  const handleClick = () => console.log("Ouch!!!");

  const handleClick2 = (name) => console.log (`${name} stop clicking me`);

  return <button onClick={ () =>  handleClick2("Shanto")}>Click Me</button>;
}

export default ClickEvents;
