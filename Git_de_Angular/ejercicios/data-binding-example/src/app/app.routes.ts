import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { MyComponent } from './my-component/my-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'my-component', component: MyComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = provideRouter(routes);
