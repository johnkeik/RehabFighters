import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { routerOptions } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(RouterModule.forRoot(routes, routerOptions))],
};
