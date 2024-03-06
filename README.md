# React Router

### Notes

+ Use `<Link to='{}></Link>` instead of <a href={}></a> to allow efficient client side routing. That is, <a> requests & fetches a new document every time you click a new url; <link> uses react router allowing us to render new url data without making a new request to the server.
