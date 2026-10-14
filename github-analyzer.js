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
    const mostStarred = getMostStarred(repos)

    console.log(`Total Repos: ${repos.length}`);
    console.log(`Most Starred: ${mostStarred.name} (${mostStarred.stargazers_count} stars)`)
}
main();

function getMostStarred(repos) {
    let mostStarred = repos[0];
    for(let i = 1; i < repos.length; i++){
        if (repos[i].stargazers_count > mostStarred.stargazers_count){
            mostStarred = repos[i]
        }
    }
    return mostStarred;
}

function getMostForked (repos){
    let mostForked = repos[0];
    for(let i = 1; i < repos.length; i++){
        if (repos[i].forks_count > mostForked.forks_count){
            mostForked = repos[i];
        }
    }
    return mostForked
}