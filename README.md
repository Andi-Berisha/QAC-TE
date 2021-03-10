Coverage: 81.01%
![test coverage](https://github.com/calfonsoQA/QAC-TE/blob/dev/Documentation/Backend%20coverage.png)


# QA Cinema Web Application Project
This project involved the design and creation of a Cinema web application. The project employed crud functionality to allow users to book, discuss and pay for cinema tickets at various venues of our establishment. The discussion board allows user to rate movies and interact with fellow movie goers by allowing users to post comments and reviews. 

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
You will need the following softwares to run this application and all of its tests:

Visual Studio Code: https://code.visualstudio.com/

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
2. Open your Spring Tool Suite 4.
3. Open the project by clicking on file > open projects from file system.
4. Go to local on the boot dashboard and select the project.
5. Click Start Process.

To run the application from the command line, write the following command:

```
$java -jar ToDo_Project-0.0.1-SNAPSHOT.jar 
```

## Running the tests
To run the tests and view test coverage % for each class, right click on the project in spring
and select coverage as, then select JUnit Test.

### Integration Tests 
Integration testing is a testing approach that targets the very fundamental building blocks of an application,
the idea is to prove that each 'integration' of the application is functioning as expected.

* **Integration Test Example:**
```
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@Sql(scripts = {"classpath:schema-test.sql","classpath:data-test.sql"}, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
@ActiveProfiles(profiles="test")
class UserControllerIntegrationTest {
	
	@Autowired
	private MockMvc mock;
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private ObjectMapper jsonifier;
	
	private final int ID = 4;
	
	
	List<TaskDomain> tasksDomain = new ArrayList<>();
	List<TaskDTO> tasks = new ArrayList<>();
	
	private UserDTO mapToDTO(UserDomain model) {
		return this.mapper.map(model, UserDTO.class); 
	}
	
	
	
	
	@Test
	public void read() throws Exception{
		
		
		UserDTO expectedOutcome = new UserDTO(4L, "John", "Behar",tasks);
		// Set up the request
		MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders
				.request(HttpMethod.GET, "http://localhost:8081/user/read/" + ID);
		
	// set up expectations
		ResultMatcher matchStatus = MockMvcResultMatchers.status().isOk();
		ResultMatcher matchContent = MockMvcResultMatchers.content()
				.json(jsonifier.writeValueAsString(expectedOutcome));
		
	//Perform
		this.mock.perform(mockRequest).andExpect(matchStatus).andExpect(matchContent);
}

```

### User Acceptance Tests 
User acceptance Testing is the last phase of testing where a developer can verify to see if the product works for the user.
This is done through the use of selenium a tool which automates web browsers and tests their functionality.

* **User Acceptance Test Example:**
Here a test has been written to see if the update user function works on the front end.
```
	
	@Test
	@Order(4)
    public void UpdateUserTest() throws InterruptedException {
		//given that I can access my todo web app
				driver.get(URL);
				
				//When: I navigate to the update user tab 
				targ = driver.findElement(By.xpath("/html/body/nav/div/ul/li[5]/a"));
				targ.click();
			
				
				//And: I enter a User ID
				targ = driver.findElement(By.id("userID"));
				targ.sendKeys("1");
				
				
			 
			    //And I enter a new user name:
				targ = driver.findElement(By.id("newUserName"));
				targ.sendKeys("Bob");
				
				//And I enter a new user surname:
				targ = driver.findElement(By.id("newUserSurname"));
				targ.sendKeys("Geldoff");
				
			    //And I click update:
							targ = driver.findElement(By.xpath("/html/body/div[1]/div/form/div/button"));
							targ.click();
				
				//And: I navigate to the home page user list:
							targ = driver.findElement(By.xpath("/html/body/div[2]/a"));
							targ.click();
				
				
				
				//And then I get output:
				targ = driver.findElement(By.xpath("/html/body/div[1]/div/ul/li[2]"));
				String output = targ.getText();
				
				//Assertion: 
				assertEquals("Name: Bob", output);

				
			}
```


## Deployment
1. Go to project folder and open cmd line.
2. Type: mvn clean package
3. cd into the target folder of the project
4. then type $java -jar ToDo_Project-0.0.1-SNAPSHOT.jar 
5. Access the front end by going to http://127.0.0.1:8081/HTML/Andi/Index.html





## Built With

* [Maven](https://maven.apache.org/) - Dependency Management

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Andi Berisha** 
* **Adige Uraih ** 
* **Claes Alfonso**
* **Celina Basa **  

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

## Acknowledgments
* **Savannah Vaithilingam**


