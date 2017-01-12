#!/bin/bash

set -x

( cd _gh_pages
  git init
  git config user.name "wfortin"
  git config user.email "willyfortin@gmail.com"
  git add .
  git commit -m "Autodeploy to Github Pages"
  git push --force --quiet "https://${GH_TOKEN}@github.com/coveo/vapor.git" master:gh-pages > /dev/null 2>&1
)
