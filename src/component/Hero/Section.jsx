/* eslint-disable react/prop-types */
import './hero.css';
function Section({textHero }) {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block card">
              {textHero.map((item, index) => (
                <div key={index}>
                  {index === 0 && <h5 className="mb-0 title">{item}</h5>}
                  {index === 1 && <h1 className="subtitle">{item}</h1>}
                  {index === 2 && <p className="text">{item}</p>}
                  {index === 3 && (
                    <a 
                      href="#"
                      className="btn btn-dark"
                    >
                      {item}
                    </a>
 )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div></div>
    </div>
  );
}

export default Section;
