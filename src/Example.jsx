import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const { data } = await axios.get("https://api.example.com/user");
  console.log("111111", data);

  return data;
};

const Example = () => {
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchData,
  });

  console.log("222222", data);

  return (
    <div>
      <h1>name: {data?.name}</h1>
    </div>
  );
};

export default Example;
