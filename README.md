Coverage: 81.01%
![test coverage](https://github.com/calfonsoQA/QAC-TE/blob/dev/Documentation/Backend%20coverage.png)


# QA Cinema Web Application Project
This project involved the design and creation of a Cinema web application. The project employed crud functionality to allow users to book, discuss and pay for cinema tickets for various venues of our establishment. Moreover, the discussion board enables users to rate movies and interact with fellow movie goers through the use of comment and review fields on the page.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
You will need the following softwares to run this application and all of its tests:

Visual Studio Code: https://code.visualstudio.com/

Mongo DB: https://www.mongodb.com/products/compass

The following dependencies from NPMJS.com:

Front End Dependencies:

- axios: 0.21.1
- bootstrap: 4.6.0
- mdbreact: 5.0.1
- react: 17.0.1
- react-dom: 17.0.1
- react-film: 3.0.0
- react-icons": 4.2.0
- react-router-dom: 5.2.0
- react-scripts": 4.0.3
- react-test-renderer: 17.0.1
- reactstrap: 8.9.0
- web-vitals: 1.1.0


Back End Dependencies:

- body-parser: 1.19.0
- cors: 2.8.5
- express: 4.17.1
- http-errors: 1.8.0
- mongoose": 5.11.18

Testing Dependencies:

- chai: 4.3.0
- chai-http: 4.3.0
- mocha: 8.3.0
- nodemon: 2.0.7
- nyc: 15.1.0




### Installing
1. Fork and then clone down this repo to your system.
2. Open this repo in VsCode.
3. Open the integrated terminal and type "npm install --save", to install
   and save the dependencies required for the app to run.
4. Then in the terminal navigate to both the front end and back end folders and type
   "npm start" to start and run the application.


## Running the tests
To run the tests and view test coverage % for each class, open up the integrated terminal in VSCode and then cd into the back
end. Once here, type "npm run coverage", all the tests will run and at the end you will be presented with a table illustrating the coverage
of the application.

### Integration Tests 
Integration testing is a testing approach that targets the very fundamental building blocks of an application,
the idea is to prove that each 'integration' of the application is functioning as expected.

* **Integration Test Example:**
```
describe(`Bookings Routes`, () => {

    it(`Test /create route`, (done) => {
        chai.request(app)
        .post(`${BOOKINGS_URL}/create`)
        .send({'title' : 'Avengers: Endgame'})
        .end((err, response) => {
            if(err) done(err); 
            expect(err).to.be.null;
            expect(response).to.not.be.undefined;
            expect(response).to.have.status(200);
            expect(response).to.have.property('text');
            done();
        });
    });

    it(`Test /update:id route`, (done) => {
        chai.request(app)
        .patch(`${BOOKINGS_URL}/update/604645a1e5b30b43f8b95d42`)
        .send({'title' : 'Avengers: Endgame'})
        .end((err, response) => {
            if(err) done(err); 
            expect(err).to.be.null;
            expect(response).to.not.be.undefined;
            expect(response).to.have.status(202);
            expect(response).to.have.property('text', 'Successfully patched!');
            done();
        });
    });

```




## Deployment
1. Go to project folder and open cmd line.
2. Type: mvn clean package
3. cd into the target folder of the project
4. then type $java -jar ToDo_Project-0.0.1-SNAPSHOT.jar 
5. Access the front end by going to http://127.0.0.1:8081/HTML/Andi/Index.html







## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Andi Berisha** 
* **Adigwe Uraih** 
* **Claes Alfonso**
* **Celina Basa**  

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

## Acknowledgments
* **Savannah Vaithilingam**


