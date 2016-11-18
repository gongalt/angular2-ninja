import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
	{
		path: 'directory',
		component: DirectoryComponent
	},
	{
		path: '',
		component: HomeComponent
	}	
];

// export const APP_ROUTES_PROVIDER = [
// 	provideRouter(routes)
// ];