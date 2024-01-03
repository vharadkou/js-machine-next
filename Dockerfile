# base image
FROM node:20-alpine as builder

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

RUN npm run lint
RUN npm run build

FROM node:20-alpine
WORKDIR /usr/app
COPY --from=builder /usr/app/.next/ /usr/app/.next/
COPY --from=builder /usr/app/.next/static/ /usr/app/.next/standalone/.next/static/
COPY --from=builder /usr/app/public/ /usr/app/.next/standalone/public/

EXPOSE 3000
ENTRYPOINT [ "node", "./.next/standalone/server.js"]
