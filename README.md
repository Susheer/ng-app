# Ng-App (Redux + Angular)

Simple approch of demonstrating importent concept with 1 module 2 component !!

This is a demo project to demonstrate using ngrx/store with Angular version 13.1.3. It contains [all of the specs] from Angular's test guide as well as [some extras]. Specs have been reformatted and converted to using ngrx/store best practices.

## Get the Code

```
git clone https://github.com/Susheer/ng-app.git ng-app
cd ng-app
npm i
```

## Back-end

This app uses two REST Api endpoints as given below:
`https://restcountries.com/v3/region/europe`
`https://restcountries.com/v3/region/asia`
To make http calls in order to demonstrate the concept.

## Code scaffolding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## CSS framework

This project uses Bootstrap framwork to achive responsive, mobile-first front-end web development.
In case you want to change it feel free to navigate `angular.json`

```
  "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": ["node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"]
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Do not forget to change `src/environment/environment.prod.ts` in case of production release.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

E2E Testing is not available in this release. However this project does support e2e testing as well that can implemented.
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Can be improved 

Unit testing covered in this project are very basic, moreover there are few test cases which are missing.
E2e testing has not been implmented, it seems need more time to cover this topic as well.
One more area where i really wanted to focus on is 'form controls', although i have been playing with only select element in this project. Even though that can be more dry, Which is not following SRP Principal.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
