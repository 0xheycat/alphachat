#!/bin/bash
set -e

solution_path=$1
solution_name=$2

# cd to one directory up of current script
REAL_PATH=$(realpath "$0")
LOCAL_PATH=$(dirname "$REAL_PATH")
cd "$LOCAL_PATH"
cd ..

echo "Install dependencies for client & sever module"
npm install

echo "Copy files"
cp -R server.js node_modules package.json "$solution_path"

echo "$solution_name build succesfull"
