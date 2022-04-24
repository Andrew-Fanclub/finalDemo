# Default image for dockerfile
FROM node:10

# Define directory for files to be copied into docker image
WORKDIR /usr/src/app

# Copy everything in current folder to /usr/src/app in Docker image
COPY . .

# Expose port picked by Heroku. Or else can't run server inside
# Docker container
EXPOSE $PORT

# use npm to run start

CMD [ "npm", "run", "start" ]