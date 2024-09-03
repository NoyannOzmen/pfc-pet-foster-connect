## Récupérer les changements de la branche dev en étant sur sa branche feature

"It's a good practice for the person B to get new changes into their branch b as soon as feasible after person A pushes the changes to dev/main.

This is so that person B works on latest code and their eventual merge to dev/main is easy.

### Option 1, pull
- Commit all changes to branch feature_branch (git status shows clean)
- git checkout dev
- git pull - this fetches (downloads) the changes onto B's computer (into a branch origin/dev) and merges these changes into the currently checked out local branch (in this case branch dev). This operation should normally be a 'fast-forward' (so no merge conflicts)
- git checkout feature_branch
- git merge dev - this merges changes from b's local dev to the feature_branch.
- git mergetool - resolve conflicts
- git commit - commit your merge

With this option b's both local dev and feature_branch have latest changes.

### Option 2, fetch

- Commit all changes to branch feature_branch (git status shows clean)
- git fetch origin dev - this downloads latest changes to dev, but doesn't merge them to local dev
- git merge origin/dev - this merges changes from the downloaded version of dev to the feature_branch.

In this scenario b's local feature_branch will have the most recent changes from dev as they are on the remote repo and their local dev will not have these changes. This is OK, since b isn't working on dev, (s)he's working on feature_branch."

from : https://stackoverflow.com/questions/52107252/how-to-take-latest-changes-from-dev-branch-to-my-current-branch

## Supprimer les branches locales qui n'existent plus sur github

- D'abord __git fetch -p__ pour récupérer le statut des branches remote

  - git branch -vv | grep ': gone]'|  grep -v "\*" | awk '{ print $1; }' | xargs -r git branch -d

 Ou si l'on veut supprimer des branches qui n'ont pas été merge, remplacer le dernier -d par -D pour forcer la supression.

   - git branch -vv | grep ': gone]'|  grep -v "\*" | awk '{ print $1; }' | xargs -r git branch -D

This will check all local branches and their origin and will delete all local branches whose origin was deleted.

In detail:

git branch -vv

will list your local branches and show information about the remote branch, saying “gone” if it is not present anymore.

grep ': gone]'

will fetch the branches that match the “ gone]” phrase.

grep -v "\*"

will fetch only lines that do not contain an asterisk. This will ignore the branch you are currently on and also prevent that the “git branch -d” is executed with a “*” at the end which would result in deleting all your local branches

awk '{print $1}'

will fetch the output until the first white space, which will result in the local branch name.

xargs git branch -d

will use the output (branch name) and append it to the “git branch -d” command to finally delete the branch. If you also want to delete branches that are not fully merged, you can use a capital “D” instead of “d” to force delete.


from https://stackoverflow.com/questions/16590160/remove-branches-not-on-remote
