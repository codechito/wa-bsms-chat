## How to install

### Dependencies

Docker
Kubernetes

### Command Instruction

#### build the image

cd <project_directory>
docker image build -t wabsms:dev .

#### run and publish the app via docker
docker container run --publish 8000:8080 --detach --name wa wabsms:dev

browse to http://localhost:8000/web/login, to confirm

#### deploy to kubernetes

kubectl apply -f wa.yaml

browse to http://localhost:30001/web/login, to confirm

#### deploying application to swarm

docker stack deploy -c wa-stack.yaml wa

## Administration

### removing container

docker container rm --force wa

### removing deployment

kubectl delete -f wa.yaml

### removing application to swarm

docker stack rm wa