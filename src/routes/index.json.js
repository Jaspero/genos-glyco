import admin from 'firebase-admin';

export function get(req, res) {

  Promise.all([
    admin.firestore().collection('members')
      .get(),
    admin.firestore().collection('news')
      .limit(4)
      .get(),
    admin.firestore().collection('projects')
      .limit(4)
      .get(),
    admin.firestore().collection('publications')
      .where('featured', '==', true)
      .get()
  ])
    .then(([members, news, projects, publications]) => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        members: members.docs.map(cur => cur.data()),
        news: news.docs.map(cur => cur.data()),
        projects: projects.docs.map(cur => cur.data()),
        publications: publications.docs.map(cur => cur.data())
      }));
    })
    .catch(error => {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end({error: error.toString()})
    })
}
