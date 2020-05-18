const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        const issueTitle = core.getInput("issue-title");
        const jokeBody = core.getInput("joke");
        const token = core.getInput("repo-token");

        if (!jokeBody) {
            throw `Action input 'joke' is incorrect: "${jokeBody}"`;
        }
        const octokit = new github.GitHub(token);

        const newIssue = await octokit.issues.create({
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
            title: issueTitle,
            body: jokeBody
        });
    } catch (error) {
        console.error(`Execution failed with error: ${error}`)
        core.setFailed(error.message);
    }
}

run();