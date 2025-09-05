AI Development Team Framework (Codex CLI Edition)

This repository provides a framework for building applications using a team of AI agent personas powered by the Codex CLI. This is a standalone terminal agent that can read, modify, and execute code on your local machine.
1. One-Time Setup

Before you begin, you need to install and configure the Codex CLI. This only needs to be done once.

1. Install the CLI:
Open your terminal (we recommend running inside the Dev Container for this project) and install the tool using npm:

npm install -g @openai/codex

2. Log In:
Run the codex command. It will prompt you to log in with your ChatGPT account. This allows you to use your existing subscription (Plus, Pro, etc.) to power the agent.

codex

3. Set Approval Mode (Recommended):
The agent will ask you to approve actions that modify files or access the network. For working on a project within the safe confines of our Dev Container, we can set it to a more autonomous mode. In the interactive codex prompt, type:

/approvals Auto

This allows the agent to read and write files within the project directory without asking for permission each time.
2. The AI Persona Library

All the specialist AI personas are defined as .md files inside the .codex/personas/ directory. Unlike a chat UI, you "prime" the terminal agent by providing its persona as the first instruction.
3. Quick Start Guide: End-to-End Test

Let's build a simple URL shortener application to test the entire end-to-end workflow.

Step A: Start and Prime the Project Manager

    Open your terminal in the root of this project.

    Run codex to start the interactive session.

    Copy the entire contents of the .codex/personas/project_manager.md file.

    Paste the contents into the terminal and press Enter twice. The agent will now act as the Project Manager and begin the Stakeholder Interview.

Step B: The Stakeholder Interview

The AI Project Manager will now ask you questions. Answer them as follows:

    For Technology Stack: "Use Python with FastAPI for the backend, Vanilla JavaScript for the frontend, and SQLite for the database."

    For Project Folder: "Name the project folder url-shortener."

The PM will then create a full TDD plan and delegate the first task. For example, it might say: "Okay, the plan is created. The first step is for the QA Engineer to write the tests. Please start a new session with the QA Engineer persona and give them this instruction: 'Write the initial failing API tests for a URL shortener as per the project plan.'"

Step C: Delegate to the QA Engineer

    Exit the current session by typing exit.

    Start a new session by running codex.

    Prime the new session by pasting the contents of .codex/personas/qa_engineer.md.

    Give it the specific instruction from the Project Manager.

Step D: Continue the Process

You will continue this loop—receiving instructions from the Project Manager and delegating them to the appropriate specialist—until the entire project is built.
