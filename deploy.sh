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

# Deploy to https://nekohack.github.io/v-kansai
git push -f git@github.com:nekohack/v-kansai.git master:gh-pages

cd -
