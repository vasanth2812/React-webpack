/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import {useEffect, useState} from 'react';
import './Categories.scss';
import Api from '../../../services/Api';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Api.categories()
      .then((data) => setCategories(data))
      .catch();
  }, []);
  const categoriesList = categories.map((category) => {
    const {id, name, imageUrl, description, key} = category;
    return (
      <li key={id} className="card-wrap">
        <div className="image-wrap">
          <img
            src={
              require(`../../../../static/images/category/${imageUrl}`).default
            }
            alt={name}
          />
        </div>
        <div className="text-wrap">
          <h2>{name}</h2>
          <p>{description}</p>
          <button className="explore-btn" type="button">
            Explore {key}
          </button>
        </div>
      </li>
    );
  });
  return (
    <div className="categories-wrap">
      <div className="container">
        <ul className="clearfix">{categoriesList}</ul>
      </div>
    </div>
  );
};

export default Categories;
