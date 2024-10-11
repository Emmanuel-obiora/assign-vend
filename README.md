# **Cypress Automation Test Suite**

## **Introduction**

This automation test suite is designed to automate two test cases—**Web Automation** and **API Automation**—using Cypress as the core test framework and JavaScript as the programming language. The goal of this project is to provide clean, readable, and well-structured automated tests that cover key aspects of both web-based user interaction and REST API testing.

The Cypress framework is chosen due to its rich functionality, ability to run directly in the browser, and simple syntax, making it easy to maintain and scale. 

This test suite is:
- **Platform Independent**: Runs on Windows, Mac, and Linux.
- **Scalable**: Can be easily expanded and managed due to its clean architecture and Cypress' powerful ecosystem.
- **Focused on Best Practices**: Ensures readable, clean code with modular design principles.

---

## **Test Cases**

### **1. Web Automation (E-commerce Product Selection on Amazon)**

#### **Test Description:**
This test automates the process of selecting a product from Amazon based on specific filters (Samsung brand televisions). The test involves:
1. Navigating to [Amazon](https://www.amazon.in).
2. Clicking the hamburger menu to open the main navigation.
3. Navigating to the **TV, Appliances, and Electronics** section and selecting **Televisions**.
4. Filtering the television results by **Samsung** brand.
5. Sorting the results by **price: High to Low**.
6. Clicking on the second highest priced Samsung television.
7. Switching to the new window that opens for the selected product.
8. Asserting the presence of the "About this item" section and logging the text to the console.

#### **Benefits of This Test:**
- **Automated Product Filtering**: Ensures that the website correctly displays and sorts the desired products based on filters and sorting preferences.
- **Cross-Window Interaction**: Demonstrates the ability to handle multiple windows within a browser session.
- **Validation of Critical Content**: Validates key information in the product description, ensuring data integrity and visibility for the user.

---

### **2. API Automation (User Creation and Validation on Reqres API)**

#### **Test Description:**
This test automates interactions with the Reqres API to create dummy users and validate the response. The key steps include:
1. Sending a POST request to the Reqres API endpoint (`https://reqres.in/api/users`) to create users with data provided from a JSON file.
2. Running a single test for two sets of user data:
   - First user: `{ "name": "admin", "job": "admin" }`
   - Second user: `{ "name": "ronaldo", "job": "player" }`
3. Asserting the following components of the API response:
   - **Response Code**: Ensure the API returns a status code of `201 Created`.
   - **Response Schema**: Validate the structure of the response matches the expected JSON schema.
   - **Response Time**: Ensure that the response time is within 2 seconds.
   - **Response Header**: Validate that the header contains `Content-Type: application/json`.

#### **Benefits of This Test:**
- **Automated API Interaction**: Verifies the functionality of the API in creating users and responding correctly.
- **Comprehensive Response Validation**: Ensures the API response has the correct status, schema, response time, and content type.
- **Data-Driven Testing**: By running the test for two sets of data, this approach demonstrates scalability and flexibility in handling multiple inputs.

---

## **Setup Instructions**

### **1. Prerequisites**
Before running the test suite, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org) (v12 or higher)
- [Cypress](https://www.cypress.io/) (Cypress will be installed through npm)

### **2. Project Installation**
To set up the project, follow these steps:
1. Clone the repository:
   ```bash
   https://github.com/Emmanuel-obiora/assign-vend.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Open the Cypress test runner:
   ```bash
   npx cypress open
   ```

### **3. Running the Tests**

#### **Running All Tests:**
To run the complete test suite, use the following command:
```bash
npx cypress run
```

#### **Running Specific Tests:**
To run a specific test file (for example, the web automation test or API test), specify the file path:
```bash
npx cypress run --spec "cypress/e2e/amazonTest.cy.js"
npx cypress run --spec "cypress/e2e/apiTest.cy.js"
```

### **4. Viewing Test Results**
- When you run Cypress in **headed mode** (`npx cypress open`), you can see the tests running in real-time in the browser.

---

## **Project Structure**

```bash
|-- cypress
    |-- downloads
    |-- e2e
        |-- amazonTest.cy.js        # Web automation test file
        |-- apiTest.cy.js           # API automation test file
    |-- fixtures
        |-- data.json               # JSON file containing data for API test
    |-- pageObjects          
        |-- AmazonPage.js           # page objects file
|-- node_modules                    # Dependencies
|-- cypress.config.js               # Cypress configuration file
|-- package-lock.json               # Project metadata and scripts
|-- package.json                    # Project metadata and scripts
|-- README.md                       # Documentation
```

---

## **Benefits of This Automation Test Suite**

1. **Improved Efficiency**:
   - By automating repetitive tasks like product filtering on e-commerce websites and API testing, manual effort is greatly reduced, allowing testers to focus on more complex tasks.
   
2. **Scalability**:
   - The project is designed with modularity in mind. New test cases can be easily added without disrupting the existing structure, making the framework scalable.

3. **Cross-Browser Testing**:
   - The web automation test runs on Chrome by default but can be configured to run on other browsers supported by Cypress (e.g., Firefox, Edge).

4. **Fast Feedback**:
   - With Cypress' fast execution, tests run quickly, providing almost instantaneous feedback, crucial for continuous integration pipelines.

5. **Better Coverage**:
   - By testing both front-end web interactions and backend APIs, the suite offers better coverage, ensuring the functionality of both layers of the application.

---
## **Limitation**
Cypress cannot natively interact with or control multiple browser tabs or windows simultaneously

## **Conclusion**

This Cypress Automation Test Suite is designed to automate both UI and API tests, providing an efficient, scalable, and maintainable solution for modern web applications. By adhering to best practices in coding and testing, this framework will enable fast, reliable, and cross-platform test execution that is easy to maintain and expand.

---

## **Other Information**

### Author

👤 **Obiora Emmanuel**

* QA Engineer

---