import styled from "@emotion/styled";

export const StatContainer = styled.div`
  background-color: white;
  width: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0px auto;

  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 10px;

  @media (max-width: 750px) {
    /* padding: 50px 30px;
   
    */
    grid-template-columns: 1fr;
    width: 300px;
  }

  h3 {
    text-align: center;
    color: #101727;
    text-decoration: underline;
  }

  div {
    padding: 10px;
  }
`;
