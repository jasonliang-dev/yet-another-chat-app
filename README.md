# How to run

## Development

Use `npm run dev` to start the application. Then view `localhost:8080` in the
browser.

## Production

Run `npm run build` to populate the `public` folder, then run `npm start` to
start the server.

## Environment Variables

Create a `.env` file with the following:

```
MONGODB_URI=<mongodb connection string>
JWT_SECRET=<a randomly generated string>
```

# Images

Background image `client/assets/images/dot-grid.png`
from Toptal Subtle Patterns: https://www.toptal.com/designers/subtlepatterns/dot-grid-pattern/  
Free to use with attribution: https://www.toptal.com/designers/subtlepatterns/faq

The `client/icons/` directory contains svg code
from Heroicons https://github.com/sschoger/heroicons-ui  
By Steve Schoger https://twitter.com/steveschoger (MIT License).
The copyright notice and license is included in the same directory.

Vector images located under `client/assets/images/`, file names start with `undraw`.
From https://undraw.co/  
By Katerina Limpitsouni https://twitter.com/ninalimpi (https://undraw.co/license)
