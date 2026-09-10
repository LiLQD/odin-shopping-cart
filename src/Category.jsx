import { useParams } from "react-router";
import useCategoryItems from "./hook/useCategoryItem";
const Category = () => {
  const { category } = useParams();
  const { items, isLoading, error } = useCategoryItems(category);
  if (isLoading) return <p>Loading {category}...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.index}>
          <strong>{item.name}</strong>
          {item.cost && (
            <span>
              {" "}
              - {item.cost.quantity} {item.cost.unit}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Category;
