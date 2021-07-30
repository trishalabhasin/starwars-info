import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const MovieLinkStyle = styled.p`
  padding-top: 1.2rem;
  font-size: 1.4rem;
  text-transform: capitalize;

`;

export default function MovieLink({ id }: MovieLinkProps) {
  return (
    <MovieLinkStyle>
      <Link to={`/movie/${id}`}>More info</Link>
    </MovieLinkStyle>
  );
}

export type MovieLinkProps = {
  id: number;
};

MovieLink.propTypes = {
  id: PropTypes.number.isRequired,
};
