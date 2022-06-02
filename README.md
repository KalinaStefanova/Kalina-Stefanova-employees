[Task definition](#Task-definition) <br />
[Bonus points comment](#Comment) <br />
[Improvement suggestion](#Improvement-suggestion)<br />

### Task definition
Application that identifies the pair of employees who have worked together on common projects for the longest period of time. 

Input data: <br />
A CSV file with data in the following format: <br />
EmpID, ProjectID, DateFrom, DateTo <br />

Sample data: <br />
143, 12, 2013-11-01, 2014-01-05 <br />
218, 10, 2012-05-16, NULL <br />
143, 10, 2009-01-01, 2011-04-27 <br />
Sample output: <br />
143, 218, 8 
<br />
#### Specific requirements <br />
1) DateTo can be NULL, equivalent to today <br />
2) The input data must be loaded to the program from a CSV file <br />
3) Create an UI: <br />
The user picks up a file from the file system and, after selecting it, all common 
projects of the pair are displayed in datagrid with the following columns: 
Employee ID #1, Employee ID #2, Project ID, Days worked <br />
4) The task solution needs to be uploaded in github.com, repository name must be in 
format: {FirstName}-{LastName}-employees <br />
#### Bonus points 
1) More than one date format to be supported, extra points will be given if all date formats 
are supported <br />
### Comment
**There are generally 3 types of JavaScript date input formats:<br/>
ISO Date - "2015-03-25" (The International Standard)<br/>
Short Date - "03/25/2015"<br/>
Long Date - "Mar 25 2015" or "25 Mar 2015"<br/>
Since A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since the ECMAScript epoch, which is defined as January 1, 1970, UTC (equivalent to the UNIX epoch), I decided to use milliseconds date representation for comparisons**

### Improvement suggestion
For better performance the dates comparison and work days calculation can be implemented server-side. And React app can consume an API and fetch the pair of employees that worked together for longest period of time. 


