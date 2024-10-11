import { Component, OnInit } from '@angular/core';
import { TyreService } from '../tyre.service';
import { TyreDetails } from '../TyreDetails';

@Component({
  selector: 'app-tyre-dashboard',
  templateUrl: './tyre-dashboard.component.html',
  styleUrls: ['./tyre-dashboard.component.css']
})
export class TyreDashboardComponent implements OnInit {
  tyreDetails: TyreDetails[] = [];

  constructor(private tyreService: TyreService) { }

  ngOnInit(): void {
   this.tyreService.getTireDetails().subscribe(data => this.tyreDetails = data);
  }
}
