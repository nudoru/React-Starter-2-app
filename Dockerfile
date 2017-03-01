# This is in testing/development
# https://medium.com/@andyccs/webpack-and-docker-for-development-and-deployment-ae0e73243db4#.dmfqhhbyk

FROM node:latest
MAINTAINER Matt Perkins <hello@mattperkins.me>

ENV HOME=/usr/src/app

# Install deps
WORKDIR $HOME
COPY package.json $HOME/
RUN npm config set registry http://registry.npmjs.org/ && npm install && npm cache clean

# Run it
EXPOSE 3000
CMD ["npm", "run", "dev"]