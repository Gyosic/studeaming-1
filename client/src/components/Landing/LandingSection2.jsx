import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-width: 330px;
  height: calc(100vh - 69.28px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  #section2-content {
    display: flex;
    align-items: flex-start;
    gap: 40px;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`;

const ImgContainer = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid black;
  /* background-image: url(${(props) => props.img}); */
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 600px) {
    width: 330px;
    height: 198px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 900px) {
    align-items: center;
    order: -1;
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--color-black);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
  }

  #stream-description-container {
    @media screen and (max-width: 900px) {
      align-items: center;
    }
  }

  #stream-description {
    margin: 0.2rem 0;
    display: flex;
    align-items: flex-start;
  }
`;

const StyledCheck = styled(ImCheckmark)`
  color: var(--color-main-100);
  margin: 0.2rem 1rem 0.2rem 0;
  display: inline-block;

  + span {
    display: inline-block;
  }
`;

function LandingSection2() {
  return (
    <Container>
      <div id="section2-content">
        <ImgContainer />
        <TextContainer>
          <h2>실시간 스터디윗미</h2>
          <h3>공부하는 모습을 실시간으로 송출해보세요</h3>
          <div id="stream-description-container">
            <div id="stream-description">
              <StyledCheck />
              <span>누구든 스터디머가 될 수 있습니다!</span>
            </div>
            <div id="stream-description">
              <StyledCheck />
              <span>
                <div>ASMR 찾아다니지 마세요</div>
                <div>제공되는 백색소음을 선택해서 재생할 수 있습니다</div>
              </span>
            </div>
            <div id="stream-description">
              <StyledCheck />
              <span>
                <div>서로에게 응원을 보낼 수 있는</div>
                <div>클린한 채팅 기능이 준비되어있습니다</div>
              </span>
            </div>
          </div>
        </TextContainer>
      </div>
    </Container>
  );
}

export default LandingSection2;
