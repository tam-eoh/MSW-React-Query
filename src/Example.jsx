import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const { data } = await axios.get("https://api.example.com/user");
  console.log("fetchData", data);

  return data;
};

const Example = () => {
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchData,
  });

  console.log("re-render", data);

  return (
    <div>
      <h1>name: {data?.name}</h1>
    </div>
  );
};

export default Example;
