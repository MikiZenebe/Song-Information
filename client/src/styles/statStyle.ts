import styled from "@emotion/styled";

export const StatContainer = styled.div`
  background-color: #2c3e66;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 0px auto;

  @media (max-width: 450px) {
    /* padding: 50px 30px;
   
    */
    width: 300px;
  }

  h3 {
    text-align: center;
    color: white;
  }
`;
