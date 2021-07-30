import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieHeader from './MovieHeader';
import MovieDescription from './MovieDescription';
import MovieLink from './MovieLink';

import { MovieDataType } from 'src/shared/helpers/api';


const MovieContent = styled.div`
  display: block;
  padding: 2rem;
  transform: perspective(1px) translateZ(0);

  transition: all 0.3s;
  overflow: hidden;
  border-radius: 0.5rem;


`;

export default function MovieItem({
  id,
  title,
  description,
  releaseDate,
}: MovieDataType) {
  return (

    <MovieContent>
      <MovieHeader id={id} title={title} releaseDate={releaseDate} />
      <MovieDescription description={description} />
      <MovieLink id={id} />
    </MovieContent>

  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
