FROM taskcat/taskcat

ADD .taskcat.yml /mnt
ADD mongodb-master.template /mnt
ENV AWS_ACCESS_KEY_ID="ASIAQVX7CAFHC6K3AHUX"  AWS_SECRET_ACCESS_KEY="lGQOs5N/iFGxAp8K++cbuQ3BoKyXox1F0zZJCIQo"

ENTRYPOINT ["taskcat","test","run"]
