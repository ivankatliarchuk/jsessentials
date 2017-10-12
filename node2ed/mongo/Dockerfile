# Robomongo Dockerfile
# Native and cross-platform MongoDB manager
# https://robomongo.org/
FROM debian:jessie

RUN apt-get update && apt-get install -yq curl

# install dependencies...
RUN apt-get update && apt-get install -yq \
    libglib2.0-0 \
    libgl1-mesa-swx11 \
    libqt5gui5

ENV ROBOMONGO_VERSION 1.1.1

# https://download.robomongo.org/0.9.0-rc4/linux/robomongo-0.9.0-rc4-linux-x86_64-8c830b6.tar.gz

# RUN curl -L "https://download.robomongo.org/1.1.1/linux/robo3t-1.1.1-linux-x86_64-c93c6b0.tar.gz" | tar -zx && \
#     cp -a robo3t-1.1.1-linux-x86_64-c93c6b0/. /opt/robomongo

RUN curl -L https://download.robomongo.org/0.9.0-rc4/linux/robomongo-0.9.0-rc4-linux-x86_64-8c830b6.tar.gz | tar -zx && \
    mv robomongo-0.9.0-rc4-linux-x86_64-8c830b6 /opt/robomongo

RUN echo '8e0faa71ed6f98faff3c77ad56cd0e5b' > /etc/machine-id

ENV QT_GRAPHICSSYSTEM native
ENV QT_X11_NO_MITSHM 1

CMD [ "/opt/robomongo/bin/robomongo" ]

# build image
# docker build -t robomongo .
# Add docker the rights to access the X-server
# xhost +local:docker
# docker run -it -v /tmp/.X11-unix:/tmp/.X11-unix -u 0 -e DISPLAY=$DISPLAY robomongo
