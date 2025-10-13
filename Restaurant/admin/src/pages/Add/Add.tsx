import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Add.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    if (image) formData.append("image", image);

    console.log(formData);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({ name: "", description: "", price: "", category: "Salad" });
      setImage(null);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Image"
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            id="image"
            required
            hidden
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Item Name</p>
          <input
            type="text"
            value={data.name}
            name="name"
            placeholder="Type here..."
            onChange={onChangeHandler}
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Item Description</p>
          <textarea
            name="description"
            value={data.description}
            rows={6}
            placeholder="Write the description here"
            onChange={onChangeHandler}
          />
        </div>
        <div className="add-product-category-price">
          <div className="add-product-category flex-col">
            <p>Item Category</p>
            <select
              name="category"
              id="category"
              value={data.category}
              onChange={onChangeHandler}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwitch">Sandwitch</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Vegetsrian</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-product-price flex-col">
            <p>Item Price</p>
            <input
              type="number"
              value={data.price}
              name="price"
              placeholder="$20"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
