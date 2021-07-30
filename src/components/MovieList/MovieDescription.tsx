import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';



const MovieDescriptionStyle = styled.p`
  font-family: inherit;
  overflow-wrap: break-word;
  white-space: normal;
  margin-bottom: 2.5rem;
`;

export default function MovieDescription({
  description,
}: MovieDescriptionProps) {
  return (
    <MovieDescriptionStyle>
      {description.substring(0, 260)}...
    </MovieDescriptionStyle>
  );
}

export type MovieDescriptionProps = {
  description: string;
};

MovieDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
