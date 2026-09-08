import { useState, useEffect } from "react";
import { getEquipmentCategory, getEquipmentDetail } from "../api/dnd5e";

const useCategoryItems = (category) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;
    let ignore = false;

    function fetchData() {
      setIsLoading(true);
      setError(null);
      getEquipmentCategory(category)
        .then((categoryData) =>
          Promise.all(
            categoryData.equipment.map((stub) =>
              getEquipmentDetail(stub.index),
            ),
          ),
        )
        .then((details) => {
          if (!ignore) setItems(details);
        })
        .catch((err) => {
          if (!ignore) setError(err);
        })
        .finally(() => {
          if (!ignore) setIsLoading(false);
        });
    }
    fetchData();

    return () => {
      ignore = true;
    };
  });

  return [items, isLoading, error];
};

export default useCategoryItems;
