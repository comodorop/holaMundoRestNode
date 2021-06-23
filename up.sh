docker build -t "restHellowWorld:1.0" .
docker run -dti --name "restHellowWorld" -p 3001:3001 --env="PORT=3000" restHellowWorld:1.0
