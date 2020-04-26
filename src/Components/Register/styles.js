import styled from 'styled-components';

export const Wrapper = styled.div`
  .background {
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    text-align: center;
  }

  .registration-window {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-image: linear-gradient(#6786dd, #5471c2);
    border-radius: 8%;
    padding: 10px 20px 20px;
    text-align: center;
    color: #ffffff;
    margin: 0px 0px 280px;
  }

  .inputs {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .small-button {
    border-radius: 5px;
    font-size: 0.9rem;
    border-color: #d8d8d8;
    border: 2px;
    margin: 8px 3px 50px;
    padding: 7px 12px 5px;
    color: #445da1;
  }
  .input-box {
    border: 2px;
    margin: 4px;
    padding: 8px 18px;
    border-radius: 5px;
  }
  .spacer {
    height: 30%;
    width: 100%;
  }

  h2 {
    padding: 5px 5px 2px;
    margin: 10px;
    color: #ffffff;
  }
`;
