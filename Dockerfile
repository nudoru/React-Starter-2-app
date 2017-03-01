# This is in testing/development

FROM node:latest
MAINTAINER Matt Perkins <hello@mattperkins.me>

# Copy the app files
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#COPY ../package.json /usr/src/app/

# mount app/font from FS
COPY . /usr/src/app
RUN npm config set registry http://registry.npmjs.org/ && npm install

# Run it
EXPOSE 3000
CMD [ "npm", "run", "dev" ]