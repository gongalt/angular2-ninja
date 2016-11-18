import { Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';


export const APP_ROUTES: Routes = [
	{
		path: 'directory',
		component: DirectoryComponent
	},
	{
		path: '',
		component: HomeComponent
	},
	{
		path: '**',
		component: ErrorComponent
	}

];

// export const APP_ROUTES_PROVIDER = [
// 	provideRouter(routes)
// ];