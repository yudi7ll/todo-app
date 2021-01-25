import { createGlobalStyle } from 'styled-components';
import bgLight from './assets/images/bg-desktop-light.jpg';
import bgDark from './assets/images/bg-desktop-dark.jpg';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
  }

  body {
    background-color: ${({ theme }) => theme.bodyBg};
    transition: .2s;
  }

  .wrapper {
    background-image: url(${({ theme }) => theme.bgImage});
  }

  .form,
  .form__input,
  .list {
    background-color: ${({ theme }) => theme.cardBg};
  }

  .list__item {
    border-color: ${({ theme }) => theme.borderColor};
  }

  .list__item__name--completed {
    color: ${({ theme }) => theme.textHover};
  }

  .list__footer * {
    color: ${({ theme }) => theme.textHover};
  }

  .list__action:hover  {
    color: ${({ theme }) => theme.text};
  }

  .remove__icon {
    fill: ${({ theme }) => theme.textHover};
  }
`;

export const light = {
  bgImage: bgLight,
  bodyBg: 'hsl(236, 33%, 92%)',
  borderColor: 'hsl(233, 11%, 84%)',
  cardBg: 'hsl(0, 0%, 98%)',
  text: 'hsl(235, 19%, 35%)',
  textHover: 'hsl(236, 9%, 61%)',
};

export const dark = {
  bgImage: bgDark,
  bodyBg: 'hsl(235, 21%, 11%)',
  borderColor: 'hsl(237, 14%, 26%)',
  cardBg: 'hsl(235, 24%, 19%)',
  text: 'hsl(234, 39%, 85%)',
  textHover: 'hsl(233, 14%, 35%)',
};
