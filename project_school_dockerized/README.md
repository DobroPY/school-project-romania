## Run the System
We can easily run the whole with only a single command:
```bash
docker-compose up
```

Docker will pull the MySQL and Node.js images (if our machine does not have it before).

The services can be run on the background with command:
```bash
docker-compose up -d
```
### Important Points
- install the Expo-Go App
- in the docker-compose, the "App" section has something like REACT_NATIVE_PACKAGER_HOSTNAME=192.168.1.8 
- change this ip address with your local ip address
- now open the Expo-Go App and Enter URL manually exp://"localipaddress":19000 in my case it is 192.168.1.8
- Now you are able to run it on Android or Ios device
## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:
```bash
docker-compose down --rmi all