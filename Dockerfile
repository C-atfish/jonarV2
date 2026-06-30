# ---- Build stage: compile Tailwind CSS ----
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies (cached unless the lockfile changes)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source and build the production CSS bundle
COPY . .
RUN npm run buildcss

# ---- Runtime stage: serve the static site with nginx ----
FROM nginx:1.27-alpine

# Custom server config (static files + /api reverse proxy)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static assets only — no node_modules / build tooling in the final image
COPY --from=build /app/*.html /usr/share/nginx/html/
COPY --from=build /app/*.css  /usr/share/nginx/html/
COPY --from=build /app/*.js   /usr/share/nginx/html/
COPY --from=build /app/images /usr/share/nginx/html/images

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
