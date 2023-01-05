#!/usr/bin/env bash
#exit or error
set -o error

yarn
yarn build
yarn typeorm migration:run -d dist/data-source.js