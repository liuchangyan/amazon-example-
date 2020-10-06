FROM taskcat/taskcat

ADD .taskcat.yml /mnt
ADD mongodb-master.template /mnt
ENV AWS_ACCESS_KEY_ID="AKIAT33TEK3R3JCFSRJQ"  AWS_SECRET_ACCESS_KEY="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"

ENTRYPOINT ["taskcat","test","run"]





