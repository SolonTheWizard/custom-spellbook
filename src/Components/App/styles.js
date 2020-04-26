import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #222736;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }

  h1 {
    margin: 5px;
    padding: 5px;
    font-size: 1rem;
    color: #ffffff;
  }

  .message {
    margin: 5px;
    padding: 30px 15px 30px;
    color: #ffffff;
    font-size: 0.8rem;
  }
`;
