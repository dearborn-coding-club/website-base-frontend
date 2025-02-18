FROM pierrezemb/gostatic
COPY ./dist/ /srv/http/
CMD ["-fallback", "index.html"]