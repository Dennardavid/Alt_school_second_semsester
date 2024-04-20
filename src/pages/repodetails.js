import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import "../App.css";

function RepoDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/Dennardavid/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  }, []);

  return (
    <div id="repodetail">
      <Navbar />
      <div className="repodetail-card">
        <section className="repo_card">
          <h1 className="repo-name">{details.name}</h1>
          <div className="repo-mini-details">
            <p>Stars: {details.stargazers_count}</p>
            <p>Watch: {details.watchers}</p>
            <p>Forks: {details.forks}</p>
            <p>
              Main Language:{" "}
              {details.language === null ? "none" : details.language}
            </p>
            <p>
              License: {details.license === null ? "none" : details.license}
            </p>
            <p>Date created: {details.created_at}</p>
            <p>Visibility: {details.visibility}</p>
            <p>
              <a
                href={`https://github.com/${details.full_name}`}
                target="_blank"
              >
                View on Github
              </a>
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default RepoDetails;