import styled from "styled-components";

interface ImprovmentProps {
  color: string;
}

export const ImprovmentBox = styled.div<ImprovmentProps>`
  background-color: ${(props) => props.color};
  width: 35vw;
  height: 300px;
  border-radius: 12px;
  padding: 3em 3em 2em 3em;
  margin-bottom: 33px;
`;

export const ImprovmentContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  padding: 1em 0 1em 1em;
`;

export const ImprovmentHeading = styled.h2`
  color: white;
`;

export const AboutBtn = styled.button`
  color: white;
  background-color: #92929235;
  width: 10em;
`;

export const ImprovmentImg = styled.div`
  float: right;
  margin-top: -150px;
`;
