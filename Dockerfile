# base image
FROM node:18-alpine as builder

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

FROM node:18-alpine
WORKDIR /usr/app
COPY --from=builder /usr/app/dist/ /usr/app/dist/
COPY --from=builder /usr/app/dist/packages/client/.next/static/ /usr/app/dist/packages/client/.next/standalone/dist/packages/client/.next/static/
COPY --from=builder /usr/app/dist/packages/client/public/ /usr/app/dist/packages/client/.next/standalone/packages/client/public/

ARG CMS_API="http://localhost:4200"
ENV CMS_API=$CMS_API

EXPOSE 3000
ENTRYPOINT [ "node", "./dist/packages/client/.next/standalone/packages/client/server.js"]
