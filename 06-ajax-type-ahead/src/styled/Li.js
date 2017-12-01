import styled from 'styled-components';

export default styled.li`
  background: white;
  list-style: none;
  border-bottom: 1px solid #D8D8D8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;

  &:nth-child(even) {
    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
    background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);
  }

  &:nth-child(odd) {
    transform: perspective(100px) rotateX(-3deg) translateY(3px);
    background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
  }
`
