var t2=`
## Introduction

### Scope and Context
The Learning Tools Interoperability (LTI) Advantage standard is designed to be the full implementation of LTI version 1.3 Core as well as the three core extensions to the 1.3 version of LTI. These four components together constitute what is called "LTI Advantage". Conformance to LTI Advantage, then, requires implementation of the four components in total, enumerated below as follows:
* LTI Core Version 1.3
* Deep Linking Extension Version 2
* Names and Roles Services Version 2
* Assignments and Grades Services Version 2

The purpose of this document is to provide the details of conformance process for LTI Advantage Version 1.0, and to describe the certifications necessary for each of the components. Certification suite components created by IMS Global are to be made available for
* Learning Platforms that consume Tools that enable Learning Tool Interoperability
* Tools that provides interoperability functions to be utilized by Learning Platforms

### Status of this Document
This document is a Member Release, meaning that the technical solution has now been available to the IMS Global members prior to the release of the certification suite and prior to any complete certifications. This document will go through several minor releases in the future.

IMS strongly encourages its members and the community to provide feedback to continue the evolution and improvement of the LTI Advantage standard. To join the LTI Advantage community as an IMS Member please see ...

Public contributions, comments and questions can be posted here: SLACK ADDRESS

### Structure of this Document
The structure of this document is:

|Document Section|Explanation|
|:---------|:-------------------------------------|
|2. The Conformance Process|The formal process to be undertaken by a vendor wishing to obtain certification|
|3. Conformance Steps for Platforms|The steps for each specification to be taken for conformance by the Learning Platform|
|4. Conformance Steps for Tools|The steps for each specification to be taken for conformance by the Tool|
|5. LTI Advantage Certifications|A summary of the certifications available for LTI Advantage|

### Related Documents
* Link to Security specification
* Link to LTI Version 1.3 specification
* Link to Deep Linking 2.0 specification
* Link to Names and Roles Service 2.0 specification
* Link to Assignments and Grade Services 2.0 specification
* The quick-start guide to Tool Testing and Certification
* The quick-start guide to Platform Testing and Certification

### Nomenclature
|Acronym/Abbreviation|Actual Name or Explanation|
|:---------|:-------------------------------------|
|API|Application Programming Interface|
|HTTP|HyperText Transfer Protocol|
|REST|Representational State Transfer|
|TLS|Transport Layer Security (for HTTP)|
|JSON|Javascript Object Notation|
|JWT (jot)|JSON Web Token|
|JWK|JSON Web Key - used to verify signature of signed JWT|
|JWKS|Web-available URL for Public Key Retrieval|
|"Well-Known Url" (syn. JWKS)|Web-available URL for Public Key Retrieval|
|OAuth2|Generalized Shorthand for a TLS-secured scheme for authorization token retrieval and use. Usually meant as a synonym for the use of Bearer Tokens in authorization schemes for access to protected resources via web URLs|
|Private Key|Cryptographic Asymmetric Key for Signing|
|Public Key|Cryptographic Asymmetric Key for Verification of JWT Signature|
|RSA|Rivest-Shamir-Adleman cryptosystem|
|RSA 256|RSA Cryptographic key length used in Certification Processes|
|"Symmetric cryptosystem"|Disallowed methods of cryptographic signing for all LTI Launches for LTI v 1.3 as well as the retrieval of OAuth2 tokens in LTI 1.3. Examples include TwoFish, Blowfish, AES, RC4, DES and others where a single key or derived variant of a single key is used for both encryption and decryption|

<section id='conformance'><h2>Conformance Statements</h2></section>

## 2. The Conformance Process
### 2.1 Conformance Testing Process
The process for conformance testing implementations of LTI Advantage includes the following:
* Go to the IMS Conformance Test Suite for LTI Advantage. The link to the certification suite is https://ltiadvantagevalidator.imsglobal.org/ltiadv/certification.html
* (Optional) Print the PDF of instructions for either the Tool or the Platform testing
* Input the required setup parameters which include:
 * Your Full Name
 * Your Email Address
 * Your Company or Group's Name
 * The Product Name to be tested
 * The Product Version to be tested
 * The setup parameters for the testing that you plan to run
* Follow the instructions for running each test
* Once all tests have been successfully run, go to the Results page and submit test results for consideration of conformance

NOTE: <b>All</b> tests must be passed for either the Platform or the Tool to be considered compliant. It is <em>possible</em> in rare circumstances that a Tool may not have the need for one of the three extensions that comprise LTI Advantage. The Certification Suite will provide feedback opportunities for those cases. However, in general <b>all</b> tests are always required.

### 2.2 General Requirements for Conformance Testing Setup
Nearly all communication between Learning Platforms and Tools in the LTI Version 1.3 is done via the mechanism of the JSON Web Token or JWT (pronounced "jot"). This is a significant change from previous versions of LTI. Security of the JWT is achieved through the use of TLS-secured web channels, as well as signing of the JWT with asymmetric cryptosystems. Note that <b>in production</b> Learning Platforms may utilize most any asymmetric cryptography that is available for general use for the signing and verification of signatures for the JWT - provided that the Tools can work with the system used as well. However, for the purposes of commonality, a minimum set of RSA 256 will be required to be offered by all Learning Platforms (for the production of the keys) and Tools (for the utilization of the provided keys). As such, RSA 256 will be one and only option provided in the Certification Suite provided by IMS Global for Conformance testing.
Note, then, the following requirements:
* All Learning Platforms and Tools <b>must</b> provide the mechanisms (the libraries) for signing and verification of signatures for JWTs signed with RSA 256.
* In <b>no cases shall the signing of a JWT with a public key be legal or respected</b>. All JWT instances to be signed must be signed only with the provided private key to be used for that portion of the communication.
* In <b>no cases shall the use of Symmetric Cryptosystems be considered legal and use of them is expressly forbidden.</b>
* All communication endpoints <b>must be secured with TLS (SSL-alone is expressly forbidden).</b>

#### 2.2.1 Requirements for Conformance for Learning Platforms
All tests for LTI Advantage for the Learning Platform will be required. The rough order of the testing will be:
1. Tests for LTI 1.3 core
2. Tests for Deep Linking
3. Tests for Names and Roles Services
4. Tests for Assignment and Grade Services

Please take note of the following requirements for Platform Testing.
* A Platform <b>must</b> provide a Well-Known Url (JWKS) for the retrieval of Public Cryptographic keys in the setup of the certification testing.
* A Platform <b>must</b> provide access to an OAuth2 Services URL where a bearer token can be retrieved.
* A Platform <b>must</b> provide a unique client_id that should be used to retrieve a OAuth2 bearer token - scoped for use in a service call to the testing system. Please note that testing will not be possible without the use of a unique client_id. Please do not attempt to use a key that might conflict with others such as "client123", etc.
* A Platform <b>must</b> provide to the Certification testing system a Private RSA 256 Key that is to be used sign requests to the OAuth2 Services URL.

Each of the above parameters will be required in the testing setup.

#### 2.2.2 Requirements for Conformance for Tools
All tests for LTI Advantage for the Tool will be required. The rough order of the testing will be:

1. Tests for LTI 1.3 core
2. Tests for Deep Linking
3. Tests for Names and Roles Services
4. Tests for Assignment and Grade Services

If it is the case that one of the Extensions is not to be tested, please provide the reason why the extension omitted does not apply to the Tool in question. Note that in most cases exceptions are not allowed.

(Optional) In the testing of Tools the Certification Suite is acting as a Learning Platform, though as a Platform the suite is very basic. It is possible, though not required, that the Tool may provide its own Well-Known URL system for the signing of JWT instances. If that is the case please be sure to override the Well-Known URL system in the Certification Suite during test setup.

### 2.3 Bugs/Issues with the Certification Suite
Should you encounter problems or bugs in the certification suite please send an email issue to bug-report@imsglobal.org. You may alternatively log an issue directly in Github at https://github.com/IMSGlobal/certificationsuite-issues/issues

## 3 Learning Platform Conformance
The testing is designed to be done in a linear fashion, from start to finish. While it is permitted to go forward and backward in the testing without running a test, please note that skipped tests are considered failures in the case of a submission for conformance.

### 3.1 LTI Core testing
Four distinct payloads are required to be tested in LTI Core testing.
#### 3.1.1 Full Student Payload testing
Submit a "full student" payload to the url https://ltiadvantagevalidator.imsglobal.org/ltiplatform/toollaunch.html . Note that this payload should have the full information on the Learner/Student (including name, email, etc.). Once the payload has been received, press the "Continue" button to load the first test. Run each test in the following manner.
1. (Optional) Open the Test Payload tab and inspect the JWT payload
2. Open the Test Option tab
2. Update Test Options provided (if possible or needed)
3. Click the Button "Run Test"
4. When the test is complete the tab "Test Results" should be active. Please click the button "Confirm Results" to save the test results for this particular test
5. Note that confirming results sets the test in the Certification Suite to PASS or FAIL as necessary
6. Press the Navigation Button "Next Test" to load the next test

The tests required for the Full Student Payload are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Payload is LTI 1.3|Tests that JWT received conforms to format of 1.3 Core Launch JWT|
|Payload Timestamps Valid|The iat and exp Timestamps are valid|
|Payload Signed with RSA 256|Header for JWT confirmed that signing done is RSA 256|
|Payload Signature Valid|The KID in the JWT Header corresponds to the correct Public Key on the Well-Known URL and the Public Key for this KID correctly verifies the JWT Signature|
|Payload is Complete|All Required 1.3 Core Launch Claims are present|
|Payload LTI Version|Required LTI Version Claim is set correctly to 1.3.0|
|Payload Roles Correct|The Roles in the JWT are those of the Learner/Student and not an Instructor|
|Payload is Free of Extra Whitespace|There should be no extra Whitespace before or after any values in the JWT|
|Payload Expected Received|You Must Affirm that All Expected Values in the JWT were received|

#### 3.1.2 Student Payload Without PII testing
Submit a "student" payload that does not contain Personal Identifying Information to the url https://ltiadvantagevalidator.imsglobal.org/ltiplatform/toollaunch.html . Note that this payload should only have information on the Learner/Student needed to identify the student without PII. Once the payload has been received, press the "Continue" button to load the first test. Run each test in the same manner as was done with the previous payload.

The tests required for the Student Payload Without PII are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Payload is LTI 1.3|Tests that JWT received conforms to format of 1.3 Core Launch JWT|
|Payload Timestamps Valid|The iat and exp Timestamps are valid|
|Payload Signed with RSA 256|Header for JWT confirmed that signing done is RSA 256|
|Payload Signature Valid|The KID in the JWT Header corresponds to the correct Public Key on the Well-Known URL and the Public Key for this KID correctly verifies the JWT Signature|
|Payload is Complete|All Required 1.3 Core Launch Claims are present|
|Payload LTI Version|Required LTI Version Claim is set correctly to 1.3.0|
|Payload Roles Correct|The Roles in the JWT are those of the Learner/Student and not an Instructor|
|Payload Without PII|No Personal Identifying Information is present in the claims provided in the JWT for PII|
|Payload is Free of Extra Whitespace|There should be no extra Whitespace before or after any values in the JWT|
|Payload Expected Received|You Must Affirm that All Expected Values in the JWT were received|

#### 3.1.3 Full Instructor Payload testing
Submit a "full teacher" payload to the url https://ltiadvantagevalidator.imsglobal.org/ltiplatform/toollaunch.html . Note that this payload should have the full information on the Teacher/Instructor (including name, email, etc.). Once the payload has been received, press the "Continue" button to load the first test. Run each test in the same manner that was done with the previous payloads.

The tests required for the Full Teacher Payload are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Payload is LTI 1.3|Tests that JWT received conforms to format of 1.3 Core Launch JWT|
|Payload Timestamps Valid|The iat and exp Timestamps are valid|
|Payload Signed with RSA 256|Header for JWT confirmed that signing done is RSA 256|
|Payload Signature Valid|The KID in the JWT Header corresponds to the correct Public Key on the Well-Known URL and the Public Key for this KID correctly verifies the JWT Signature|
|Payload is Complete|All Required 1.3 Core Launch Claims are present|
|Payload LTI Version|Required LTI Version Claim is set correctly to 1.3.0|
|Payload Roles Correct|The Roles in the JWT are those of the Instructor and not a Student|
|Payload is Free of Extra Whitespace|There should be no extra Whitespace before or after any values in the JWT|
|Payload Expected Received|You Must Affirm that All Expected Values in the JWT were received|

#### 3.1.4 Teacher/Instructor Payload Without PII testing
Submit a "teacher" payload that does not contain Personal Identifying Information to the url https://ltiadvantagevalidator.imsglobal.org/ltiplatform/toollaunch.html. Note that this payload should only have information on the Teacher/Instructor needed to identify the teacher without PII. Note that email address is allowed in this payload. Once the payload has been received, press the "Continue" button to load the first test. Run each test in the same manner as was done with the previous payloads.

The tests required for the Teacher Payload Without PII are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Payload is LTI 1.3|Tests that JWT received conforms to format of 1.3 Core Launch JWT|
|Payload Timestamps Valid|The iat and exp Timestamps are valid|
|Payload Signed with RSA 256|Header for JWT confirmed that signing done is RSA 256|
|Payload Signature Valid|The KID in the JWT Header corresponds to the correct Public Key on the Well-Known URL and the Public Key for this KID correctly verifies the JWT Signature|
|Payload is Complete|All Required 1.3 Core Launch Claims are present|
|Payload LTI Version|Required LTI Version Claim is set correctly to 1.3.0|
|Payload Roles Correct|The Roles in the JWT are those of the Instructor and not a Student|
|Payload Without PII|No Personal Identifying Information is present in the claims provided in the JWT for PII|
|Payload is Free of Extra Whitespace|There should be no extra Whitespace before or after any values in the JWT|
|Payload Expected Received|You Must Affirm that All Expected Values in the JWT were received|

### 3.2 Deep Linking Message testing
Deep Linking Message (formerly Content Item) is tested in a similar fashion to the LTI Core testing. The exceptions are that the Deep Linking is sent to its own URL. Additionally the DeepLinkingRequest message type is different from the LTI Core launch. However, the principle is the same.

Find the Deep Linking payload submission page for in the Certification Suite (it is the first page following LTI Core testing). Submit a Deep Linking Request message to the url https://ltiadvantagevalidator.imsglobal.org/ltiplatform/deeplinklaunch.html . Once the Request has been submitted, please press the "Continue" button to begin the testing.  Run each test in the same manner as was done with the LTI 1.3 payloads.

The required tests for the Deep Linking Message are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Payload is LTI 1.3|Tests that JWT received conforms to format of 1.3 Deep Linking JWT|
|Payload Timestamps Valid|The iat and exp Timestamps are valid|
|Payload Signature Valid|The KID in the JWT Header corresponds to the correct Public Key on the Well-Known URL and the Public Key for this KID correctly verifies the JWT Signature|
|Payload is Complete|All Required 1.3 Deep Linking Claims are present|
|Payload LTI Version|Required LTI Version Claim is set correctly to 1.3.0|
|Send Response|Test Sends the Deep Linking Response from the Certification Suite to the deep_link_response_url from the Request Message|
|Proof of LTI Link|You Must Upload a Screenshot of your Learning Platform showing the absorbed LTI Link from the Deep Linking Response just sent|


### 3.3 Names and Roles Service Testing
The Names and Roles Service is one that is called by the Tool into the Learning Platform based on the parameters sent in the LTI Core launch. As such, the conformance for this service will begin in a similar fashion to the LTI Core 1.3 testing. A LTI 1.3 Launch Payload will be sent to the Certification Suite that contains the required Names and Roles claims. From that point the testing will begin.

Find the Names and Roles payload submission page for in the Certification Suite (it is the first page following Deep Linking testing). Submit a standard LTI 1.3 launch, being sure to include the Names and Roles claims in the message. Once the Payload has been submitted, please press the "Continue" button to begin the testing.  Run each test in the same manner as was done with the LTI 1.3 Core payloads.

The required tests for the Names and Roles Service testing are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Payload is LTI 1.3|Tests that JWT received conforms to format of 1.3 Core Launch JWT|
|Payload Timestamps Valid|The iat and exp Timestamps are valid|
|Payload Signature Valid|The KID in the JWT Header corresponds to the correct Public Key on the Well-Known URL and the Public Key for this KID correctly verifies the JWT Signature|
|Payload is Complete|All Required 1.3 Core Launch Claims are present in addition to the required Names and Roles Claim|
|Generate OAuth2 Call|Test Generates OAuth2 call with client_id for the test, and submits to the OAuth2 server with the correct role parameter - expecting a Bearer Token response|
|OAuth2 Response Valid|Test Validates Bearer Token Response is correct and complete|
|Do Names and Roles Call|Test uses Bearer Token just received to make GET to URL for Names and Roles for this Context - expecting a Names and Roles response|
|Names and Roles Payload|Test confirms Payload type complete and formatted correctly for Names and Roles|
|Payload Contains Expected Data|You Must Affirm that All Expected Values in the JWT were received in Names and Roles Response|

### 3.4 Assignment and Grade Services Testing
The Assignment and Grades Service (AGS) is one that is called by the Tool into the Learning Platform based on the parameters sent in the LTI Core launch. As such, the conformance for this service will begin in a similar fashion to the LTI Core 1.3 testing. A LTI 1.3 Launch Payload will be sent to the Certification Suite that contains the required AGS claims. From that point the testing will begin.

Find the AGS Payload submission page for in the Certification Suite (it is the first page following Names and Roles testing). The Platform will be required to submit a standard LTI 1.3 launch, being sure to include the AGS claim in the message. Once the Payload has been submitted, please press the "Continue" button to begin the testing.  Run each test in the same manner as was done with the LTI 1.3 Core payloads.

The required tests for the Assignment and Grades Service testing are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Payload is LTI 1.3|Tests that JWT received conforms to format of 1.3 Core Launch JWT|
|Payload Timestamps Valid|The iat and exp Timestamps are valid|
|Payload Signature Valid|The KID in the JWT Header corresponds to the correct Public Key on the Well-Known URL and the Public Key for this KID correctly verifies the JWT Signature|
|Payload is Complete|All Required 1.3 Core Launch Claims are present in addition to the required Assignments and Grades Claim|
|Generate OAuth2 Call|Test Generates OAuth2 call with client_id for the test, and submits to the OAuth2 server with the correct role parameter - expecting a Bearer Token response|
|OAuth2 Response Valid|Test Validates Bearer Token Response is correct and complete|
|Do AGS Call for lineitems URL|Test uses Bearer Token just received to make GET to lineitems URL for Assignments and Grades for this Context - expecting an empty lineitem response|
|AGS Response is Complete|Test the Required MIME type and the returned values|
|Do AGS Call for lineitem URL|Test uses Bearer Token to make POST to lineitem URL for Assignments and Grades for this Context - attempt to create the lineitem|
|AGS Response is Complete|Test the Required MIME type and the returned values for POST call|
|Do AGS Call for lineitems URL|Test uses Bearer Token to make GET to lineitems URL for Assignments and Grades for this Context - expecting the new lineitem present|
|AGS Response is Complete|Test the Required MIME type and format of the returned response|
|AGS Response is Correct|Test the lineitem returned is the correct lineitem created|
|Do AGS POST for Score|Test uses Bearer Token to POST a score to lineitem URL for Assignments and Grades for this Context - expecting the score to be recorded for this context and resource_id|
|AGS Response is Complete|Test the Required MIME type and format of the returned response|
|AGS Response is Correct|Test the POST Response returned is the correct|
|Do AGS GET for Result|Test uses Bearer Token to GET a result to lineitem URL for Assignments and Grades for this Context - expecting the previously POSTED score to be returned for this context and resource_id|
|AGS Response is Complete|Test the Required MIME type and format of the returned response format|
|AGS Response is Correct|Test the GET Response returned is the correct|
|AGS Response Contains Expected Data|You Must Affirm that All Expected Values in the JWT were received in Names and Roles Response|
|Submit Launch for Different Student|Platform submits new launch into Context and Resource Id|
|Payload is LTI 1.3|Tests that JWT received conforms to format of 1.3 Core Launch JWT|
|Payload Timestamps Valid|The iat and exp Timestamps are valid|
|Payload Signature Valid|The KID in the JWT Header corresponds to the correct Public Key on the Well-Known URL and the Public Key for this KID correctly verifies the JWT Signature|
|Payload is Complete|All Required 1.3 Core Launch Claims are present in addition to the required Assignments and Grades Claim|
|Generate OAuth2 Call|Test Generates OAuth2 call with client_id for the test, and submits to the OAuth2 server with the correct role parameter - expecting a Bearer Token response|
|OAuth2 Response Valid|Test Validates Bearer Token Response is correct and complete|
|Do AGS Call for lineitems URL|Test uses Bearer Token just received to make GET to lineitems URL for Assignments and Grades for this Context - expecting the previously created lineitem as part of the returned payload|
|AGS Response is Complete|Test the Required MIME type and format of the returned response format|
|AGS Response is Correct|Test the lineitem returned is the correct lineitem previously created|
|Do AGS POST for Score|Test uses Bearer Token to POST a score to lineitem URL for Assignments and Grades for this Context - expecting the score to be recorded for this context and resource_id|
|AGS Response is Complete|Test the Required MIME type and format of the returned response|
|AGS Response is Correct|Test the POST Response returned is the correct|
|Do AGS GET for Result|Test uses Bearer Token to GET a result to lineitem URL for Assignments and Grades for this Context - expecting both previously POSTED scores to be returned for this context and resource_id|
|AGS Response is Complete|Test the Required MIME type and format of the returned response|
|AGS Response is Correct|Test the GET Response returned is the correct|
|Do AGS Call for lineitems URL|Test uses Bearer Token to make GET to lineitems URL for Assignments and Grades for this Context - expecting the previously created lineitem as part of the returned payload with the scores previously provided|
|AGS Final Response Contains Expected Data|You Must Affirm that All Expected Values in the Grade Book recorded were those sent by Platform|

### 3.5 Submission of Completion
Please Submit your Testing Results from the Results page. The form for submission will have to be completed in full. The form contains the following inputs:

|Submission Form Field|Required|Description|
|:---------|:--:|:----------------------------------------|
|Contact Name 1|Y|The Name of the First Contact Person for your Company or Group|
|Contact Email 1|Y|The Email of the First Contact Person for your Company or Group|
|Contact Title 1|Y|The Title of the First Contact Person for your Company or Group|
|Contact Name 2|Y|The Name of the Second Contact Person for your Company or Group|
|Contact Email 2|Y|The Email of the Second Contact Person for your Company or Group|
|Contact Title 2|Y|The Title of the Second Contact Person for your Company or Group|
|Checkbox - Use Other Software|Y|Please Check "ON" only if You are using a Third-Party Certified Software. Leave "OFF" otherwise|
|Third-Party Software|N|You Must List the Name of the Third-Party Package if Used|
|Checkbox - Affirmation|Y|Please Check "ON" to Affirm That You and Your Group have Performed the Tests As Described in the Results Matrix|
|Comment|N|Please Input any Comments or Requests for Exemptions from the Testing Requirements|

Following submission of this form you should receive an email detailing the test results that are submitted for consideration.

## 4 Tool Conformance
The testing is designed to be done in a linear fashion, from start to finish. While it is permitted to go forward and backward in the testing without running a test, please note that skipped tests are considered failures in the case of a submission for conformance.

Please Note: Each test in Tool testing is designed to stand alone as much as possible. This means that in each case a new payload is generated by the Certification Suite and submitted to the Tool for consideration. For each test the generated JWT payload is available to inspect in the tab for the Testing Payload. The inspection of the JWT payload can be very helpful for debugging when you need it. However, in every case you are then required to give to the suite a piece of proof that your Tool received the payload and worked with it effectively. The best example proof to provide would be to input a piece of the log messages from your Tool for this test. However, in the case that the log messages are not available, you may also upload a screenshot that shows the results of the testing. <b>You should only use screenshots to show proof of success</b>. In the case of failures please input the failure explanations in the provided text input and leave the success/fail toggle to "OFF".

### 4.1 LTI Core testing
Tool Testing for the 1.3 Core is split into 4 separate sections.
#### 4.1.1 Known "Bad" Payloads
The first few tests will be those that are in one or another way known to be invalid for 1.3 Core Launches. The tests below are provided for testing the Tool's response to known "bad" launches:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|No KID Sent in JWT header|The KID is missing from the header of the JWT (preventing the verification of the signing of the JWT)
|Incorrect KID in JWT header|The KID provided is incorrect (and signing verification is impossible)
|Wrong LTI Version|The LTI version claim contains the wrong version|
|No LTI Version|The LTI version claim is missing|
|Invalid LTI message|The provided JSON is NOT a 1.3 JWT launch|
|Missing LTI Claims|The provided 1.3 JWT launch is missing one or more required claims|
|Timestamps Incorrect|JWT iat and exp timestamp Values are Invalid|
|messsage_type Claim Missing|The Required message_type Claim Not Present|
|role Claim Missing|The Required role Claim Not Present|
|deployment_id Claim Missing|The Required deployment_id Claim Not Present|
|resource_link_id Claim Missing|The Required resource_link_id Claim Not Present|
|user Claim Missing|The Required sub Claim Not Present|

#### 4.1.2 Valid Teacher Launches
Following the known "bad" payload launches are valid Teacher payloads. The tests to be done next are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Valid Instructor Launch|Launch LTI 1.3 Message as Instructor|
|Valid Instructor Launch with Roles|Launch Instructor with Multiple Role Values|
|Valid Instructor Launch Short Role|Launch Instructor with Short Role Value|
|Valid Instructor Launch Unknown Role|Launch Instructor with Unknown Role|
|Valid Instructor Launch No Role|Launch Instructor With No Role|
|Valid Instructor Launch Email Only|Launch Instructor Only Email|
|Valid Instructor Launch Names Only|Launch Instructor Only Names|
|Valid Instructor No PII|Launch Instructor No PII|
|Valid Instructor Email Without Context|Launch Instructor With Email No Context|
|Valid Instructor New resource_id|Launch LTI Instructor New resource_link_id|


#### 4.1.3 Valid Student Launches
Following the various valid instructor payload launches are valid Student/Learner payloads. The tests to be done next are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Valid Student Launch|Launch LTI 1.3 Message as Student|
|Valid Student Launch with Roles|Launch Student with Multiple Role Values|
|Valid Student Launch Short Role|Launch Student with Short Role Value|
|Valid Student Launch Unknown Role|Launch Student with Unknown Role|
|Valid Student Launch No Role|Launch Student With No Role|
|Valid Student Launch Email Only|Launch Student Only Email|
|Valid Student Launch Names Only|Launch Student Only Names|
|Valid Student No PII|Launch Student No PII|
|Valid Student Email Without Context|Launch Stduent With Email No Context|
|Valid Student New resource_id|Launch LTI Student New resource_link_id|

### 4.2 Deep Linking Message testing
Deep Linking Message (formerly Content Item) is tested in a similar fashion to the LTI Core testing. The exceptions are that the Deep Linking Payload is different and is sent (in some cases) to a different URL (based on Tool choices).

The following tests are done to test the Deep Linking workflow:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Send the Request Payload|Send Deep Linking Request Payload to the Tool|
|Receive the Response Payload|Verify Deep Linking Response Payload was Received|
|Response Format Valid|Verify Response is Deep Linking Response|
|Response Timestamps Valid|Deep Linking - Verify Response Timestamps|
|Signature Valid|Deep Linking - Verify JWT Signature|
|Required Claims Verified|Deep Linking - Verify Required Claims Present|
|Affirm Response|Deep Linking - Affirm Response Values Sent|

### 4.3 Names and Roles Service Testing
Names and Roles Service (formerly Membership) is tested as pure service (without any UI). The Tool is required to acquire an OAuth2 token from the IMS Global testing OAuth2 server and then do the GET to the known service instantiation URL communicated in the testing setup.

The required tests for the Names and Roles Service testing are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Receive Request|Names and Roles - Receive Service Request|
|Verify JSON Header|Names and Roles - Verify Request Header Required Parameters|
|Verify Bearer Token|Names and Roles - Verify OAuth2 Token|
|Verify Bearer Scope|Names and Roles - Verifiy OAuth2 Scopes|
|Generate and Send Response|Names and Roles - Affirm Service Response|
|Affirm Response Received|Affirmation/Upload Proof of Response Received|

### 4.4 Assignment and Grade Services Testing
Assignments and Grade Service (AGS) is tested as pure service (without any UI). The Tool is required to acquire an OAuth2 token from the IMS Global testing OAuth2 server and then do the GET to the known service instantiation URL communicated in the testing setup.

The required tests for the Names and Roles Service testing are:

|Test Name|Test Description|
|:---------|:-------------------------------------|
|Receive lineitems Request|AGS - Receive Service Request|
|Verify JSON Header|AGS - Verify Request Header Required Parameters|
|Verify Bearer Token|AGS - Verify OAuth2 Token|
|Verify Bearer Scope|AGS - Verifiy OAuth2 Scopes|
|Generate and Send Response|Send empty AGS response|
|Receive lineitem Request|AGS - Receive Service Request|
|Verify JSON Header|AGS - Verify Request Header Required Parameters|
|Verify Bearer Token|AGS - Verify OAuth2 Token|
|Verify Bearer Scope|AGS - Verifiy OAuth2 Scopes|
|Generate and Send Response|Send lineitem created AGS response|
|Receive score POST Request|AGS - Receive Service Request|
|Verify JSON Header|AGS - Verify Request Header Required Parameters|
|Verify Bearer Token|AGS - Verify OAuth2 Token|
|Verify Bearer Scope|AGS - Verifiy OAuth2 Scopes|
|Generate and Send Response|Send score created AGS response|
|Receive result GET Request|AGS - Receive Service Request|
|Verify JSON Header|AGS - Verify Request Header Required Parameters|
|Verify Bearer Token|AGS - Verify OAuth2 Token|
|Verify Bearer Scope|AGS - Verifiy OAuth2 Scopes|
|Generate and Send Response|Send result AGS response|
|Affirm Response Received|Affirmation/Upload Proof of Response Received|


### 4.5 Submission of Completion
Please Submit your Testing Results from the Results page. The form for submission will have to be completed in full. The form contains the following inputs:

|Submission Form Field|Required|Description|
|:---------|:--:|:----------------------------------------|
|Contact Name 1|Y|The Name of the First Contact Person for your Company or Group|
|Contact Email 1|Y|The Email of the First Contact Person for your Company or Group|
|Contact Title 1|Y|The Title of the First Contact Person for your Company or Group|
|Contact Name 2|Y|The Name of the Second Contact Person for your Company or Group|
|Contact Email 2|Y|The Email of the Second Contact Person for your Company or Group|
|Contact Title 2|Y|The Title of the Second Contact Person for your Company or Group|
|Checkbox - Use Other Software|Y|Please Check "ON" only if You are using a Third-Party Certified Software. Leave "OFF" otherwise|
|Third-Party Software|N|You Must List the Name of the Third-Party Package if Used|
|Checkbox - Affirmation|Y|Please Check "ON" to Affirm That You and Your Group have Performed the Tests As Described in the Results Matrix|
|Comment|N|Please Input any Comments or Requests for Exemptions from the Testing Requirements|

Following submission of this form you should receive an email detailing the test results that are submitted for consideration.

`;
