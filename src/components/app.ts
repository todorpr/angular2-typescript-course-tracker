import {Component, View} from 'angular2/core';
import {RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';
import {Dashboard} from './dashboard';
import {Manage} from './manage';


@RouteConfig([
  { path: "/", as: "Dashboard", component: Dashboard },
  { path: "/Manage", as: "Manage", component: Manage }
])

@Component({
    selector: 'app',
    directives: [RouterOutlet, RouterLink],
    template: `
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand">Angular 2 Course Tracker</a>
            </div>
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                <li><a [routerLink]="['/Dashboard']">Dashboard</a></li>
                <li><a [routerLink]="['/Manage']">Add/Delete</a></li>
              </ul>
            </div>            
          </div>
        </nav>
      </div>

      <div>
        <router-outlet></router-outlet>
      </div>
    `
})

export class App {
}