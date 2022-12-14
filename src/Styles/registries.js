import styled from "styled-components";

const AreaRegistriesStyle = styled.div`
  position: relative;
  background-color: white;
  height: calc(100vh - 240px);
  border-radius: 5px;
  margin: 22px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 10px 11px 8px 12px;
  p {
    color: #868686;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
  }
  > div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    font-family: "Raleway", sans-serif;
    span:first-child {
      font-weight: bold;
      font-size: 17px;
    }
  }
`;
export default AreaRegistriesStyle;
