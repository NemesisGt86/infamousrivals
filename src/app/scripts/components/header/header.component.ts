import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: '../../../views/header.component.html',
  styleUrls: ['../../../styles/header.component.css']
})
export class HeaderComponent {
  private _router: Router;

  constructor(router: Router) {
      var self: HeaderComponent = this;
      self._router = router;
  }

  public navigate(path: string) {
    var self: HeaderComponent = this;
    self._router.navigate([path]);
  }
}
