use("IITM_Login")
db.Login.updateOne(
  { email: 'student2@smail.iitm.ac.in' },
  { $set: { role: 'head' } }
);
db.Login.updateOne(
  { email: 'student3@smail.iitm.ac.in' },
  { $set: { role: 'normal' } }
);
db.Login.updateOne(
  { email: 'student4@smail.iitm.ac.in' },
  { $set: { role: 'normal' } }
);
db.Login.updateOne(
  { email: 'student5@smail.iitm.ac.in' },
  { $set: { role: 'head' } }
);