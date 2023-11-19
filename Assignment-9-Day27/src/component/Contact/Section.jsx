/* eslint-disable react/prop-types */
import './Contact.css';
function Section({ teksSection, formInput }) {
  return (
    <div>
      <section className="container contact">
        <div className="title-header text-center">
          {teksSection.map((item, index) => (
            <div key={index}>{index === 0 ? <h1 key={item}>{item}</h1> : <p>{item}</p>}</div>
          ))}
        </div>
        <div>
          <form>
            {formInput.map((item) => (
              <div
                key={item}
                className="mb-3"
              >
                <label
                  className="form-label"
                  
                >
                  {item}
                </label>
                <input key={item} className="form-control"/>
              </div>
            ))}
            <button
              type="submit"
              className="button-submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Section;
