
## TASK:
Create an application that identifies the pair of employees who have worked 
together on common projects for the longest period of time. 

Input data: <br />
A CSV file with data in the following format: <br />
EmpID, ProjectID, DateFrom, DateTo <br />

Sample data: <br />
143, 12, 2013-11-01, 2014-01-05 <br />
218, 10, 2012-05-16, NULL <br />
143, 10, 2009-01-01, 2011-04-27 <br />
... 
Sample output: <br />
143, 218, 8 <br />
Specific requirements <br />

1) DateTo can be NULL, equivalent to today <br />
2) The input data must be loaded to the program from a CSV file <br />
3) Create an UI: <br />
The user picks up a file from the file system and, after selecting it, all common 
projects of the pair are displayed in datagrid with the following columns: 
Employee ID #1, Employee ID #2, Project ID, Days worked <br />
4) The task solution needs to be uploaded in github.com, repository name must be in 
format: {FirstName}-{LastName}-employees <br />
### Bonus points 
1) More than one date format to be supported, extra points will be given if all date formats 
are supported 
### COMMENT:
There are generally 3 types of JavaScript date input formats:
ISO Date - "2015-03-25" (The International Standard)
Short Date - "03/25/2015"
Long Date - "Mar 25 2015" or "25 Mar 2015"
Since A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since the ECMAScript epoch, which is defined as January 1, 1970, UTC (equivalent to the UNIX epoch
I use converted to milliseconds dates for comparisons.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify