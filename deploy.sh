#!/usr/bin/env bash
set -e

echo "start deployment"

# update code
git pull origin main

# install dependencies and run
npm install && npm run build && npm run start
