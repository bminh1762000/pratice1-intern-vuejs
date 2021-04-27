import axios from "axios";

export const getListUser = async () => {
  const resData = await axios.get("https://jsonplaceholder.typicode.com/users");
  const listUser = resData.data.map((user) => {
    return {
      id: user.id,
      street: user.address.street,
      name: user.name,
      phone: user.phone,
      company: user.company.name,
      status: user.id % 2 === 0 ? "open" : "closed",
    };
  });
  return listUser;
};
