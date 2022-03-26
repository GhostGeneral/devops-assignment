FROM node:12.13.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .
RUN yarn
EXPOSE 6000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]