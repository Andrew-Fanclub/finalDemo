# Get Nginx image from Docker hub
FROM nginx

COPY default.conf.template /etc/nginx/conf.d/default.conf.template

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

# Update packages in Debian
RUN apt-get update

# Install curl cmd line tool
RUN apt-get install curl -y

# Fetch latest node v10.x from nodesource
RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh

# Install nodejs and npm
RUN apt install nodejs -y

# Copy everything
COPY . .

# Do a clean install based on package-lock file
RUN npm ci

# Build frontend
RUN npm run build

# Expose port picked by Heroku. Or else can't connect to server
# Running inside docker container
EXPOSE $PORT