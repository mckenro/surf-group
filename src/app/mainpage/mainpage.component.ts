import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  providers: [MemberService]
})
export class MainpageComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByRole: any = 'allMembers';

  constructor(private router: Router, private memberService: MemberService) {}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

  onChange(optionFromMenu) {
    this.filterByRole = optionFromMenu;
  }

}
