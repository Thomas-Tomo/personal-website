import axios from "axios";

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
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories: ", error);
    return [];
  }
};

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

export { fetchRepos, fetchStarCount, fetchCommitCount, fetchLanguages };
