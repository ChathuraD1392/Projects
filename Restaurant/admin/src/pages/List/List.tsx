import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

interface List {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState<List[]>([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      console.log(response.data);
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (foodId: string) => {
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response) {
      toast.success(response.data.success);
    } else {
      toast.error("Item removed error");
    }
  };
  return (
    <div className="list add flex-col">
      <h2>All Food List</h2>
      <div className="list-table">
        {list.length == 0 ? (
          <p>No Items to show</p>
        ) : (
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
        )}
        {list.map((item, index) => (
          <div className="list-table-format" key={index}>
            <img src={`${url}/images/` + item.image} alt="item image" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p className="cursor" onClick={() => removeFood(item._id)}>
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
