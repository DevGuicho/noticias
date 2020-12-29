import React from "react";

const Noticia = ({ noticia }) => {
  const { url, urlToImage, title, description, source } = noticia;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {urlToImage && (
          <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
          </div>
        )}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blanck"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver noticas completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
