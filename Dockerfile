# Stage 1: Build the application
FROM node:16 AS build

WORKDIR /app

# Salin package.json dan package-lock.json (jika ada) ke dalam container
COPY package*.json ./

# Install semua dependensi, termasuk react-router-dom
RUN npm install

# Salin semua file ke dalam container
COPY . .

# Build aplikasi
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Salin hasil build dari stage 1 ke direktori Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 untuk Nginx
EXPOSE 80

# Perintah untuk menjalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
