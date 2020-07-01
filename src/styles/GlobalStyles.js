import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
} 

body {
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};

  .scrollTop {
  position: fixed;
  width: 4rem;
  bottom: 20px;
  right: 3vw;
  height: 20px;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
}

.scrollTop:hover {
  opacity: 1;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

.loading {
margin: auto;
font-size: 6rem;
}

}
`

export default GlobalStyles