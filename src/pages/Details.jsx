import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {IoArrowBack} from "react-icons/io5";
import {Button} from "../components/Button";
import {Info} from "../components/Info";
import {searchByCountry} from "../config";

export const Details = () => {
  const navigate = useNavigate();
  const {name} = useParams();

  const [country, setCountry] = useState(null);

  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
      <IoArrowBack /> Back
      </Button>
      {country && <Info navigate={navigate} {...country} />}
    </div>
  );
};