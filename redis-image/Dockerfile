# using docker image as a base
FROM alpine


#  Download  and install a dependency
RUN apk add --update redis



# Tell the image what i do when it starts 
#   as container

CMD [ "redis-server" ]

