cd backend/sklep && ./mvnw clean package -Dmaven.test.skip
cd ../../frontend && npm run build
