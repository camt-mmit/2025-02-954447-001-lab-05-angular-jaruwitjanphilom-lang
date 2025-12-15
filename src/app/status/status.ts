import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.html',
  styleUrl: './status.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Status {
currentDate = new Date();
  userAgent = '';
  languages: readonly string[] = [];
  cookieEnabled = false;
  logicalProcessors = 0;
  maxTouchPoints = 0;



  ngOnInit(): void {
    // Access window.navigator properties
    this.userAgent = navigator.userAgent;
    this.languages = navigator.languages;
    this.cookieEnabled = navigator.cookieEnabled;

    // Note: hardwareConcurrency returns the number of logical processors
    this.logicalProcessors = navigator.hardwareConcurrency;

    this.maxTouchPoints = navigator.maxTouchPoints;
  }

}
