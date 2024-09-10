import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1000px;
  background-color: white;
  border: 1px solid;
  border-radius: 10px;
  color: #f2f2f2;
  width: auto;
  height: auto;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;

  @media (max-width: 850px) {
    padding: 50px 30px;
    margin: 40px auto;
    width: auto;
  }
  .detail {
    color: white;
    text-align: center;
  }

  /* @media (max-width: 750px) {
    margin: auto;
    width: 400px;
  } */

  .genre {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .page-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  button {
    font-weight: bold;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    width: 50px;
    height: 35px;
    border: none;
    background-color: #00bbd8;
    display: flex;
    justify-content: center;
    align-items: center;

    :disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }

  span {
    margin: 0px 10px;
    color: #18151f;
  }
`;
export const Table = styled.div`
  margin-top: 5%;
  border-collapse: collapse;
  width: 800px;
  height: auto;
  border: 1px solid #493f3f87;
  cursor: pointer;
  display: table;
  margin: auto;

  @media (max-width: 750px) {
    margin: auto;
    width: 500px;
    overflow-x: hidden;
    display: table;
  }

  @media (max-width: 500px) {
    margin: auto;
    width: 70%;
    overflow-x: scroll;
    display: block;
  }

  td,
  th {
    padding: 10px 25px;
    @media (max-width: 750px) {
      padding: 15px 25px;
    }
  }

  tr:nth-child(even) {
    background-color: #33456b;
    color: white;
  }

  tr:nth-child(odd) {
    background-color: #097f9e;
    color: white;
  }
  tr:hover {
    background-color: #00bbd8;
    transition: all 0.4s ease-in-out;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #18151f;
    color: #00bbd8;
  }
`;

export const DetailBtn = styled.div`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  width: auto;
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0px;
  width: 100%;
  margin: 0px, auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
