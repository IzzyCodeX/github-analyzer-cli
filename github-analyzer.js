async function fetchUserRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    const repos = await response.json()
    return repos;
}

const username = process.argv[2]
if (!username) {
    console.log("Please provide a GitHub username.");
    console.log("Usage: node github-analyzer.js <username>");
    process.exit(1);
}
console.log(username)

async function main() {
    const repos = await fetchUserRepos(username);
    console.log(`Total Repos: ${repos.length}`);
}
main();
