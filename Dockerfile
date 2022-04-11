FROM node:alpine
LABEL org.opencontainers.image.source="https://github.com/H1ghBre4k3r/k8s-deploy"

WORKDIR /app

COPY ./build/ /app/
COPY ./node_modules /app/node_modules

ENTRYPOINT ["node", "/app/index.js"]
