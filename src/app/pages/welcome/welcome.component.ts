import { NB_WINDOW, NbMenuItem, NbMenuService } from '@nebular/theme';
import { Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  menuItems= [
    {
      title:"Profile"
    },
    {
      title:"setting"
    },
    {
      title:"Logut"
    },
  ];
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      pathMatch: 'full',
      link: '/dashboard',
    },
    {
      title: 'Messages',
      icon: 'message-circle-outline',
      pathMatch: 'full',
      link: '/msg',
    },
    {
      title: 'Server Status',
      icon: 'hard-drive-outline',
      link: '/server-status',
    },
    {
      title: 'Subscription Plans',
      icon: 'gift-outline',
      link: '/subscription-plans',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      link: '/privacy-policy',
    },
    {
      title: 'API References',
      icon: 'file-text-outline',
      link: '/api-references',
    },
  ];
  window = inject(NB_WINDOW);
  isBrowser: boolean = false;
  constructor(private nbMenuService: NbMenuService,@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // this.nbMenuService.onItemClick()
    //   .pipe(
    //     filter(({ tag }) => {
    //       console.log(tag);
    //       return tag === 'my-context-menu';
    //     }),
    //     map(({ item: { title } }) => title),
    //   )
    //   .subscribe(title => this.window.alert(`${title} was clicked!`));
    // this.nbMenuService.onItemClick().subscribe((res)=>
    // {
    //   this.window.alert(`${res.item.title} was clicked!`);
    // });
  }
}
