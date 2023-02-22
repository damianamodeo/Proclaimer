commitMessage=deploy" $(date +%F) $(date +%T)"
echo -e "$commitMessage"
#!/usr/bin/env sh

# abort on errors
set -e


# commit
git add -A && git commit -m "$commitMessage" && git push
echo -e '>>> COMMITTED\n\n'

# build
npm run BUILD
echo -e '>>> BUILT\n\n'

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# commit main first

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
echo -e ">>> INITTED\n\n"

git checkout -B main
echo -e ">>> CHECKED OUT\n\n"

git add -A
echo -e ">>> ADDED\n\n"

git commit -m "$commitMessage"
echo -e ">>> COMMITED\n\n"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/damianamodeo/$1.git main:gh-pages
echo -e '>>> PUSHED\n\n'

cd -






# set -e npm run build cd dist echo > .nojekyll git init git checkout -B main git add -A git commit -m 'deploy' git push -f https://github.com/damianamodeo/template.git main:gh-pages cd -