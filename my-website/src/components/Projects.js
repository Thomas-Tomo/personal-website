import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "react-bootstrap";
import styles from "../assets/styles/Projects.module.css";

const Projects = () => {
  const [selectedRepos, setSelectedRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get("https://api.github.com/user/repos", {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
          params: {
            per_page: 100,
          },
        });

        // Filter out only the repositories I want to display
        const filteredRepos = response.data.filter((repo) =>
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

        // Fetch details for each repository (star count, commit count, languages, and homepage)
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

        // Sort repositories by commit count in descending order
        reposWithDetails.sort((a, b) => b.commitCount - a.commitCount);

        setSelectedRepos(reposWithDetails);
      } catch (error) {
        console.error("Error fetching repositories: ", error);
      }
    };

    fetchRepos();
  }, []);

  const fetchStarCount = async (owner, repoName) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repoName}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      return response.data.stargazers_count;
    } catch (error) {
      console.error("Error fetching star count: ", error);
      return 0;
    }
  };

  const fetchCommitCount = async (owner, repoName) => {
    try {
      let page = 1;
      let totalCount = 0;
      while (true) {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repoName}/commits`,
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
            params: {
              per_page: 100,
              page: page,
            },
          }
        );
        const commits = response.data;
        totalCount += commits.length;
        if (commits.length < 100) {
          break; // No more pages available
        }
        page++;
      }
      return totalCount;
    } catch (error) {
      console.error("Error fetching commit count: ", error);
      return 0;
    }
  };

  const fetchLanguages = async (owner, repoName) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repoName}/languages`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching languages: ", error);
      return {};
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Projects</h1>
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
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                  {repo.homepage && (
                    <Button
                      variant="outline-light"
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
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
    </div>
  );
};

export default Projects;
