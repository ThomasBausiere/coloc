import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ContentRepository } from './core/repositories/content.repository';
import { MockContentRepository } from './core/repositories/mock-content.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top'
    })),
     provideHttpClient(),

    // SOURCE ACTUELLE: JSON mock
    { provide: ContentRepository, useClass: MockContentRepository },
  ]
};
