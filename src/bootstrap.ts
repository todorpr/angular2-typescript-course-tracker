import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './components/app';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {provide} from 'angular2/core';

bootstrap(App, [ROUTER_PROVIDERS,
	provide(APP_BASE_HREF, { useValue: '/'}),
	HTTP_PROVIDERS
]);