# Angular 2+ commands

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment on Github Pages

- Install the dependencies: `npm install -g angular-cli-ghpages`. 
- Then, run 
`ng build --prod --base-href https://<user-name>.github.io/<repo-name>/`
- If no errors were found, you can deploy by running `ngh`

## To install
- Angular 2/4: npm install -g @angular/cli
- - Create a app-component: ng new new-app
- Angular material: npm install --save @angular/material @angular/cdk
- Animations: npm install --save @angular/animations
- Hammerjs(gestures): npm install --save hammerjs