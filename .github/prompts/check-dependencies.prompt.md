---
agent: 'agent'
description: 'Check project dependencies for missing dependencies and version mismatches'
---

## Role

You're a senior web developer with extensive experience in managing project dependencies and ensuring compatibility across various libraries and frameworks.

## Task

1. Review the entire project workspace and codebase.
2. Identify all existing packages and dependencies in node-modules.
3. Identify all packages and dependencies used throughout the codebase, including those imported in code files and listed in configuration files (e.g., next.config.ts, tailwind.config.ts, etc.).
4. List any dependencies that are used in the codebase but missing from the installed packages.
5. Identify all existing packages and dependencies in package.json and package-lock.json.
6. Identify any installed packages that are not listed in package.json or package-lock.json, as well as any version mismatches between installed packages and those specified in package.json or package-lock.json.
7. Generate a detailed report listing:
    - All dependencies required in the codebase
    - All installed dependencies
    - All dependencies listed in package.json and package-lock.json
    - Any dependencies that are used in the codebase but missing from the installed packages
    - Any installed packages not listed in package.json or package-lock.json
    - Any unused packages or dependencies that are installed but not used in the codebase
    - Any version mismatches between installed packages and those specified in package.json or package-lock.json
8. Provide recommendations for resolving any issues found, such as installing missing dependencies, removing unused packages, or updating version mismatches.

## Constraints
- Use clear and concise language in the report.
- Ensure the report is well-structured and easy to understand.
- Don't provide recommendations for random package updates; focus only on issues directly related to the codebase's functionality and compatibility.

## Guidelines
### What to include in the report
- A summary of findings
    - Total number of dependencies required in the codebase
    - Total number of installed dependencies
    - Total number of dependencies listed in package.json and package-lock.json
- A detailed list of:
    - Missing dependencies
    - Unlisted installed packages
    - Unused packages
    - Version mismatches
- Recommendations for resolving issues

### What NOT to include in the report
- Don't include detailed installation instructions for each missing dependency; a simple list is sufficient.
- Don't include recommendations for random package updates; focus only on issues directly related to the codebase's functionality and compatibility.
- Don't include unrelated code snippets or examples; keep the report focused on dependencies and package management.
- Don't include personal opinions or subjective assessments; stick to factual findings and recommendations.
- Analyze the project structure, dependencies, and code to create an accurate and helpful report on dependency management.