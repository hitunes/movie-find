import React from "react";
import { string } from "prop-types";
import styled from "styled-components";

//wrapper will return a div styled with given style
//using spread function in search ...show turns objects title into top-level independent on show
const Wrapper = styled.div`
    border: 2px solid #333;
    border-radius: 4px;
    ${/* text-align: left; */ ""}
    width: 32%;
    padding-right: 10px;
    overflow: hidden;
    margin-bottom: 25px;
    ${'' /* @media (){

    } */}
`;
const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;
`;
const ShowCard = props => (
  <Wrapper>
    <Image
      src={`/public/img/posters/${props.poster}`}
      alt={`${props.title} Show Poster`}
    />
    <div>
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);
ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};
// ShowCard.propTypes = {
//   show: shape({
//     poster: string.isRequired,
//     title: string.isRequired,
//     year: string.isRequired,
//     description: string.isRequired
//   }).isRequired
// };
export default ShowCard;
