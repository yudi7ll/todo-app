import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
    transition: .4s ease-in-out;
  }
`;

export const light = {
  cardBg: 'hsl(0, 0%, 98%)',
  text: 'hsl(235, 19%, 35%)',
  textHover: 'hsl(236, 9%, 61%)',
};

export const dark = {
  cardBg: 'hsl(235, 24%, 19%)',
  text: 'hsl(234, 39%, 85%)',
  textHover: 'hsl(236, 33%, 92%)',
};
