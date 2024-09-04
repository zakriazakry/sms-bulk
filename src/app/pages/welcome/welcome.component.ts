import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home',
      skipLocationChange: true,
      pathMatch: 'full',
      link: '',
    },
    {
      title: 'Messages',
      icon: 'message-circle',
    },
    {
      title: 'Server Status',
      icon: 'hard-drive',
    },
    {
      title: 'Subscription Plans',
      icon: 'gift',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'API Refrences',
      icon: 'file-text',
    },
  ];
}
