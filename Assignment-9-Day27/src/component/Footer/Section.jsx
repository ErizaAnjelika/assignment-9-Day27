/* eslint-disable react/prop-types */
import './Footer.css'
function Section({ colPertama, colKedua, colKetiga, colKeempat, colKelima }) {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            {colPertama.map((item) => (
              <div
                key={item}
                className="footer-about"
              >
                <div className="footer-logo">
                  <h1>{item.title}</h1>
                </div>
                {item.deskripsi.map((descItem, index) => (
                  <p key={index}>{descItem}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="col-lg-1 offset-lg-1 col-md-3 col-sm-6">
            {colKedua.map((item) => (
              <div
                key={item}
                className="footer-widget"
              >
                <h6>{item.title}</h6>
                <ul className='ps-0'>
                  {item.deskripsi.map((descItem, index) => (
                    <li key={index}><a href="">{descItem}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
            {colKetiga.map((item) => (
              <div
                key={item}
                className="footer-widget"
              >
                <h6>{item.title}</h6>
                <ul className='ps-0'>
                  {item.deskripsi.map((descItem, index) => (
                    <li key={index}> <a href="">{descItem}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
            {colKeempat.map((item) => (
              <div
                key={item}
                className="footer-widget"
              >
                <h6>{item.title}</h6>
                <div className="footer-newsletter">
                  {item.deskripsi.map((descItem, index) => (
                    <form key={index}>
                        {index === 0 && <input type="text" placeholder={descItem}/>}
                        {index ===  1 && <button type="submit">{descItem}</button>}
                    </form>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="footer-copyright-text">
                    <p>&copy;{colKelima}</p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Section;
