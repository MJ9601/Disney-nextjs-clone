import React from "react";
import { MoviesObject, MovieRespObj } from "../typing";

const HeroHome = ({ movieList }: { movieList: MovieRespObj[] }) => {
  console.log(movieList.map((movie) => movie.title));
  return <div>HeroHome</div>;
};

export default HeroHome;
