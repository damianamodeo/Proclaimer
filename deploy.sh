#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run BUILD
echo ">>> BUILT"
npm run COMMIT
echo ">>> COMMITTED"

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# commit main first
commitMessage=deploy" $(date +%F) $(date +%T)"

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
echo init

git checkout -B main
echo checkoutMain

git add -A
echo add

git commit -m "$commitMessage"
echo commit

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/damianamodeo/$1.git main:gh-pages
echo push

cd -






# set -e npm run build cd dist echo > .nojekyll git init git checkout -B main git add -A git commit -m 'deploy' git push -f https://github.com/damianamodeo/template.git main:gh-pages cd -