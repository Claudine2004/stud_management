
# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy the homepage
COPY index.html /usr/share/nginx/html/index.html

# Copy the contact page
COPY contact.html /usr/share/nginx/html/contact.html

# Copy the login page
COPY login.html /usr/share/nginx/html/login.html

# Copy the registration page
COPY register.html /usr/share/nginx/html/register.html

# Copy CSS folder
COPY css/ /usr/share/nginx/html/css/

# Expose web server port
EXPOSE 80
