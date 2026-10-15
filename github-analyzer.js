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
    const mostStarred = getMostStarred(repos);
    const mostForked = getMostForked(repos);
    const counts = getLanguageBreakdown(repos);

    console.log(`\n=== Github Analyzer: ${username} ===\n`)
    console.log(`Total Repos: ${repos.length}`);
    console.log(`Most Starred: ${mostStarred.name} (${mostStarred.stargazers_count} stars)`)
    console.log(`Most Forked: ${mostForked.name} (${mostForked.forks_count} forks)`)
    console.log(`\nLanguages:`);
    for (const language in counts) {
        console.log(`- ${language}: ${counts[language]} repos`)
    }
    console.log("\n============================")
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

function getLanguageBreakdown(repos){
    let counts = {};
    for (let i = 0; i < repos.length; i++){
        const language = repos[i].language;

        if(!language){
            continue;
        }

        if(counts[language]){
            counts[language]++;
        } else {
            counts[language] = 1;
        }
    }
    return counts;
}