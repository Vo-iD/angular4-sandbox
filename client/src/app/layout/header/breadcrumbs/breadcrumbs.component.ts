import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

import { appRoutes } from '../../../app-routing';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: Object[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.breadcrumbs = [];
  }

  public ngOnInit(): void {
    const component = this;

    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event) => {
        component.breadcrumbs = [];
        let currentRoute = component.route.root;
        let url = '';
        do {
          let childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach((route) => {
            let routeSnapshot = route.snapshot;
            const segments = routeSnapshot.url.map((segment) => segment.path);

            url += '/' + segments.join('/');
            component.breadcrumbs.push({
              label: route.snapshot.data.breadcrumb,
              url
            });
            currentRoute = route;
          });
        } while (currentRoute);
      });
  }
}
