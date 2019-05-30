# https://vuepress.vuejs.org/guide/deploy.html#github-pages

# Permission Denied
# chmod +x deploy.sh

#!/usr/bin/env sh

set -e

# VuePress Build
npm run build

# Output Directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# Deploy to https://nyankodev.github.io/vue-kansai-docs
git push -f git@github.com:nyankodev/vue-kansai-docs.git master:gh-pages

cd -
