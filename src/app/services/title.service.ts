import { Injectable } from '@angular/core';
import { Title } from '../models/title.model';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  titlesCollection: AngularFirestoreCollection<Title>;
  titles: Observable<Title[]>;
  titleDoc: AngularFirestoreDocument<Title>;
  title: Observable<Title>;

  constructor(private firebase: AngularFirestore) {
    this.titlesCollection = this.firebase.collection('titles', ref => ref.orderBy('title_en'));
    
    this.titles = this.titlesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Title;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  getAll() {
    return this.titles;
  }

  get(id) {
    this.titleDoc = this.firebase.doc('/titles/' + id);
    return this.title = this.titleDoc.valueChanges();
  }

  getNewId() {
    return this.firebase.createId();
  }

  add(newId, title: Title) {
    const newTitle: Title = {
      id: newId,
      title_en: title.title_en,
      title_tc: title.title_tc,
      title_sc: title.title_sc,
      title_jp: title.title_jp
    };
    return this.titlesCollection.doc(newId).set(newTitle);
  }

  update(id, title) {
    this.titleDoc = this.firebase.doc('/titles/' + id);
    this.titleDoc.update(title);
  }

  delete(title: Title) {
    this.titleDoc = this.firebase.doc(`titles/${title.id}`);
    this.titleDoc.delete();
  }
}
