import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 600px;
  background-color: #101727;
  border-radius: 15px;
  color: #18151f;
  width: auto;
  height: auto;
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

  h1 {
    color: white;
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
  border: 1px solid #91f0ff;
  transition: all 0.4s ease-in-out;
  border-radius: 5px;
  font-weight: 600;
  background: #00bbd8;

  &:hover {
    width: 100%;
    background: #018fa5;
    color: white;
  }
`;

export const Divs = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #c6f7ff;
  }

  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid #00bbd8;
    transition: all 0.4s ease-in-out;
    border-radius: 5px;
    background-color: transparent;
    color: #91f0ff;
  }

  input:focus {
    width: 100%;
    border: 1px solid #91f0ff;
    transition: all 0.4s ease-in-out;
  }
`;
