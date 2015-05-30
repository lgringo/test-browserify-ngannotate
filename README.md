# test-browserify-ngannotate
Example for issue with source maps

# Usage
```
npm install
npm run build
tail -1 src/js/bundle.js | cut -b 65- | base64 --decode | cut -b 1-250
```

Change version of browserify-ngannotate, and restart. You will see abslote path for PhoneListController.js (for example)
