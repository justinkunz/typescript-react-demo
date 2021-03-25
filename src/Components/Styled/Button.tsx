import styled from 'styled-components';

interface ButtonProps {
  buttonType?: 'positive' | 'negative' | 'neutral';
}

const colorRef = {
  positive: {
    background: '#52cc52',
    hover: '#4bbd4b',
  },
  negative: {
    background: '#ff5d5d',
    hover: '#f14141',
  },
  neutral: {
    background: '#61dafb',
    hover: '#48cbef',
  },
} as const;

export default styled.button<ButtonProps>`
  margin: 18px 0;
  background: ${(props) => colorRef[props.buttonType || 'neutral'].background};
  border: none;
  padding: 8px;
  border-radius: 6px;
  &:hover {
    background: ${(props: ButtonProps) => colorRef[props.buttonType || 'neutral'].hover};
    cursor: pointer;
  }
`;
