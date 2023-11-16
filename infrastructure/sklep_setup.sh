sudo apt install docker

# if docker commands don't work, then user needs docker group

# create network (gives dns by container names)
docker network create sklep_network


docker create --name some-cassandra --network sklep_network -d cassandra


# now this is possible
# docker run -it --network sklep_network --rm cassandra cqlsh some-cassandra