FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /app

# Install production dependencies (cached unless the lockfile changes)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy server source and CV assets
COPY . .

EXPOSE 1001

CMD ["npm", "start"]
