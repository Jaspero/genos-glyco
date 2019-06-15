import admin from 'firebase-admin';

export function get(req, res) {
  let {page = 0, pageSize = 10} = req.query;

  if (typeof page !== 'number') {
    page = parseInt(page, 10);
  }

  let lookUpSize = pageSize + 1;
  let db = admin.firestore().collection('news')
    .orderBy('publicationDate', 'desc');

  if (page) {
    db = db.startAfter(page * pageSize)
  }

  db = db
    .limit(lookUpSize);

  db
    .get()
    .then(snaps => {
      console.log('snaps', snaps.docs.length);
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        hasMore: snaps.docs.length >= lookUpSize,
        news: snaps.docs.reduce((acc, cur, ind) => {
          if (ind < pageSize) {

            const data = cur.data();
            data.publicationDate = new Date(data.publicationDate).toLocaleDateString('en-GB');
            data.subTitle = data.subTitle || '';

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
