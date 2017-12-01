import styled from 'styled-components';

export default styled.span`
  font-size: 15px;
  background: ${props => props.highlighted ? '#ffc600' : ''};
`
