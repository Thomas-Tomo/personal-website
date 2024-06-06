import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "../assets/styles/Projects.module.css";
import Loader from "../utils/Loader";
import {
  fetchRepos,
  fetchStarCount,
  fetchCommitCount,
  fetchLanguages,
} from "../utils/githubApi";

const Projects = () => {
  const [selectedRepos, setSelectedRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      const repos = await fetchRepos();
      const filteredRepos = repos.filter((repo) =>
        [
          "devexchange",
          "the_fork_awakens",
          "Lunar-Escape",
          "charades",
          "woodland-whispers-retreat",
          "hangman",
          "capital-cities",
        ].includes(repo.name)
      );

      const reposWithDetails = await Promise.all(
        filteredRepos.map(async (repo) => {
          const starCount = await fetchStarCount(repo.owner.login, repo.name);
          const commitCount = await fetchCommitCount(
            repo.owner.login,
            repo.name
          );
          const languages = await fetchLanguages(repo.owner.login, repo.name);
          return { ...repo, starCount, commitCount, languages };
        })
      );

      reposWithDetails.sort((a, b) => b.commitCount - a.commitCount);
      setSelectedRepos(reposWithDetails);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Function to handle navigation to GitHub repository
  const handleGitHubClick = (url) => {
    window.open(url, "_blank");
  };

  // Function to handle navigation to live site
  const handleLiveSiteClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>
      {loading ? (
        <Loader />
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {selectedRepos.map((repo) => (
            <Col key={repo.id}>
              <Card className={styles.card}>
                <Card.Body className={styles.cardBody}>
                  <Card.Title>{repo.name}</Card.Title>
                  <Card.Text>
                    <strong>Description:</strong>{" "}
                    {repo.description || "No description provided"}
                  </Card.Text>
                  <Card.Text>
                    <strong>Stars:</strong> {repo.starCount}
                  </Card.Text>
                  <Card.Text>
                    <strong>Commits:</strong> {repo.commitCount}
                  </Card.Text>
                  <Card.Text>
                    <strong>Languages:</strong>{" "}
                    {Object.keys(repo.languages).join(", ")}
                  </Card.Text>
                  <div className={styles.buttonsContainer}>
                    <Button
                      variant="outline-light"
                      onClick={() => handleGitHubClick(repo.html_url)} // Call handleGitHubClick with repository URL
                    >
                      View on GitHub
                    </Button>
                    {repo.homepage && (
                      <Button
                        variant="outline-light"
                        onClick={() => handleLiveSiteClick(repo.homepage)} // Call handleLiveSiteClick with live site URL
                      >
                        View Live Site
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Projects;
