function Hello() {
  let name = "Pratik";
  let number = 1;
  let location = () => {
    return "Pune";
  };
  return <div>
  <h3>
    Hello!!!
  </h3>
  <p>msgNo.{number}: This is {name} from {location()}.</p>
  </div>
}

export default Hello;
