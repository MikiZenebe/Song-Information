import styled from "@emotion/styled";

interface btnProps {
  update: string;
  delete: boolean;
}

export const Container = styled.div`
  max-width: 600px;
  background-color: #18151f;
  color: #ffffff;
  width: auto;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;

  @media (max-width: 850px) {
    padding: 50px 30px;
  }
`;
export const Table = styled.div`
  margin-top: 10%;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #493f3f87;
  cursor: pointer;

  td,
  th {
    padding: 15px 25px;

    @media (max-width: 750px) {
      padding: 15px 25px;
    }
  }

  tr:nth-child(even) {
    background-color: #493f3f87;
  }
  tr:hover {
    background-color: #f8426f;
    transition: all 0.4s ease-in-out;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #3a3349;
  }
`;

export const DetailBtn = styled.button<btnProps>`
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${(props) => (props.update ? "green" : "")};
  background: ${(props) => (props.delete ? "red" : "")};
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0px;
`;
