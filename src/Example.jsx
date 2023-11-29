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

  console.log("data example", data);

  return <div>Example</div>;
};

export default Example;
