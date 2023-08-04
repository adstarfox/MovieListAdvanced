import { Formik } from "formik";
import axios from 'axios'

const MovieReview = () => {
  const initialValues = {
    title: "",
    date: "",
    rating: "",
    review: "",
  };

  const onSubmit = (values) => {
    axios.post('http://localhost:5050/review', values)
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form>
            <input
              type="text"
              placeholder="Movie Title"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
            />
            <div className="ratingBtns">
              <label className="radio-btns">
                1
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  onChange={handleChange}
                />
              </label>
              <label className="radio-btns">
                2
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  onChange={handleChange}
                />
              </label>
              <label className="radio-btns">
                3
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  onChange={handleChange}
                />
              </label>
              <label className="radio-btns">
                4
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  onChange={handleChange}
                />
              </label>
              <label className="radio-btns">
                5
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  onChange={handleChange}
                />
              </label>
            </div>
            <textarea
              name="review"
              value={values.review}
              id="TextBox"
              onChange={handleChange}
              cols="50"
              rows="10"
              placeholder="Share your Thoughts on the movie"
            ></textarea>
            <button id="save-btn" onClick={handleSubmit}>Save</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default MovieReview;
