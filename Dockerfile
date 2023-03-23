# base image
FROM node:18-alpine

# Create and change to the app directory.
WORKDIR /usr/app

# Install Python
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
RUN npm ci

# Copy local code to the container image.

RUN npm run build

ARG CMS_API="http://localhost:4200"
ENV CMS_API=$CMS_API

CMD ["node_modules/.bin/next", "start", "dist/packages/client"]
