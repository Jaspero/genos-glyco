import admin from 'firebase-admin';

export function get(req, res) {
  const {page = 0, pageSize = 10} = req.query;

  let lookUpSize = pageSize + 1;
  let db = admin.firestore().collection('publications')
    .orderBy('year', 'desc')
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
        hasMore: snaps.docs.length < lookUpSize,
        publications: snaps.docs.reduce((acc, cur, ind) => {
          if (ind < pageSize) {
            acc.push(cur.data());
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
