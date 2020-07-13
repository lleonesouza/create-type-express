# Stage 1 - Build dependencies
FROM node:14-alpine AS BUILD_IMAGE

RUN apk update && apk add yarn curl bash python g++ make && rm -rf /var/cache/apk/*

# install node-prune
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

WORKDIR /usr/src/app

COPY package.json ./

# install deps
RUN yarn --frozen-lockfile

COPY . .

# build application
RUN yarn build

# remove development deps
RUN npm prune --production

# run node prune
RUN /usr/local/bin/node-prune

# Stage 2 cherrypick deps and build deployable container
FROM node:14-alpine

WORKDIR /usr/src/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/build ./build
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules

RUN mkdir -p /tmp/downloads

EXPOSE 5000

CMD [ "node", "./build/bundle.js" ]