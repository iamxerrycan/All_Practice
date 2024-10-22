# Comprehensive Git Commands and Functions

### 1) What is `git init`?
`git init` is a command used to initialize a new Git repository in the current directory. It sets up all necessary files that Git uses to keep track of the project.

---

### 2) What is `git clone`?
`git clone <repository_url>` is used to make a copy of an existing repository into a new directory. This can clone repositories from remote sources like GitHub.

---

### 3) What is `git status`?
`git status` shows the current state of the working directory and staging area. It lists any modified files, untracked files, and staged changes.

---

### 4) What is `git add`?
`git add <file_or_directory>` adds a file or directory to the staging area in preparation for a commit. This command doesn’t actually commit the changes yet.

---

### 5) What is `git commit`?
`git commit -m "message"` takes all staged changes and commits them to the repository with a log message describing what was changed.

---

### 6) What is `git log`?
`git log` is used to view the commit history of a repository. It shows the commits made on the current branch in reverse chronological order.

---

### 7) What is `git rm`?
`git rm <file>` is used to remove files from the working directory and staging area. This also schedules the file to be removed in the next commit.

---

### 8) What is `git mv`?
`git mv <old_name> <new_name>` renames or moves a file within a Git repository. It updates the index to reflect the new file location.

---

### 9) What is `git branch`?
`git branch` shows a list of all the branches in the repository. It highlights the current branch you are working on.

---

### 10) What is `git branch <branch_name>`?
This command creates a new branch in the repository, but it doesn't switch to the new branch.

---

### 11) What is `git checkout <branch_name>`?
`git checkout <branch_name>` switches to the specified branch. It updates the working directory to match the branch.

---

### 12) What is `git checkout -b <branch_name>`?
This command creates a new branch and switches to it immediately, combining the functions of `git branch` and `git checkout`.

---

### 13) What is `git merge`?
`git merge <branch_name>` combines the changes from one branch into the current branch. Git tries to merge changes automatically.

---

### 14) What is `git branch -d`?
`git branch -d <branch_name>` deletes a branch locally if it is no longer needed. 

---

### 15) What is `git remote add`?
`git remote add <remote_name> <remote_url>` connects a local repository to a remote one. This allows pushing and pulling of code.

---

### 16) What is `git fetch`?
`git fetch <remote_name>` downloads updates from a remote repository but does not merge them into your working branch.

---

### 17) What is `git pull`?
`git pull <remote_name> <branch_name>` fetches updates from a remote repository and merges them into the current branch.

---

### 18) What is `git push`?
`git push <remote_name> <branch_name>` sends your commits from the local repository to the remote repository.

---

### 19) What is `git stash`?
`git stash` temporarily stores changes that you don't want to commit yet. It allows you to switch branches or work on something else without committing.

---

### 20) What is `git stash apply`?
`git stash apply` retrieves the most recent stashed changes and applies them to your current working directory.

---

### 21) What is `git stash list`?
`git stash list` shows all the stashed changes in your repository.

---

### 22) What is `git stash drop`?
`git stash drop` removes the latest stash entry or a specific stash if specified.

---

### 23) What is `git revert`?
`git revert <commit_hash>` undoes a commit by creating a new commit that reverses the changes of the target commit.

---

### 24) What is `git reset`?
`git reset --hard <commit_hash>` moves the HEAD pointer to a specific commit and discards all changes after that commit, including those in the working directory.

---

### 25) What is `git reset <file>`?
This command removes a file from the staging area, undoing the `git add` command, without changing the working directory.

---

### 26) What is `git commit --amend`?
This allows you to modify the previous commit message or add additional changes to the last commit.

---

### 27) What is `git tag`?
`git tag <tag_name>` creates a tag at the current commit, allowing you to mark specific points in history, like releases.

---

### 28) What is `git tag -d`?
This command deletes a tag locally.

---

### 29) What is `git push <remote_name> <tag_name>`?
It pushes the specified tag to the remote repository.

---

### 30) What is `git rebase`?
`git rebase <branch_name>` moves or applies commits from the current branch to another, rewriting the commit history.

---

### 31) What is `git rebase -i`?
This command allows you to interactively rebase, giving you the option to squash, edit, or drop commits.

---

### 32) What is `git cherry-pick`?
`git cherry-pick <commit_hash>` applies the changes from a specific commit onto the current branch, without merging all changes from that branch.

---

### 33) What is `git config`?
`git config --global user.name "Your Name"` and `git config --global user.email "your.email@example.com"` set your Git user information for commits.

---

### 34) What is `git config --list`?
Displays all configuration settings currently set for Git on your system.

---

### 35) What is `git alias`?
Allows you to create shortcuts for Git commands. Example:
```bash
git config --global alias.co 'checkout'


# Additional Git Commands and Functions

### 39) What is `git reflog`?
`git reflog` shows the history of all references to the HEAD in your repository. This can be useful for recovering lost commits.

---

### 40) What is `git clean`?
`git clean -f` is used to remove untracked files from your working directory. It’s helpful for cleaning up your project.

---

### 41) What is `git bisect`?
`git bisect` is a binary search tool used to find the commit that introduced a bug. You mark known good and bad commits, and Git will help find the problematic one.

---

### 42) What is `git archive`?
`git archive` creates a zip or tarball archive of the contents of a specified commit or branch, useful for exporting source code without Git history.

---

### 43) What is `git cherry`?
`git cherry` is used to find which commits exist on one branch but not on another, helpful in manual cherry-picking or merge operations.

---

### 44) What is `git grep`?
`git grep <pattern>` searches for text patterns in tracked files in your Git repository.

---

### 45) What is `git describe`?
`git describe` gives a human-readable name for a commit, showing the closest tag along with the number of additional commits and a short commit hash.

---

### 46) What is `git submodule`?
`git submodule` is used to manage external repositories within your main repository. It allows you to keep a separate Git repository inside another one.

---

### 47) What is `git shortlog`?
`git shortlog` summarizes git log output, grouping commits by author, and showing commit messages. It’s often used to get a high-level view of contributions.

---

### 48) What is `git bundle`?
`git bundle` allows you to bundle your Git repository into a single file for transport or backup purposes. It’s like a portable version of `git clone`.

---

### 49) What is `git fsck`?
`git fsck` checks the integrity of your Git file system, ensuring that there are no corrupt objects or references.

---

### 50) What is `git instaweb`?
`git instaweb` launches a temporary web server and serves the Git repository’s history for easy browsing from your browser.

---

### 51) What is `git blame -C`?
`git blame -C` allows you to track code that was copied or moved from another file or part of a file. It’s more advanced than the regular `git blame`.

---

### 52) What is `git whatchanged`?
`git whatchanged` shows a log of changes, similar to `git log`, but it focuses on file-level changes.

---

### 53) What is `git send-email`?
`git send-email` sends patches created with `git format-patch` via email. This is commonly used in open-source projects.

---

### 54) What is `git apply`?
`git apply` is used to apply patches created by other Git users or tools to your working directory.

---

### 55) What is `git show-ref`?
`git show-ref` shows references in your repository, such as branches and tags, along with their associated commit hashes.

---

### 56) What is `git diff --staged`?
`git diff --staged` shows the changes between the staging area and the last commit, useful for reviewing what’s about to be committed.

---

### 57) What is `git log --oneline`?
`git log --oneline` condenses the commit log into one line per commit, showing just the commit hash and message.

---

### 58) What is `git blame --reverse`?
`git blame --reverse` shows which commit *removed* lines of code, useful for understanding why code was deleted.

---

### 59) What is `git mergetool`?
`git mergetool` invokes a visual tool to help resolve merge conflicts by showing differences side by side.

---

### 60) What is `git config --global color.ui auto`?
This command enables colorization in the Git command-line interface, making it easier to read the output.

---

### 61) What is `git log --graph`?
`git log --graph` visualizes your branch history in a graphical form, showing how branches diverged and merged over time.

---

### 62) What is `git pull --rebase`?
`git pull --rebase` updates your local branch by applying your commits on top of the remote commits, avoiding a merge commit.

---

### 63) What is `git worktree`?
`git worktree` allows you to create separate working directories for different branches, so you can work on multiple branches simultaneously.

---

### 64) What is `git rebase --continue`?
This command is used during an interactive rebase. It continues the rebase after resolving conflicts.

---

### 65) What is `git fetch --prune`?
`git fetch --prune` removes any branches on the remote that have been deleted, helping to keep your local repository clean.

---

### 66) What is `git diff --name-only`?
`git diff --name-only` shows only the names of files that have been changed, not the actual content differences.

---

### 67) What is `git reset --soft`?
`git reset --soft <commit_hash>` resets the current branch to the specified commit, keeping changes in the staging area.

---

### 68) What is `git reset --mixed`?
`git reset --mixed <commit_hash>` resets the branch to the specified commit, leaving changes unstaged in the working directory.

---

### 69) What is `git remote show`?
`git remote show <remote_name>` displays detailed information about a specific remote repository.

---

### 70) What is `git remote prune`?
`git remote prune <remote_name>` removes remote-tracking references that no longer exist on the remote repository.

---

### 71) What is `git gc`?
`git gc` is used to clean up unnecessary files and optimize the local repository, reclaiming space.

---

### 72) What is `git filter-branch`?
`git filter-branch` allows you to rewrite history by modifying, removing, or filtering commits. This is often used for making large-scale changes across the repository.

---

### 73) What is `git blame --incremental`?
`git blame --incremental` is a faster, lower-memory version of `git blame` that works incrementally on larger files.

---

### 74) What is `git symbolic-ref`?
`git symbolic-ref` shows or updates symbolic references, often used to check or set the current branch.

---

### 75) What is `git diff --cached`?
`git diff --cached` shows the differences between the staging area and the last commit (the same as `--staged`).

---

### 76) What is `git range-diff`?
`git range-diff` compares two ranges of commits, showing differences in both code and commit messages.

---

### 77) What is `git pull --ff-only`?
`git pull --ff-only` performs a fast-forward merge if possible, refusing to merge if it requires anything other than a fast-forward.

---

## Contribution
This list provides additional Git commands beyond the basics. Feel free to add any commands or improve the explanations.
