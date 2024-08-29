import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 600px;
  background-color: white;
  color: #18151f;
  width: auto;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
  border: 1px solid #695d8561;

  @media (max-width: 850px) {
    padding: 50px 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #f8426f;
  transition: all 0.4s ease-in-out;
  border-radius: 5px;
  font-weight: 600;
  background: #f8426f;

  &:hover {
    width: 100%;
    background: #f8426f;
    color: white;
  }
`;

export const Divs = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #b9a7ac;
  }

  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid #f842707a;
    transition: all 0.4s ease-in-out;
    border-radius: 5px;
    background-color: transparent;
    color: #18151f;
  }

  input:focus {
    width: 100%;
    border: 1px solid #f8426f;
    transition: all 0.4s ease-in-out;
  }
`;
