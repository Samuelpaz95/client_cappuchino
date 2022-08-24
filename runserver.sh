npm i
npm run build

sudo cp -r dist/. /mnt/data/www/starhucks

pm2 restart starhucks