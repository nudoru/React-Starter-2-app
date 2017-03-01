# This is in testing/development
# https://medium.com/@andyccs/webpack-and-docker-for-development-and-deployment-ae0e73243db4#.dmfqhhbyk

FROM node:latest
MAINTAINER Matt Perkins <hello@mattperkins.me>

# Install deps
WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

# Copy the app files
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

# Run it
EXPOSE 3000
CMD ["npm", "run", "dev"]