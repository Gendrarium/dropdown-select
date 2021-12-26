import useForm from '../../hooks/useForm';
import Droplist from '../Droplist/Droplist';
import './App.scss';

const App: React.FC<{}> = () => {
  const { values, setValues } = useForm<string>();
  const arrayForDroplist = [
    { key: 'Вариант 1', text: 'Вариант 1' },
    { key: 'Вариант 2', text: 'Вариант 2' },
    { key: 'Вариант 3', text: 'Вариант 3' },
    { key: 'Вариант 4', text: 'Вариант 4' },
    { key: 'Вариант 5', text: 'Вариант 5' },
  ];
  const arrayForDroplistTwo = [
    { key: 'Мужской', text: 'Мужской' },
    { key: 'Женский', text: 'Женский' },
  ];
  const arrayForDroplistThree = [
    { key: 'Пицца', text: 'Пицца' },
    { key: 'Суши', text: 'Суши' },
  ];

  return (
    <>
      <header className="header">
        <h1 className="header__title">Dropdown-select</h1>
      </header>
      <main className="main root__main">
        <section className="section main__section">
          <h2 className="section__title">Дропдаун с поиском</h2>
          <div className="section__container">
            <Droplist
              className="section__droplist"
              inputClass="input input_with-arrow"
              selectId="firstDroplist"
              values={values}
              placeholder="Выберите значение"
              setValues={setValues}
              name="firstDroplist"
              array={arrayForDroplist}
            />
            <div className="section__subtitle-container">
              <h3 className="section__subtitle">Выбранное значение: </h3>
              <p className="section__value">{values.firstDroplist}</p>
            </div>
          </div>
        </section>
        <section className="section main__section">
          <h2 className="section__title">Дропдаун без поиска</h2>
          <div className="section__container">
            <Droplist
              className="section__droplist"
              inputClass="input input_with-arrow"
              selectId="secondDroplist"
              values={values}
              readOnly={true}
              placeholder="Пол"
              setValues={setValues}
              name="secondDroplist"
              array={arrayForDroplistTwo}
            />
            <div className="section__subtitle-container">
              <h3 className="section__subtitle">Выбранное значение: </h3>
              <p className="section__value">{values.secondDroplist}</p>
            </div>
          </div>
        </section>
        <section className="section main__section">
          <h2 className="section__title">
            Дропдаун с добавлением собственного варианта
          </h2>
          <div className="section__container">
            <Droplist
              className="section__droplist"
              inputClass="input input_with-arrow"
              selectId="thirdDroplist"
              values={values}
              placeholder="Любимая еда"
              withPersonal={true}
              setValues={setValues}
              name="thirdDroplist"
              array={arrayForDroplistThree}
            />
            <div className="section__subtitle-container">
              <h3 className="section__subtitle">Выбранное значение: </h3>
              <p className="section__value">{values.thirdDroplist}</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__text">&#169; Gendrarium</p>
        </div>
      </footer>
    </>
  );
};

export default App;
