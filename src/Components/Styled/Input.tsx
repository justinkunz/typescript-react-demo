import styled from 'styled-components';

interface InputProps {
  error?: boolean;
}

export default styled.input<InputProps>`
  height: 24px;
  border-radius: 4px;
  border-color: ${({ error }) => (error ? '#ff717b' : '#c1bebe')};
  border-width: 2px;
  border-style: solid;
`;
