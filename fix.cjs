const fs = require('fs');
['collection.html', 'product.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<script src="\.\/js\/translations\.js"><\/script>/g, '<script type="module" src="./js/translations.js"></script>');
  content = content.replace(/<script src="\.\/js\/app\.js"><\/script>/g, '<script type="module" src="./js/app.js"></script>');
  fs.writeFileSync(file, content);
  console.log('Fixed ' + file);
});
