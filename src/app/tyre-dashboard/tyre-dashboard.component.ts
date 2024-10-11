import { Component, OnInit } from '@angular/core';
import { TyreService } from '../tyre.service';
import { TyreDetails } from '../TyreDetails';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tyre-dashboard',
  templateUrl: './tyre-dashboard.component.html',
  styleUrls: ['./tyre-dashboard.component.css'],
})
export class TyreDashboardComponent implements OnInit {
  tyreDetails: TyreDetails[] = [];

  constructor(
    private tyreService: TyreService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.tyreService.getTireDetails().subscribe(
      (data) => {
        console.log(data);
        this.tyreDetails = data;
      },
      (error) => {
        console.error(error);
        this.toastr.error('Failed to load tyre details.', 'Error');
      }
    );
  }
}
