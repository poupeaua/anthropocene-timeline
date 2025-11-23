source .env-public
echo "Building site for preprod environment..."
echo "Using base URL: ${LOCALHOST_URL}:${PREPROD_PORT}"
npm run build:css
hugo build --gc --minify --baseURL ${LOCALHOST_URL}:${PREPROD_PORT} 
cd docs
python -m http.server ${PREPROD_PORT}