import { Tables } from "../styles/tableStyle";

export default function Table() {
  return (
    <div className="container">
      <Tables>
        <div className="table-header">
          <div className="header__item">
            <a id="name" className="filter__link" href="#">
              Name
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Wins
            </a>
          </div>
          <div className="header__item">
            <a
              id="draws"
              className="filter__link filter__link--number"
              href="#"
            >
              Draws
            </a>
          </div>
          <div className="header__item">
            <a
              id="losses"
              className="filter__link filter__link--number"
              href="#"
            >
              Losses
            </a>
          </div>
          <div className="header__item">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              Total
            </a>
          </div>
        </div>
        <div className="table-content">
          <div className="table-row">
            <div className="table-data">Tom</div>
            <div className="table-data">2</div>
            <div className="table-data">0</div>
            <div className="table-data">1</div>
            <div className="table-data">5</div>
          </div>
          <div className="table-row">
            <div className="table-data">Dick</div>
            <div className="table-data">1</div>
            <div className="table-data">1</div>
            <div className="table-data">2</div>
            <div className="table-data">3</div>
          </div>
          <div className="table-row">
            <div className="table-data">Harry</div>
            <div className="table-data">0</div>
            <div className="table-data">2</div>
            <div className="table-data">2</div>
            <div className="table-data">2</div>
          </div>
        </div>
      </Tables>
    </div>
  );
}
