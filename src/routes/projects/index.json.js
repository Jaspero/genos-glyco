import admin from 'firebase-admin';

export function get(req, res) {
  const {page = 0, pageSize = 10} = req.query;

  let lookUpSize = pageSize + 1;
  let db = admin.firestore().collection('projects')
    .limit(lookUpSize);

  if (page) {
    db = db.startAt(page * pageSize)
  }

  db
    .get()
    .then(snaps => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        hasMore: snaps.docs.length >= lookUpSize,
        projects: snaps.docs.reduce((acc, cur, ind) => {
          if (ind < pageSize) {
            const data = cur.data();
            data.subTitle = data.subTitle || '';
            data.id = cur.id;
            acc.push(data);
          }
          return acc;
        }, [])
      }));
    })
    .catch(error => {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end({error: error.toString()})
    })
}
