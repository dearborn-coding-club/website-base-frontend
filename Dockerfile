FROM pierrezemb/gostatic
COPY ./dist/ /srv/http/
ENV fallback=index.html