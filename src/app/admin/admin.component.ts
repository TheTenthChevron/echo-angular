import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';
import {Address} from '../address';
import {LogService} from '../log.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  addresses: Address[];
  selectedAddress: Address = {
    addressId: null,
    houseNumber: null,
    addressLineOne: null,
    addressLineTwo: null,
    city: null,
    residential: null,
    stateAbbreviation: null,
    zipCode: null
  };

  constructor(private restService: RestService, private logger: LogService) { }

  ngOnInit() {
    this.restService.readAddresses().subscribe((addresses: Address[]) => {
      this.addresses = addresses;
      this.logger.log(this.addresses);
    });
  }

}
