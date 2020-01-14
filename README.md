# WazimoTest


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Because we are calling other server for the data, proxy configuration was added to the project. 
Usually it gets solved in one of two ways: either front end gets served from the same address as backend. Or backend adds headers to it's response. Neither was an option in this case. 


Default angular-cdk virtual scroll doesn't fit for the grid display by default it suppose to show one item under the other because of this :ng-deep was added to stile virtual container.
