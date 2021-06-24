docker rm -f resthellowworld
docker rmi resthellowworld
docker build -t "resthellowworld:1.0" .
docker run -dti --name "resthellowworld" -p 3001:3001 --env="PORT=3001" resthellowworld:1.0
