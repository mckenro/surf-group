import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Member } from './member.model';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string) {
    return this.database.object('members/' + memberId);
  }

  updateMember(localUpdatedMember) {
    const memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({
      firstName: localUpdatedMember.firstName,
      lastName: localUpdatedMember.lastName,
      role: localUpdatedMember.role,
      city: localUpdatedMember.city,
      bio: localUpdatedMember.bio,
      image: localUpdatedMember.image
    });
  }

  deleteMember(localMemberToDelete) {
    const memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

}
