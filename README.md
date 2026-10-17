# GitHub Analyzer CLI

A command-line tool that takes a GitHub username and generates a quick report on their public repositories. 

Built to practice asynchronous JavaScript, REST API integration, and data processing using Node.js.

## Features

- Fetches public repositories for any GitHub user.
- Calculates total public repository count.
- Finds the most starred repository.
- Finds the most forked repository.
- Breaks down the repositories by programming language.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher) - Required for native `fetch` API.

## Installation

1. Clone the repository:
   git clone https://github.com/IzzyCodeX/github-analyzer-cli.git

2. Navigate into the project directory:
    cd github-analyzer-cli

## Usage
Run the script by passing a github username as an argument:
    node github-analyzer.js octocat

## Example Output
Here is an example of the tool in action:

=== Github Analyzer: octocat ===

Total Repos: 8
Most Starred: Spoon-Knife (14118 stars)
Most Forked: Spoon-Knife (160188 forks)

Languages:
- Ruby: 1 repos
- CSS: 1 repos
- HTML: 1 repos

============================

## Built With 
* Node.js
* Javascript (Async/Await, Promises, FecthAPI)