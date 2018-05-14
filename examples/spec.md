var _spec=`
<section>
## Overview

<section class="informative">
### Purpose and Scope
The EPUB Outcomes Specification provides a structured approach for supporting 
the passing of state and outcome data between an <a>EPUB</a> and a <a>Reading System</a>.  

This standard based approach enabled EPUB content authors to create interactive 
assessments and activities that can both save state and report outcomes back to 
compliant Reading Systems. This is not meant to replace other reporting standards, 
rather it provides a format for reporting granular results between an EPUB and a
Reading System, as is common in the world of textbooks, in a way that can be 
rolled up and transformed into other standards such as *LTI Assignment and Grade 
Services* [[LTI-AGS-20]] or *OneRoster Gradebook Services* [[ONEROSTER-11]].    

This EPUB Outcomes Specification covers:
* Communication between an EPUB and a Reading System only
* EPUB Saving and Retrieving state data to the Reading System
* EPUB Sending and Retrieving result data to the Reading System
* Organizing result data within an EPUB

This EPUB Outcomes Specification does not cover:
* Transformation of data to other standards
* Conformance of Reading Systems
</section> 

<section class="informative">
### Use cases

| Title | Description |
|-------|-------------|
| Allow&nbsp;EPUB&nbsp;to&nbsp;record&nbsp;state | As a student interacts with elements within an <a>EPUB</a>, the <a>Reading System</a> saves student state.  When returning in a new session or on a new device the student sees the interactives in the state they were left.<br/><br/>When returning to a page all activities are in the same state as when the student last accessed the page.  There should not be a delay in re-populating the activities in the page.<br/><br/>Some examples of interactive elements might be a student’s choice in a multiple-choice questions, a journal entry, student letter choices in a game of hangman or a video seek timestamp. |
| Allow EPUB to report scorable results to the Reading System | A student submits scorable elements within an EPUB to the Reading System.  In a following session, the student sees the state and score from their previous submission.<br/><br/>When returning to a page all activities are in the same state as when the student last accessed the page.  There should not be a delay in re-populating the activities in the page.<br/><br/>Examples of scorable elements might be multiple choice questions, fill in the blank or matching activities that have programmatically assessable correct or incorrect answers. |
| Allow EPUB to report unscorable results to the Reading System | A student submits non-programmatically scorable elements within an EPUB in the Reading System.  Teachers have an out of spec way to assign the activity back to the student for feedback OR the ability to provide a score for the activity.<br/><br/>When returning to a page all activities are in the same state as when the student last accessed the page.  There should not be a delay in re-populating the activities in the page.<br/><br/>Examples of non-scorable elements might be journal entries or audio recordings.|
| Allow groups of scorable activities to be rolled up into a single score | A student submits a group of scorable activities, like a quiz, that contains multiple questions.  The course instructor accesses a performance report where those multiple student submissions are rolled up as a single quiz score. |
| Support transmission of grades to upstream reporting systems | A teacher views a reporting system where they can see student scores so they can enter them in an LMS gradebook in order to make up a portion of the student's final grade. |
| Allow scorable elements in an EPUB to be organized in a hierarchy of scores | A student submits every scorable element in a very large workbook.  The course instructor accesses a performance report where scores are organized in a structure that aligns with the structure of the content.  For example, an instructor may begin by seeing a list of rolled up chapter level scores, then may drill into a chapter to see a list of section level scores in a specific chapter, then may drill in again to see a list of activity scores within a specific section. |
| Allow EPUBs to report on incomplete activities | A teacher reviews a performance report for a single student looking for questions in a workbook that the student has not yet completed.  The teacher looks through the chapters, lessons, activities or quiz questions in the book until they find a question that the student has not yet submitted.  The absence of a score is often a valuable metric for a teacher so a performance report will need a way to see all of the scorable things in a book. |
| Allow upstream reporting systems to locate where in the EPUB a score came from | An instructor viewing a student score or submission in a performance report.  Clicking on the entry takes the instructor to the specific page and element in the EPUB that the student completed to produce the result so the teacher can see the context of the submission.  For example, the teacher may go to the report and see the student submitted the word “blue” and got 10/10 on the submission.  When the teacher is directed back to the page they might see a question like “What color is the sky?”|
| Allow Reading Systems to identify EPUBs that support state/result saving | A teacher accesses a reporting system that organizes student scores by book.  The teacher should not see an entry for books in the Reading System unless the books have the capability to return results.<br/><br/>A Reading System identifies a book as containing activities and triggers loading of score data when every page loads.  Content that is identified as not containing activities would avoid the time consuming process of attempting to load activity data that will never exist. |
| EPUB score data will be capable of translation to appropriate Caliper Metric Profiles | A student submits scores from an EPUB to the Reading System.  A Publisher or Institution has implemented their own reports or dashboards where they would like to view or report on score data.  The Reading System emits standard Caliper data using appropriate Caliper Metric Profiles to emit score related data. |
| Results should include state | A student submits multiple attempts for an activity.  A teacher accessing a reporting system might be interested in seeing the students first attempt vs their latest attempt.  When viewing an attempt a teacher would see the answer and score for each attempt. |
| Allow teachers to view when an activity was completed | A teacher views a reporting system where they can see when a student submitted an activity to ensure they did their homework on time. |
| Allow teachers to see how long a student took to complete work | A teacher views a reporting system where they can see how long a student took to complete an activity so they can identify students who are struggling with concepts. |
| Allow teachers to identify student that have not completed assignments | A teacher views a reporting system where they can see which students completed an activity so they can identify students that did not complete their homework. |
| Allow teachers to assess student progress towards activities | A teacher views a reporting system where they can see student progress so they can see who is progressing well towards completing an activity vs those that might be struggling to get through the required content. |
| Support transmission of success to upstream reporting systems | A teacher views a reporting system where they can see student success across their class.  An example of success might be an activity with 20 questions but a minimum score of 70% might indicate the activity was a success or not. |
| Compliant content should function in non compliant Reading Systems | Users accessing content created to save state and results will be loaded into Reading Systems that do not yet support that ability.  Users would be able to use the activities within the context of a page but would lose all state and results when changing a page. |
</section> <!--/use cases -->

<section>
### Terminology
<dl class="termlist" data-sort id="terms">
  
  <dt><dfn data-lt="EPUB|EPUBs">EPUB</dfn></dt>
  <dd>Definition</dd> 
  
  <dt><dfn data-lt="Reading System|Reading Systems">Reading System</dfn></dt>
  <dd>Definition</dd>                          
  
</dl>

</section>

<section>
### Conformance
</section>

<section>
### Document Set

#### Normative Documents

<dl>
<dt>Conformance and Certification guide</dt>
<dd>The conformance certification guide that accompanies this specification 
[[!EPUB-OUTCOMES-10-CERT]] defines conformance certification requirements for 
EPUB content that adheres to this specification. This version of this specification
does not define conformance certification for Reading Systems.</dd>
<dt>Reporting Document XSD Schema</dt>
<dd>The EPUB Outcomes Reporting XSD schema [[!EPUB-OUTCOMES-10-REP-XSD]] defines the
XML content model constraints for the <a>Reporting Document</a>.</dd>
<dt>Activities Document XSD Schema</dt>
<dd>The EPUB Outcomes Activities XSD schema [[!EPUB-OUTCOMES-10-ACT-XSD]] defines the
XML content model constraints for the <a>Activities Document</a>.</dd>

<dt>Errata</dt>
<dd>The errata [[!EPUB-OUTCOMES-10-ERRATA]] details any erratum registered for 
this version of this specification since its publication.</dd>
</dl>

#### Informative Documents
<dl>
<dt>Implementation Guide</dt>
<dd>The Implementation Guide this specification [[EPUB-OUTCOMES-10-IMPL]] provides
implementation and deployment advice for EPUB content authors as well as Reading System
implementors.</dd>
</dl>
</section>
</section> 

## Javascript API

<a>Reading Systems</a> that support this specification MUST provide a Javascript API 
[[!ECMASCRIPT]] that supports the <code>send()</code> and <code>retrieve()</code> functions 
as defined in the subsections below. A variety of object types can be 
sent or retrieved using these functions.

An informative typescript schema can be found at 
[https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/javascript/schema](https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/javascript/schema)

A collection of informative javascript and typescript samples can be found at 
[https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/javascript/samples](https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/javascript/samples)

### Send API

The <dfn>send API</dfn> is provided by the Reading System and provides a way to save 
state and submit results. <code><a>ActivityAttempt</a></code> and <code><a>ActivityState</a></code> 
objects can be bundled and sent at the same time in a single call to the send API.

<figure class="example">
<pre><code>

EPUB.Education.send (
  request: SendEducationDataRequest, callback?: EducationDataCallback
  ): void;

</code></pre>
<figcaption>Send API call signature</figcaption>
</figure>

The parameters passed with the send function are defined as follows.

| Name     | Data&nbsp;Type                | Required | Description                                                              |
|----------|--------------------------|----------|--------------------------------------------------------------------------|
| request  | <a>SendEducationDataRequest</a> | Yes      | A JSON [[!ECMA-404]] object containing an array of <a>EducationData</a> objects               |
| callback | <a>EducationDataCallback</a>    | No       | A callback function that @@@? MUST be ?@@@ called when the receiver's handling of the send invocation is complete |

### Retrieve API

The <dfn>retrieve API</dfn> is provided by the Reading System and provides a way to 
retrieve state and results from previous sessions and attempts.

**Example**

<figure class="example"><pre><code>

  EPUB.Education.retrieve(
    request: RetrieveEducationDataRequest, callback: EducationDataCallback
    ): void;

</code></pre><figcaption>Retrieve API signature</figcaption></figure>

The parameters passed with the retrieve function are defined as follows.

| Name     | Data&nbsp;Type                    | Required | Description                                                              |
|----------|------------------------------|----------|--------------------------------------------------------------------------|
| request  | <a>RetrieveEducationDataRequest</a> | Yes      | A JSON [[!ECMA-404]] object containing a <a>RetrieveEducationDataRequest</a> object           |
| callback | <a>EducationDataCallback</a>        | No       | A callback function that @@@? MUST be ?@@@ called when the receiver's handling of the retrieve invocation is complete |

## Data Objects

The Javascript API provides a method for sending and retrieving EducationData 
objects to and from the Reading System. EducationData objects are both sent to 
the server and later made available to the EPUB.@@@ should this say: The Reading System
MUST support a method to persist the objects, and MUST support making them 
available to the EPUB again. 

### EducationData Objects

There are multiple types of <dfn>EducationData</dfn> objects that can be generated.  
Below is a list of each type:

#### ActivityState Object

An <code><dfn>ActivityState</dfn></code> object is to be used by the EPUB to 
store stateful information on behalf of the student.  Examples of stateful data 
might be an incomplete multiple choice activity, an incomplete essay or a even 
the current location in a streaming video.

| Name        | Data&nbsp;Type | Required | Description                                                                           |
|-------------|-----------|----------|---------------------------------------------------------------------------------------|
| type        | String    | yes      | MUST be set to ActivityState  @@@was: "should be"                                    |
| createdTime | ISO 8601  | yes      | The date when the ActivityState object was created @@@full dateTime required? q applies globally                                  |
| activityId  | String    | yes      | References the <code>data-activityId</code> value in the <a>EPUB markup</a>                                    |
| data        | Object    | yes      | An object used to store data.  This object structure is defined by the EPUB activity.@@@reference? |
| format      | String    | no       | A string identifying the format of the state data.  This string should be used to identify the format of both the state and meta properties.  For example, "ims.qti_v2p1.choice" might be used to indicate that the state data and meta for a qti 2.1 Choice Activity.     |
| meta        | Object    | no       | An object used to include other data relevant to the activity.  This data could be used along with the state to reconstruct the full activity by upstream reporting systems.  The format of this data should be defined by the EPUB activity.@@@reference?  This object might include: 1. a url pointing to an activity manifest 2. an actual activity manifest (like the contents of a QTI XML) 3. an object containing question number, direction line, list of choices, etc. |

**Example**

<figure class="example"><pre><code>{
  "type": "ActivityState",
  "createdTime": new Date().toISOString(),
  "activityId": "unit_1_activity_5",
  "data": {"choice":5},
  "format":"vst.mc_v1_p0",
  "meta":{"data": JSONDATA }
}
</code></pre><figcaption>Example of the ActivityState object.</figcaption></figure>

#### ActivityAttempt Object

An <code><dfn>ActivityAttempt</dfn></code> object is used when submitting results to the 
Reading System.  The data submitted as part of an ActivityAttempt is both the 
raw JSON State Data and one or more ActivityResults.  The JSON State Data is 
intended to store enough data to reconstitute the activity and view student 
work in upstream systems.  The results array should contain one or more result 
that can be mapped to LineItems in the Reporting Document.

| Name        | Data&nbsp;Type | Required | Description                                                                                    |
|-------------|-----------|----------|------------------------------------------------------------------------------------------------|
| type        | String    | yes      | MUST be set to 'ActivityAttempt'                                              |
| createdTime | ISO 8601  | yes      | The date when the ActivityAttempt object was created                                           |
| activityId  | String    | yes      | References the <code>data-activityId</code> value in the <a>EPUB markup</a>.                   |
| state       | Object    | yes      | An object used to store data.  This JSONDATA object structure is defined by the EPUB activity. |
| results     | Array     | yes      | An array of one or more ActivityResult objects                                                 |
| format      | String    | no       | A string identifying the format of the state data.  This string should be used to identify the format of both the state and meta properties.  For example ims.qti_v2p1.choice might be used to indicate that the state data and meta for a qti 2.1 Choice Activity.     |
| meta        | Object    | no       | An object used to include other data relevant to the activity.  This data could be used along with the state to reconstruct the full activity by upstream reporting systems.  The format of this data should be defined by the EPUB activity.  This object might include: 1. a url pointing to an activity manifest 2. an actual activity manifest (like the contents of a QTI XML) 3. an object containing question number, direction line, list of choices, etc. |

**Example**

<figure class="example"><pre><code>{
  "data":
  [
    {
      "type": "ActivityAttempt",
      "createdTime": new Date().toISOString(),
      "activityId": "unit_1_activity_5",
      "state": {"data": JSONDATA },
      "results":
      [
        // One or more ActivityResult Objects
      ],
      "format":"vst.mc_v1_p0",
      "meta":{"data": JSONDATA }
    },...
  ]
}
</code></pre><figcaption>Example of the ActivityAttempt object</figcaption></figure>

#### ActivityResult Object

An <code><dfn>ActivityResult</dfn></code> object outlines a single assessable result associated 
with an element in an EPUB.  All properties are required.

| Name        | Data&nbsp;Type | Required | Description                                                  |
|-------------|-----------|----------|--------------------------------------------------------------|
| createdTime | ISO 8601  | yes      | The date when the result was created.                        |
| resultId    | String    | yes      | An associated <code>result.resultId</code> from the <a>Reporting Document</a> |
| response    | String    | yes      | A human-readable version of the response                     |
| duration    | Integer   | yes      | The number of seconds this "question" took to complete       |
| progress    | Decimal   | yes      | A value between 0.0 and 1.0 indicating the users progress    |
| completion  | Boolean   | yes      | A value indicating if the user has completed the result      |
| score       | String    | yes      | A value between 0.0 and 1.0 indicating the users score       |
| success     | String    | yes      | A value indicating if the result has succeeded in the result |

**Example**

<figure class="example"><pre><code>{
    "createdTime": new Date().toISOString(),
    "resultId": "ch1-mc1-q1",
    "response": "",
    "duration": 15,
    "progress": 1.0,
    "completion": true,
    "score": 0.7,
    "success": true
}
</code></pre><figcaption>Example of the ActivityResult object</figcaption></figure>

#### ActivitySubmission Object

An <dfn>ActivitySubmission</dfn> Object is used to submit completed activities 
to the Reading System that cannot be evaluated programatically.  Some examples 
of activities that may not be evaluated programmatically could be essay or 
journal questions, voice recordings or subjective questions.  The data submitted 
as part of an ActivitySubmission is only the raw JSON State Data.  
The JSON State Data is intended to store enough data to reconstitute the activity 
and view student work in upstream systems.  The results array should contain one 
or more result that can be mapped to LineItems in the reporting.xml.

| Name        | Data&nbsp;Type | Required | Description                                                                                    |
|-------------|-----------|----------|------------------------------------------------------------------------------------------------|
| type        | String    | yes      | MUST be set to ActivitySubmission                                           |
| createdTime | ISO 8601  | yes      | The date when the ActivityAttempt object was created                                           |
| activityId  | String    | yes      | References the <code>data-activityId</code> value in the <a>EPUB markup</a> |
| state       | Object    | yes      | An object used to store data.  This JSONDATA object structure is defined by the EPUB activity. |
| format      | String    | no       | A string identifying the format of the state data.  This string should be used to identify the format of both the state and meta properties.  For example ims.qti_v2p1.choice might be used to indicate that the state data and meta for a qti 2.1 Choice Activity.     |
| meta        | Object    | no       | An object used to include other data relevant to the activity.  This data could be used along with the state to reconstruct the full activity by upstream reporting systems.  The format of this data should be defined by the EPUB activity.  This object might include: 1. a url pointing to an activity manifest 2. an actual activity manifest (like the contents of a QTI XML) 3. an object containing question number, direction line, list of choices, etc. |

**Example**

<figure class="example"><pre><code>{
  "data":
  [
    {
      "type": "ActivitySubmission",
      "createdTime": new Date().toISOString(),
      "activityId": "unit_1_activity_5",
      "state": {"data": JSONDATA },
      "format":"vst.mc_v1_p0",
      "meta":{"data": JSONDATA }
    },...
  ]
}
</code></pre><figcaption>Example of the ActivitySubmission object</figcaption></figure>

### SendEducationDataRequest Object

The <dfn>SendEducationDataRequest</dfn> object is used to send one or more 
<a>EducationData</a> Objects to the server.  When a user performs an action that 
requires saving state or the user submits an activity that should persist results, 
the EPUB can create and transmit this data to the Reading System using a 
SendEducationDataResult Object

<figure class="example"><pre><code>{
  "data":
   [
    // One or more EducationData object
   ]
}
</code></pre><figcaption>Example of the SendEducationDataRequest object.</figcaption></figure>

### RetrieveEducationDataRequest Object

The <dfn>RetrieveEducationDataRequest</dfn> object is used to send one or more 
<a>EducationDataFilter</a> objects to the server.  When a user changes pages or returns 
to a Reading System in a new session, activities on the page can retrieve previous 
<a>ActivityState</a>, <a>ActivityResult</a> or <a>ActivityAttempt</a> objects 
in order to re-populate the users work by sending <a>RetrieveEducationDataRequest</a> 
objects.

<figure class="example"><pre><code>{
  "filters":
    [
      // One or more EducationDataFilter Objects
    ]
}
</code></pre><figcaption>Example of the RetrieveEducationDataRequest object.</figcaption></figure>

### EducationDataFilter Objects

There are multiple types of <dfn>EducationDataFilter</dfn> objects that can be 
generated. Below is a list of each type:

#### ActivityStateFilter

An <dfn>ActivityStateFilter</dfn> object is to be used by the EPUB to request 
previously submitted <a>EducationData</a> objects from the Reading System.

| Name        | Data&nbsp;Type | Required | Description                                                                                                            |
|-------------|-----------|----------|------------------------------------------------------------------------------------------------------------------------|
| type        | String    | yes      | MUST be set to ActivityState                            |
| extensions  | String    | no       | Arbitrary vendor-specific criteria. Keys should start with <code>vnd</code>. followed by the vendor name to avoid naming conflicts. |
| activityIds | Array&nbsp;of&nbsp;String  | yes   | Limits returned data to those with an ActivityData.activityId in the specified array.                                  |
| limit       | Integer   | no       | The number of objects to retrieve if available.  Values > 1 or "unbounded".  Defaults to 1.                           |

**Example**
@@@example wrong? 

<figure class="example"><pre><code>{
    "type": "ActivityState",
    "createdTime": new Date().toISOString(),
    "activityId": "unit_1_activity_5"
    "data": {"choice":5}
  }
</code></pre><figcaption>Example of the ActivityStateFilter object.</figcaption></figure>

#### ActivityAttemptFilter

An <dfn>ActivityAttemptFilter</dfn> object is to be used by the EPUB to request 
previously submitted <a>ActivityAttempt</a> objects from the Reading System.

| Name        | Data&nbsp;Type | Required |  Description                                                                                                           |
|-------------|-----------|----------|------------------------------------------------------------------------------------------------------------------------|
| type        | String    | yes      | MUST be set to ActivityAttempt                                                                      |
| extensions  | String    | no       | Arbitrary vendor-specific criteria. Keys should start with <code>vnd</code>. followed by the vendor name to avoid naming conflicts. |
| activityIds | Array of String | yes      | Limits returned data to those with an ActivityData.activityId in the specified array.                                  |
| limit       | Integer   | no       | The number of objects to retrieve if available.  Values > 1 or "unbounded".  Defaults to 1                             |

**Example**

<figure class="example"><pre><code>{
    "type": "ActivityAttempt",
    "activityIds": ["act-135","act-136"]
    "limit": 3
  }
</code></pre><figcaption>Example of the ActivityAttemptFilter object</figcaption></figure>

#### ActivityResultFilter

An <dfn>ActivityResultFilter</dfn> object is to be used by the EPUB to request 
previously submitted <a>EducationData</a> objects from the Reading System.

| Name        | Data&nbsp;Type | Required  | Description                                                                                                            |
|-------------|-----------|----------|------------------------------------------------------------------------------------------------------------------------|
| type        | String    | yes      | MUST be set to ActivityResult @@@ ActivityResultFilter??                                                                   |
| extensions  | String    | no       | Arbitrary vendor-specific criteria. Keys should start with <code>vnd</code>. followed by the vendor name to avoid naming conflicts. |
| activityIds | Array of String   | yes      | Limits returned data to those with an ActivityData.activityId in the specified array.                                  |
| limit       | Integer   | no       | The number of objects to retrieve if available.  Values > 1 or "unbounded".  Defaults to 1                             |

**Example**

@@@ example seems wrong

<figure class="example"><pre><code>{
    "type": "ActivityState",
    "createdTime": new Date().toISOString(),
    "activityId": "unit_1_activity_5"
    "data": {"choice":5}
  }
</code></pre><figcaption>Example of the ActivityResultFilter object</figcaption></figure>

#### ActivitySubmissionFilter

An <dfn>ActivitySubmissionFilter</dfn> object is to be used by the EPUB to 
request previously submitted <a>EducationData</a> Objects from the Reading System.

| Name        | Data&nbsp;Type | Required | Description                                                                                                            |
|-------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------|
| type        | String    | yes      | MUST be set to ActivitySubmission    @@@ ...Filter??                                                                 |
| extensions  | String    | no       | Arbitrary vendor-specific criteria. Keys should start with <code>vnd</code>. followed by the vendor name to avoid naming conflicts. |
| activityIds | Array&nbsp;of&nbsp;String  | yes      | Limits returned data to those with an <code>ActivityData.activityId</code> in the specified array.                                  |
| limit       | Integer   | no       | The number of objects to retrieve if available.  Values > 1 or "unbounded".  Defaults to 1                             |

**Example**

@@@ example seems wrong

<figure class="example"><pre><code>
  {
    "type": "ActivityState",
    "createdTime": new Date().toISOString(),
    "activityId": "unit_1_activity_5"
    "data": {"choice":5}
  }
</code></pre><figcaption>Example of the ActivitySubmissionFilter object.</figcaption></figure>

### EducationDataCallback Object

The <dfn>EducationDataCallback</dfn> should be a function that supports a call with 
a single <a>EducationDataResponse</a> object parameter.

**Example**

<figure class="example"><pre><code>
function myEducationDataCallback(response: EducationDataResponse)
{
  // process EducationDataResponse
}
</code></pre><figcaption>Example of the EducationDataCallback function</figcaption></figure>

#### EducationDataResponse

An <dfn>EducationDataResponse</dfn> object is passed as callback parameter for both a send and retrieve call.

| Name        | Data&nbsp;Type                    | Required | Description                                                                           |
|-------------|------------------------------|----------|---------------------------------------------------------------------------------------|
| data        | EducationData[]              |          | <code>type<code> should be set to ActivityState   @@@wrong                                     |
| errors      | EducationDataResponseError[] |          | The date when the ActivityState object was created @@@wrong                                   |
| meta        | EducationDataResponseMeta    |          | Includes the EducationDataFilters if any were supplied in the request @@@wrong?                |

**Example**

<figure class="example"><pre><code>{
    "data":
    [
      // An array of one or more EducationData objects
    ]
    "errors":
    [
      // An array of one or more EducationDataResponseError objects
    ]
    "meta":
    {
      "filters":
      [
        // One or more EducationDataFilter Objects
      ]
    }
  }
</code></pre><figcaption>Example of the EducationDataResponse object</figcaption></figure>

#### EducationDataResponseError

The <dfn>EducationDataResponseError</dfn> is returned in the send() and retreive() 
callback <code>response.errors</code> object.  In each callback the object will 
either be absent or an array of JSON API Error Objects.

| Name           | Data&nbsp;Type   | Required         | Description                                                                           |
|----------------|-------------|------------------|---------------------------------------------------------------------------------------|
| code           | String      | No               | An application-specific error code, expressed as a string value                       |
| detail         | String      | No               | A human-readable explanation specific to this occurrence of the problem               |
| id             | String      | No               | A unique identifier for this particular occurrence of the problem                     |
| links          | Object      | No               | A links object containing the following members                                       |
| links.about    | String      | No               | A link that leads to further details about this particular occurrence of the problem  |
| meta           | Object      | No               | A meta object containing non-standard meta-information about the error                |
| source         | Object      | No               | An object containing references to the source of the error {"data":...,"pointer":...} |
| source.data    | String      | No               | A string indicating which URI query parameter caused the error                        |
| source.pointer | JSONPointer | No               | A JSON Pointer [[!RFC6901]] to the associated entity in the request document               |
| status         | String      | No               | The HTTP status code applicable to this problem, expressed as a string value          |
| title          | String      | No               | A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the |

**Example**

<figure class="example"><pre><code>
  [
    {
      "id":"0000000-0000000-0000-000000",
      "status":"400",
      "code":"123",
      "title":"Data validation issue",
      "detail":"\`duration\` Member must be greater than 0",
      "links":
      {
        "about":"https://example.com/errors/123.html"
      },
      "meta":
      {
        // Defined by the Reading System
      }
      "source":
      {
        "data":null,
        "pointer":"/data[0]/attributes/duration"
      },
    },
    ...
  ]
</code></pre><figcaption>Example of the EducationDataResponseError object.</figcaption></figure>

## Package Document

In every EPUB Publication [[!EPUB-301]] that supports this specification, the 
<dfn>Package Document</dfn> MUST contain metadata and manifest item properties 
as defined below.

### Package Document Metadata

| Name                   |Value             | Required  | Description                                                                           |
|------------------------|------------------|---------------------------------------------------------------------------------------|
| dc:type                | 'education'      | Yes       | Identifies an EPUB as supporting this specification.
| epub:profiles          | 'education&#8209;api'  | Yes       | Indicates that the EPUB supports this specification for saving and retrieving state and results.
| epub:reporting&#8209;default | String           | Yes       | References the default <code>report</code> element in the <a>Reporting Document</a> ('reports/report[@reportId]').

### Package Document Manifest item properties

An <code>item</code> element in the manifest MUST be included with an id of 'reporting' and a properties value of 'reporting'.

An <code>item</code> element in the manifest MUST be included with an id of 'activities' and a properties value of 'activities'.

**Example**
<figure class="example"><pre><code>

&lt;package ... prefix="epub: http://www.vitalsource.com/vocab/epub/1.0/">
  &lt;metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    &lt;dc:type>education&lt;/dc:type>
    &lt;meta property="epub:profiles">education-api&lt;/meta>
    &lt;meta property="epub:reporting-default">default-report&lt;/meta>
    &lt;!-- ... -->
  &lt;/metadata>
  &lt;manifest>
    &lt;item id="reporting" href="reporting.xml" properties="reporting" media-type="application/xml"/>
    &lt;item id="activities" href="activities.xml" properties="activities" media-type="application/xml"/>
    &lt;!-- ... -->
  &lt;/manifest>
  &lt;spine>
    &lt;!-- ... -->
  &lt;/spine>
&lt;/package>

</code></pre><figcaption>Example of EPUB Package Document metadata and manifest item properties.</figcaption></figure>

@@@ above uses http://www.vitalsource.com/vocab/epub/1.0/ ???

A collection of informative sample OPF files can be found at 
[https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/opf/samples](https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/opf/samples).


## Reporting Document

The _<dfn>Reporting Document</dfn>_ is an XML document that must be included in 
the EPUB (and flagged in the corresponding <a>Package Document</a>'s manifest 
item with the <code>reporting</code> property) in order to support <a>Reading 
System</a>s that implement compatible automated report generation, interoperation 
with external grade books, etc.  The Reporting Document supports rolling up 
multiple granular Results into LineItems, author time organization for LineItems 
and supports both flexible aggregation and sensible aggregation defaults.

The structural constraints of the Reporting Document are defined in [[!EPUB-OUTCOMES-10-REP-XSD]].

A collection of informative sample Reporting Documents can be found at 
[https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/reporting/samples](https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/reporting/samples).

#### The report element 

The Reporting Document holds one or more <code>report</code> elements.  Typically 
this document will only contain a single report element, and will contain a 
hierarchy of scores that align with the structure of the book.  

Some examples where an EPUB author might need or want to include more than one 
report node could be:

* One report node that aligns with each state standard
* One report node for each chapter of the book
* One report that contains all activities in the EPUB and a second report node that contain only chapter quizzes.

The attributes of the report element are defined below.

| Name        | Data&nbsp;Type   | Required         | Description                                                                           |
|-------------|-------------|------------------|---------------------------------------------------------------------------------------|
| reportId    | String      | yes     	       | A unique identifier for the report.  This id is referenced in the <a>Package Document</a> meta property epub:reporting-default to identify the default report. |


#### The displayPrefs element

The <code>displayPrefs</code> element is a child of the report element, used for 
suggesting user interface defaults. This element is optional, and takes 
the <code><a>defaultResultProperty</a></code> and <code><a>defaultScoreFormat</a></code> 
elements as its children. 

#### The defaultResultProperty element

The <code><dfn>defaultResultProperty</dfn></code> element defines the preferred 
property of ActivityResult to display in reporting user interfaces 
by default. This element is optional.

* Default: 'score'
* Options: 'duration', 'progress', 'completion', 'score', 'success'

#### The defaultScoreFormat element

The <code><dfn>defaultScoreFormat</dfn></code> element defines the preferred 
format in which to display ActivityResult.score data in reporting 
user interfaces by default.  This element is optional.

* Default: 'percent'
* Options: 'percent', raw

#### The resultDefaults element

The <code><dfn>resultDefaults</dfn></code> element declares default field values 
of result elements in the current scope. 

* A <code>report</code> element MUST contain zero or one <code>resultDefaults</code> element
* A <code>section</code> element MUST contain zero or one <code>resultDefaults</code> elements
* A <code>lineItem</code> element MUST contain zero or one <code>resultDefaults</code> elements

The attributes of the resultDefaults element are defined below.

| Name        | Data&nbsp;Type                  | Required | Default         | Options                                       | Description                                                                                 |
|-------------|----------------------------|----------|-----------------|-----------------------------------------------|---------------------------------------------------------------------------------------------|
| calculate   | String                     | no       | average         | 'average', 'maximum', 'median', 'minimum', 'sum', 'count' | How this elements calculated child values are combined to generate a numeric value.         |
| href	      | URI	                       | no       |                 |                                               | Default href value.                                                                         |
| limit	      | Positive Integer or String | no       | 1               | 1+, unbounded                                 | The maximum number of Result instances to use in the calculation of this elements value     |
| resultId	  | String                     | no       |                 |                                               |                                                                                             |
| sortBy	    | list of ResultSortOrder    | no       | storedTime.DESC | 'storedTime', 'storedTime', 'score', 'progress', 'duration', 'extensions' + 'ASC', 'DESC' | The field(s) by which to sort the Result stream before the first limit Results are pulled from it. |
| weight      | Decimal                    | no       | 1.0             |                                               | The weighting of this elements calculated value within its parent.                          |

#### The section element

A report is broken into sections which can be nested.

* A <code>report</code> element must contain one or more <code>section</code> elements
* A <code>section</code> element may contain zero or more <code>section</code> elements
* A <code>section</code> element must contain one <code>label</code> element
* A <code>section</code> element may contain one or more <code>lineItem</code> elements

#### The label element

A label element defines a label for elements of the _Reporting Document_.

* A <code>report</code> element must contain one <code>label</code> element
* A <code>section</code> element must contain one <code>label</code> element
* A <code>lineItem</code> element must contain one <code>label</code> element

#### The lineItem element

LineItem elements are labeled elements used by reporting systems as rolled up 
and sometime hierarchical view of the scores within the EPUB.

* A <code>lineItem</code> element must contain one <code>label</code>
* A <code>lineItem</code> element must contain either one or more <code>lineItem</code>s OR one or more <code>result</code>s.

The attributes of the <code>lineItem</code> element are defined below.

| Name        | Data&nbsp;Type                  | Required | Default         | Options                                       | Description                                                                                 |
|-------------|----------------------------|----------|-----------------|-----------------------------------------------|---------------------------------------------------------------------------------------------|
| calculate   | String                     | no       | average         | 'average', 'maximum', 'median', 'minimum', 'sum', 'count' | How this elements calculated child values are combined to generate a numeric value.         |
| href	      | URI	                       | no       |                 |                                               | The location in the EPUB where this lineItem can be found                                   |
| limit	      | Positive Integer or String | no       | 1               | 1+, unbounded                                 | The maximum number of Result instances to use in the calculation of this elements value     |
| lineItemId  | String                     | no       |                 |                                               |                                                                                             |
| weight      | Decimal                    | no       | 1.0             |                                               | The weighting of this elements calculated value within its parent.                         |

#### The result element

The result elements reference the JavaScript ActivityResult objects by resultId.  
Results can be weighted, sorted, limited and rolled up by upstream reporting systems.

The attributes of the <code>result</code> element are defined below.

| Name        | Data&nbsp;Type                  | Required | Default         | Options                                       | Description                                                                                 |
|-------------|----------------------------|----------|-----------------|-----------------------------------------------|---------------------------------------------------------------------------------------------|
| calculate   | String                     | no       | 'average'       | 'average', 'maximum', 'median', 'minimum', 'sum', 'count' | How this elements calculated child values are combined to generate a numeric value.         |
| href	      | URI	                       | no       |                 |                                               | The location in the EPUB where this lineItem can be found                                   |
| limit	      | Positive Integer or String | no       | 1               | 1+, unbounded                                 | The maximum number of Result instances to use in the calculation of this elements value     |
| resultId	  | String                     | no       |                 |                                               |                                                                                             |
| sortBy	    | list of ResultSortOrder    | no       | 'storedTime.DESC' | 'storedTime', 'storedTime', 'score', 'progress', 'duration', 'extensions' + 'ASC', 'DESC' | The field(s) by which to sort the Result stream before the first limit Results are pulled from it. |
| weight      | Decimal                    | no       | 1.0             |                                               | The weighting of this elements calculated value within its parent.                          |

**Example**

<figure class="example"><pre><code>
&lt;?xml version="1.0" encoding="UTF-8"?>
&lt;?xml-model href="reporting.xsd" type="application/xml"?>
&lt;reporting xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.idpf.org/2017/ops/reporting" xsi:noNamespaceSchemaLocation="reporting.xsd">
  &lt;reports>
    &lt;report reportId="summary-report">
      &lt;label>Summary Report&lt;/label>
      &lt;displayPrefs>
        &lt;!-- The preferred ActivityResult property to display in reporting UIs, which must be one of: "duration", "progress", "completion", "score" or "success"; defaults to "score" -->
        &lt;defaultResultProperty>score&lt;/defaultResultProperty>
        &lt;!-- The preferred format to use for ActivityResult.score value display in reporting UIs, which must be one of: "raw" (e.g., "2/3") or "percent" (e.g., "67%"); defaults to "percent" -->
        &lt;defaultScoreFormat>percent&lt;/defaultScoreFormat>
      &lt;/displayPrefs>
      &lt;section sectionId="Chapter1">
        &lt;label>Chapter 1&lt;/label>
        &lt;section sectionId="Chapter1-Section1">
          &lt;label>Section 1&lt;/label>
          &lt;lineItem lineItemId="ch1-mc1" href="ch1-screen1.xhtml#block1" weight="2">
            &lt;label>Multiple Choice 1&lt;/label>
            &lt;!-- Rolls up activity ch1-mc1's results into a single weighted average; if/when there are multiple results for an activity, they should each be given a unique (in book scope) resultId -->
            &lt;result resultId="ch1-mc1-q1"/>
            &lt;result resultId="ch1-mc1-q2"/>
          &lt;/lineItem>
        &lt;/section>
        &lt;!-- no result sources in Section 2, so omitted -->
      &lt;/section>
      &lt;section sectionId="Chapter2">
        &lt;label>Chapter 2&lt;/label>
        &lt;section sectionId="Chapter2-Section1">
          &lt;label>Section 1&lt;/label>
          &lt;!-- If an activity has just one result, its lineItemId and resultId can be the same as the data-activityId specified on its view(s) in the relevant book page(s) markup -->
          &lt;lineItem lineItemId="ch2-essay1" href="ch2-screen1.xhtml#block1">
            &lt;label>Essay 1&lt;/label>
            &lt;result resultId="ch2-essay1"/>
          &lt;/lineItem>
        &lt;/section>
      &lt;/section>
    &lt;/report>
  &lt;/reports>
&lt;/reporting>
</code></pre><figcaption>@@@ caption TODO</figcaption></figure>

## Activities Document

The _<dfn>Activities Document</dfn>_ is an XML document that MUST be included in the EPUB 
(and flagged in the corresponding <a>Package Document</a>'s manifest item with the 
<code>activites</code> property). This document is a list of every activity in 
the EPUB and the associated results. This file is used during EPUB validation 
to ensure that there is a clear alignment between the <a>EPUB markup</a> and 
<a>Reporting Document</a>.

### The activity element 

The Activities Document MUST contain an <code>activity</code> element for every associated activity in the <a>EPUB markup</a>.

The <code>activity</code> element attributes are defined below. 

| Name        | Data&nbsp;Type   | Required         | Description                                                                                            |
|-------------|-------------|------------------|--------------------------------------------------------------------------------------------------------|
| activityId  | String      | yes     	       | A unique identifier for the activity.  This id should be in the associated <a>EPUB markup</a> data-activityId |
| href        | String      | yes     	       | A relative path to the EPUB xhtml document and activity id.  For example 'page001.xhtml#actid'                |

### The result element 

Each <code>activity</code> element in the Activities Document MAY/MUST contain... 
@@@ under what circumstances must a result element be present??

The <code>result</code> nodes reference the <code>ActivityResult</code> objects by <code>resultId</code>. 

The <code>result</code> element attributes are defined below.

| Name        | Data&nbsp;Type                  | Required | Default         | Description                                                                                 |
|-------------|----------------------------|----------|-----------------|---------------------------------------------------------------------------------------------|
| resultId	  | String                     | yes      |                 | The result id that can be generated by the associated activity.                             |

**Example**

<figure class="example"><pre><code>
&lt;?xml version="1.0" encoding="UTF-8"?>
&lt;?xml-model href="activities.xsd" type="application/xml"?>
&lt;activities xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.idpf.org/2017/ops/reporting" xsi:noNamespaceSchemaLocation="activities.xsd">
  &lt;activity activityId"act1" href="ch1-screen1.xhtml#block1">
    &lt;result resultId="ch1-mc1-q1"/>
    &lt;result resultId="ch1-mc1-q2"/>
  &lt;/activity>
  &lt;activity activityId="act2" href="ch2-screen1.xhtml#block1">
    &lt;result resultId="ch2-essay1"/>
  &lt;/activity>
&lt;/activities>
</code></pre><figcaption>@@@ caption TODO</figcaption></figure>

## EPUB markup

<dfn>EPUB markup</dfn> must be provided to signal the presence in the content of 
activities that can generate state or results. The markup can be used to link 
users directly to specific activities, or by Reading Systems to pre-fetch activity 
data.

First, each element that can produce either <a>ActivityState</a> or <a>ActivityResult</a>s
MUST be marked up with a <code>data-activityId</code> attribute and an <code>epub:type</code>
attribute as per below. 

| Name        | Data&nbsp;Type   | Required         | Description                                                                                            |
|-------------|-------------|------------------|--------------------------------------------------------------------------------------------------------|
| data-activityId  | String      | yes     	   | A unique identifier for the activity.  |
| epub:type   | String      | yes     	       | MUST be set to the value 'assessment' [EPUB-SSV].

@@@must the element be a div?

Second, each element that can produce only <a>ActivityState</a> must be marked up
with a <code>data-activityId</code> attribute.

| Name        | Data&nbsp;Type   | Required         | Description                                                                                            |
|-------------|-------------|------------------|--------------------------------------------------------------------------------------------------------|
| data-activityId  | String      | yes     	   | A unique identifier for the activity.  |


@@@?? In both cases above, the ID provided in <code>data-activityID</code> MUST 
be unique across all content documents in the EPUB, and MUST correspond to exactly
one <code>activityId</code> in the <a>Activities Document</a>. ?@@@?? 

**Examples**

<figure class="example"><pre><code>

&lt;div id="VIEWID" data-activityId="ACTIVITYID" epub:type="assessment">
      ...
&lt;/div>  

</code></pre><figcaption>Example of element markup for elements that can produce 
either state or results.</figcaption></figure>

<figure class="example"><code><pre>

&lt;div id="VIEWID" data-activityId="ACTIVITYID">
      ...
&lt;/div>
</pre></code><figcaption>Example of element markup for elements that can produce 
state.</figcaption></figure>


A collection of informative sample EPUB documents can be found at 
[https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/page/samples](https://github.com/IMSGlobal/epub-for-education/tree/develop/resources/page/samples)

<section class="appendix informative">
## Examples

_@@@ TODO complete EPUB examples will be provided in the next draft version._

</section>
`;
