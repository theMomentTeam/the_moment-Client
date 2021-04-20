import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import { LeftBox } from "../../GlobalStyle/LeftBox";
import axios from "axios";
import GoodBtn from "../GoodBtn/GoodBtnPresenter";
import * as S from "./styled";
import { useEffect, useState } from "react";

const heading: string[] = ["학교가 불편한 순간", "TOP 10"];
const explanation: string[] = [
  "공감이 되는 의견이 있다면 좋아요를 눌러주세요.",
  "좀 더 적극적으로 개선할 수 있도록 노력하겠습니다.",
];

const link = 'httpdasfdsfdasf';

const Top10Page: React.FC = () => {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchList = async () => {
    try {
      setList(null);
      setLoading(true);
      setError(null);
      const response = await axios.get(link);
      setList(response.data)
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchList();
  }, []);

  // return

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>
  if (!list) return null;

  return (
    <S.TopTenWrapper>
      <LeftBox>
        <PageExplanation heading={heading} explanation={explanation} />
        <S.Btn>
          <Link to="/Leave_opinion">의견 남기기</Link>
        </S.Btn>
      </LeftBox>
      <S.RightBox>
        {list.map(top10 => (
          <S.TenIssues>
            <span>
              <span>{top10.id}위</span>
              <article>
                {top10.content}
              </article>
            </span>
            <span>
              <button>답변{top10.option}</button>
              <GoodBtn Background={false} />
            </span>
          </S.TenIssues>
        ))}
      </S.RightBox>
    </S.TopTenWrapper>
  );
};

export default Top10Page;
