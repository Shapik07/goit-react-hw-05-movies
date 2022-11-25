import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 50px;
  font-family: Verdana, sans-serif;
  font-weight: 900;
  position: relative;
  background: white;
  overflow: hidden;
  text-transform: uppercase;
  text-align: center;

  /* :before {
    content: '';
    position: absolute;
    filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
    background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 1em,
        #bfe2ff 1em,
        #337ab7 50%
      ),
      repeating-linear-gradient(
        45deg,
        #337ab7,
        #337ab7 1em,
        #fff 1em,
        #bfe2ff 50%
      );
    background-size: 3em 3em, 2em 2em;
    animation-name: ani;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes ani {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }
  @media (max-width: 690px) {
    .pouring {
      font-size: 20px;
    }
  } */
`;
