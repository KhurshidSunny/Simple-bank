import { useSelector } from "react-redux";

function Customer() {
  // read data from store
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
