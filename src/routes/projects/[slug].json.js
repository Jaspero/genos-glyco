import admin from 'firebase-admin';

export function get(req, res) {
  const { slug } = req.params;

  admin.firestore().collection('projects').doc(slug)
    .get()
    .then(item => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify(item.data()));
    })
    .catch(error => {
      res.writeHead(404, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        message: `Not found`
      }));
    })
}
