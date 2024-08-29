import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <Wrapper>
      <p>
        Welcome to{" "}
        <span style={{ fontSize: "25px", color: "#f8426f" }}>Dankira</span>,
        your go-to app for managing info of all your favorite songs! keep track
        of your personal collection.
      </p>
      <GlassContainer>
        <Link to="/">
          {" "}
          <h4>Let's Start</h4>
        </Link>
      </GlassContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ffffff;
  backdrop-filter: blur(10px);
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  color: #05000e;

  p {
    width: 100%;
    text-align: center;
  }
`;

const GlassContainer = styled.button`
  background: #d30337d1;
  border-radius: 5px;
  box-shadow: 0 8px 32px 0 #d30337d1;
  backdrop-filter: blur(5px);
  text-align: center;
  border: 0px;
  padding: 1px 40px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 32px 0 #d30337f0;
  }

  &:active {
    transform: scale(0.95);
    background: #b7022fd1;
    box-shadow: 0 4px 16px 0 #b7022fd1;
  }
`;
