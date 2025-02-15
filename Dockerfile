FROM pierrezemb/gostatic
COPY ./dist/ /srv/http/
ENV fallback=/src/http/index.html