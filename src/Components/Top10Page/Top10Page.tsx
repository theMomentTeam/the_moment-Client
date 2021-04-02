import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import { LeftBox } from "../../Styles/LeftBox";
import styled from "styled-components";

const heading: string[] = ["학교가 불편한 순간 TOP 10"];
const explanation: string[] = [
  "공감이 되는 의견이 있다면 좋아요를 눌러주세요.",
  "좀 더 적극적으로 개선할 수 있도록 노력하겠습니다.",
];

const Top10Page: React.FC = () => {
  return (
    <LeftBox>
      <PageExplanation heading={heading} explanation={explanation} />
      <Btn>
        <Link to="/Leave_opinion">의견 남기기</Link>
      </Btn>
    </LeftBox>
  );
};

const Btn = styled.button`
  margin-top: 50px;
  background-color: #434c9c;
  a {
    color: white;
  }
`;

export default Top10Page;