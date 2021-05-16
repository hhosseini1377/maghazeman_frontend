import styled from "styled-components/macro";

const CardBL = styled.div`
  display: flex;
  flex-direction: column;
  background: #39ceba;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px;
`;
const CardTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 29px;
  color: #fff;
`;
const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 10px 0px;
`;
const Counter = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 51px;
  color: #ffffff;
  padding: 0 5px;
`;
const Caption = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 31px;
  color: #ffffff;
`;
export { Caption, Counter, CardBody, CardTitle, CardBL };
