# Semester Project

Link for the webpage: [PRESS HERE](https://gamedev-rust.vercel.app/).

- [Semester Project](#semester-project)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)

## Project Structure

- **`/semester-project`**: The source code of the main project; source code is placed here for the full-fledged implementation.
- **`/class-projects`**: Results of our mini class semester projects.
- **`/docs`**: Includes any project documentation (our final report in Markdown format or a link to it).
- **`/misc`**: Stores any miscellaneous files related to the project.

## Getting Started

1. **Clone this Repository**: Start by cloning this repository to your local machine.

    ```bash
    git clone https://github.com/lpeliv/HCI HCI
    ```

2. **Organize the Work**: Follow the folder structure outlined above to organize all project files.

3. **Push the Local Repository to This GitHub Repository**

    > NOTE: To be able to push the cloned repository to this repository you should change the remote repository URL to the new repository.

    ```bash
    # Check origin
    git remote -v

    # Update origin
    git remote set-url origin https://github.com/[your-username]/[new-repository-name].git

    # Check updated origin
    git remote -v
    ```

    Finally, push local changes to remote repository:

    ```bash
    git push -u origin main
    ```