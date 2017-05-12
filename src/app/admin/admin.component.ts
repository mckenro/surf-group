import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';
import { MemberComponent } from '../member/member.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(
    firstName: string,
    lastName: string,
    role: string,
    city: string,
    bio: string,
    image: string) {

    var newMember: Member = new Member(
      firstName,
      lastName,
      role,
      city,
      bio,
      image);

    this.memberService.addMember(newMember);
  }

}
