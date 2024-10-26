FROM amazoncorretto:8-al2023
ADD target ./target
EXPOSE 8080
CMD  [ "/bin/bash", "-c", "java -jar ./target/*.jar" ]
