import styled from "@emotion/styled";

export default function SongList() {
  return (
    <Container>
      <div>
        <div>
          <h1>Genres</h1>
          <Genre>
            <p>Hip Hop</p>
            <p>Hip Hop</p> <p>Hip Hop</p> <p>Hip Hop</p> <p>Hip Hop</p>
          </Genre>
        </div>

        <div>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Zewazwe</td>
                <td>Abdu Kiyar</td>
                <td>Anbessa</td>
                <td>Batti</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  background-color: #18151f;
  color: #ffffff;
  width: auto;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 80px;

  @media (max-width: 850px) {
    padding: 50px 30px;
  }
`;
const Table = styled.div`
  margin-top: 10%;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #493f3f87;
  cursor: pointer;

  td,
  th {
    padding: 25px;

    @media (max-width: 750px) {
      padding: 25px;
    }
  }

  tr:nth-child(even) {
    background-color: red;
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

const Genre = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  p {
    border: 1px solid #f8426f;
    padding: 5px;
    border-radius: 5%;
  }
  p:hover {
    background-color: #f8426f;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;
