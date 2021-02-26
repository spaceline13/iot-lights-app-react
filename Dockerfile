FROM node:alpine AS builder
WORKDIR /
COPY . .
RUN yarn install
RUN yarn build

FROM node:alpine
RUN yarn global add serve
WORKDIR /
COPY --from=builder /build .
CMD ["serve", "-p", "8000", "-s", "."]
