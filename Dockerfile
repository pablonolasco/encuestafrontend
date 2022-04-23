# get the base node image
FROM node:15-alpine

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY ./package.json /frontend

COPY ./package-lock.json /frontend

# install npm dependencies
RUN npm install

# install npm dependencies
RUN npm install node-sass --save

# install npm dependencies
RUN npm install react-bootstrap bootstrap

# install npm dependencies
RUN npm install axios

# copy other project files
COPY . .

# build the folder
CMD [ "npm", "run", "start" ]