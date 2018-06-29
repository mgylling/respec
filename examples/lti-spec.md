var md = `

<section>
  <h2>Overview</h2>

<p>This document defines the LTI ecosystem for integrating platforms with external tools or applications using the IMS Security Framework [[!SEC-10]] for message and service authentication.
</p>

  <section id="terminology">
    <h3>Terminology</h3>
    <!-- add each term as a dt/dd pair with attrs as below; then use <a> in when referencing back to a term -->
    <!-- use data-sort to automatically sort the terms -->
    <dl class="termlist" data-sort id="terms">

      <dt><dfn data-lt="term1">IRI</dfn></dt>

      <dd>The Internationalized Resource Identifier (IRI) extends the Uniform Resource Identifier ([URI](#uriDef)) scheme by using characters drawn from the Universal character set rather than US-ASCII per [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).</dd>

      <dt><dfn data-lt="term2">LIS</dfn></dt>

      <dd>Learning Information Services&reg; (LIS&reg;) is an IMS standard that defines how systems manage the exchange of information that describes people, groups, memberships, courses and outcomes.</dd>

      <dt><dfn data-lt="term3">LTI</dfn></dt>

      <dd>Learning Tools Interoperability&reg; (LTI&reg;) is an IMS standard for integration of rich learning applications within educational environments.</dd>

      <dt><dfn data-lt="term4">URI</dfn></dt>

      <dd>The Uniform Resource Identifier (URI) utilizes the US-ASCII character set to identify a resource. Per [RFC 2396](https://www.ietf.org/rfc/rfc3986.txt), a URI "can be further classified as a locator, a name or both." Both the Uniform Resource Locator ([URL](#urlDef)) and the Uniform Resource Name ([URN](#urnDef)) are considered subspaces of the more general URI space.</dd>

      <dt><dfn data-lt="term5">URL</dfn></dt>

      <dd>A Uniform Resource Locator (URL) is a type of [URI](#uriDef) that provides a reference to resource that specifies both its location and a means of retrieving a representation of it. An HTTP [URI](#uriDef) is a URL.</dd>

      <dt><dfn data-lt="term6">URN</dfn></dt>

      <dd>A Uniform Resource Name (URN) is a type of [URI](#uriDef) that provides a persistent identifier for a resource that is bound to a defined namespace. Unlike a [URL](#urlDef), a URN is location-independent and provides no means of accessing a representation of the named resource.</dd>

      <dt><dfn data-lt="term7">UUID</dfn></dt>

      <dd>A 128-bit identifier that does not require a registration authority to assure uniqueness. However, absolute uniqueness is not guaranteed although the collision probability is considered extremely low. LTI recommends use of randomly or pseudo-randomly generated version 4 UUIDs.</dd>

    </dl>  
  </section>  

  <section id="conformance">
    <h3>Conformance Statements</h3>
    <!-- RFC 2119 text is inserted at the top of this section.
        If you want, add additional paragraphs below this comment.
    -->                   
  </section>
  <section id="documentset">
    <h3>Document Set</h3>
    <!-- a complete list of documents in the Specification document set.
    May include both normative and informative references. All documents
    referenced here also occur in the bibliography-->
    <section>
      <h4>Normative Documents</h4>
      <dl>
      <dt>Conformance and Certification guide</dt>
      <!-- <dd>The conformance and certification guide
      that accompanies this specification [[!EXAMPLE-CERT]] defines
      the requirements for example service consumers and providers.
      Facilisis hendrerit est. Nullam ultrices non libero sed tristique.
      Proin tempor, quam vitae consequat congue, est sapien pharetra odio,
      sed rhoncus metus sem in turpis. </dd> -->
      <dt>JSON Schema</dt>
<dd>IMS provides a number of JSON schemas to define the forms of the fundamental LTI message payloads:</dd>

<a name="schema-resourcelinkrequest"></a><dt>LtiResourceLinkRequest.json</dt>
<dd>URL: https://purl.imsglobal.org/spec/lti/v1p3/schema/json/LtiResourceLinkRequest.json</dd>

<a name="schema-ltitoken"></a><dt>LtiToken.json</dt>
<dd>URL: https://purl.imsglobal.org/spec/lti/v1p3/schema/json/LtiToken.json</dd>

<a name="schema-ltiversion"></a><dt>LtiVersion.json</dt>
<dd>URL: https://purl.imsglobal.org/spec/lti/v1p3/schema/json/LtiVersion.json</dd>

<a name="schema-jwstoken"></a><dt>JWSToken.json</dt>
<dd>URL: https://purl.imsglobal.org/spec/lti/v1p3/schema/json/JWSToken.json</dd>

<a name="schema-resourcelink"></a><dt>ResourceLink.json</dt>
<dd>URL: https://purl.imsglobal.org/spec/lti/v1p3/schema/json/ResourceLink.json</dd>

<a name="schema-token"></a><dt>Token.json</dt>
<dd>URL: https://purl.imsglobal.org/spec/lti/v1p3/schema/json/Token.json</dd>

<a name="schema-toolplatformlinkrequest"></a><dt>ToolPlatformLinkRequest.json</dt>
<dd>URL: https://purl.imsglobal.org/spec/lti/v1p3/schema/json/ToolPlatformLinkRequest.json</dd>


      <dt>Errata</dt>
      <dd>The errata [[!LTI-CORE-13-ERRATA]] details any erratum registered for
        this version of this specification since its publication.</dd>            
      </dl>
    </section>  
    <section class="informative">
      <h4>Informative Documents</h4>
      <dl>
      </dl>
    </section>  
  </section>
<h3>History of this specification</h3>

LTI has its origins in the IMS Tools Interoperability specifications released
in 2006. IMS then developed this into what is now referred to as Learning Tools
Interoperability, or LTI. In May 2010, IMS released a version named Basic LTI
that described a simple mechanism for launching tools and content from within an
LMS. This provided a small but useful subset of the functionality that
underlies LTI 1.3 and future releases. When IMS added a simple outcomes service
in March 2011, it renamed Basic LTI as LTI 1.0, with the new
release including the simple outcomes service named as LTI 1.1.

LTI version 1.3 improves upon version [[LTI-11]] by moving away
from the use of OAuth 1.0a-style signing for authentication and towards a new
security model, using signed JWTs and OAuth2.0 workflows for authentication.

</section>



# Key concepts and elements

This document uses specific terminology and concepts that are important to
understand.

## Platforms and tools

An LTI-based ecosystem consists of two principal types of software services:

**Platform**. A _tool platform_ or, more simply, _platform_ has traditionally
been a Learning Management Systems (LMS), but it may be any kind of platform
that needs to delegate bits of functionality out to a suite of _tools_.

**Tool**. The external application or service providing functionality to the
_platform_ is called a _tool_. Examples of _tools_ might include an externally
hosted testing system or a server that contains externally hosted premium
content.

### Historical identification of LTI integration parties

Note that, historically, LTI referred to _platforms_ as _tool consumers_ and
referred to _tools_ as _tool providers_. As this does not align with usage of
these terms within the OAuth2 and OpenID Connect communities, LTI 1.3 no longer
uses these terms and shifts to the terms _platform_ and _tool_ to describe the
parties involved in an LTI integration.

### Tool deployment models

When a user deploys a tool within their tool platform, the platform MUST
generate an immutable <code>lti_deployment_id</code> identifier to identify the
integration. A platform MUST generate a unique <code>lti_deployment_id</code> for each
tool it integrates with. Every message between the platform and tool MUST
include the <code>lti_deployment_id</code>.

A _platform_ MUST support multiple deployments of the same tool,
with each integration generating a new <code>lti_deployment_id</code>. A platform MAY
allow the reuse of a <code>client_id</code> for each new integration (see the
IMS Security framework document [[!SEC-10]] for more information
on <code>client_id</code>), but MUST give a new <code>lti_deployment_id</code> for each integration.
Alternatively, a _platform_ MAY require that each new integration uses a new
<code>client_id</code> and, consequently, receives a new <code>lti_deployment_id</code>.

A tool MUST thus allow multiple deployments on a given platform to share the same
<code>client_id</code> and the security contract attached to it.

#### Tool registered once, deployed multiple times

In this deployment model, the tool is registered once; during registration, the security
contract is established, keys are exchanged and a <code>client_id</code> is created by
the platform. The tool may then be subsequently deployed once or multiple times,
each deployment identified by its own <code>lti_deployment_id</code>.

<figure class="graphic">
    <img src="assets/deployments_bw.png" alt="TBD">
    <figcaption>Diagram illustrating multiple deployments of one Tool within the Platform using the same security contract.</figcaption>
</figure>


#### Tool registered and deployed

In this deployment model, the registration and deployment are done at the same time.
Each deployment gets its own security contract, and
there is a one to one relation between the <code>client_id</code> and <code>lti_deployment_id</code>.

<figure class="graphic">
    <img src="assets/deployments_onetoone_bw.png" alt="TBD">
    <figcaption>Diagram illustrating multiple deployments of one Tool within the Platform using unique security contracts.</figcaption>
</figure>


### LTI Links

An LTI Link is a reference to a specific tool stored by a platform which
may, for example, lead to a specific resource or content hosted on the tool,
depending on the message_type of the LTI Link (see sections 3.2 for more
information on message_type). The LTI Link
is presented by the platform that provides access to the content of the tool
and may be used as a means of performing LTI launches within the context of the
platform.

Typically an LTI link contains a URL that points to the tool, along with some
other metadata used for identification and presentation purposes that are unique
to each link. Often LTI Links are presented to a user as an HTML link, but the
two concepts should not be confused - an LTI Link is not just a URL, but may
contain additional data that must be included in a launch to the tool.

Each LTI Link MUST be associated with a single <code>lti_deployment_id</code> to identify the tool
it is linked to. A platform MAY display multiple instances of the same LTI Link within
a page.

Each LTI Link connected to a particular resource (as described in section
2.2 below) MUST contain a platform unique identifier named _resource_link_id_. When an LTI
Link is associated with a resource, it is referred to as a Resource Link (see section 4.1 of
this document for more details).

### LTI Launch

An LTI Launch refers to the process in which a user interacts with an LTI Link
within the platform and is subsequently "launched" into a tool. The data
between tool and platform in establishing a launch are defined upon tool integration
into the platform. LTI platforms and tools use _messages_ to transfer the user agent
from one host to another through an HTML form post redirection containing the message
payload. The data of this payload is determined by the message_type as discussed in
section 3.2.1 of this document.

## Contexts and resources

LTI generally organizes collections of _resources_ into _contexts_:

**Context**. LTI uses the term _context_ where you might expect to see the word
"course". A context is roughly equivalent to a course, project, or other
collection of _resources_ with a common set of users and roles. LTI uses the word
"context" instead of "course" because a course is only one kind of context
(another type could be "group" or "section").

**Resource**. Typically, within a context, users can integrate many LTI content
items, or _resources_, sometimes arranging them into folders like "Week 1" or
"Pre-Work". Conceptually, these platform integrations serve the same general
purpose as any other type of item within the structure of a context's available
content. In particular, commonly, users may scatter multiple _LTI links_
through the content structure for a context that is linked to a particular
resource. A platform MUST distinguish between each of these _LTI links_ by
assigning a _resource_link_id_ to an _LTI Link_.

While all of the LTI links integrated within a single context will share the
same _context_id_, each link within the context will have a unique
_resource_link_id_. This allows the hosting _tool_ to differentiate the content
or features it shows on a resource-by-resource basis (within a context) by, for
example, providing configuration options such as a resource picker to the
instructor or administrator after launching from a particular link.

## Users and roles

LTI generally recognizes that _users_ make use of the integrated functionality
offered by _tools_ to _platforms_. These users typically come with a defined
_role_ with respect to the _context_ within which they operate when using a
tool.

**User**. An object representing a person with a current session within the
_platform_ and provided to the _tool_. The platform MAY delegate the authentication
process to another system (for example, an LDAP server). A user MUST have a unique
identifier within the platform. Typical properties such as a first name, last name,
and email address, MAY be shared with a tool. A tool or platform MUST NOT use any
other attribute other than the unique identifier to identify a user when interacting
between tool and platform.

**Role**. The role is one of the three main properties provided by the platform
when a _user_ launches via an LTI link to a _tool_ (the other two items are the
ID values that identify the _user_ performing the launch, and the _context_
containing the LTI link from which the launch initiated, all of which are optional).
The role represents the level of privilege a user has been given within the context
hosted by the platform. Typical roles are "learner", "instructor", and
"administrator". Note that it's entirely possible that a user might have a
different role in a different context (a user that is a "student" in one
context may be an "instructor" in another, for example).

Tools may, in turn, use the role to determine the level of
access they may give to a user.

## Authentication, authorization, and capabilities

**Authentication**. The process of confirming the identity of a user. LTI
itself plays no role in the authentication process, other than reliably
carrying the user's identity from the _platform_ to the _tool_ within
_messages_ initiated by a user's activity within the platform. User identity
is passed in LTI messages using OpenId Connect Standard Claims [[!OpenID-14]].
See the IMS Security Framework [[!SEC-10]] for more details.

The platform may use other authentication mechanisms to further verify identity
or associate the platform user with a pre-existing tool's user account. The
tool would traditionally only do this on a user's first launch from a given
platform.

**Authorization**. The process of identifying a user's right to gain access to
resources or functionality. LTI addresses the overall authorization
requirements for integrations between platform and tool at two different
levels:

* Within the LTI layers themselves, LTI authorizes the _capabilities_
(services, messages, or variables) a tool is allowed to use with the
platform.

* LTI supports the authorization work of the tool itself by reliably conveying
contextually rich property data to the tool via messages. For example, for
some tool to authorize a particular user to read an ebook, it might require
the user's identity and role within a particular course context (all
properties that the platform can pass along within a launch message).

**Capability**. A formal definition of some pattern of behavior. LTI v1.3
defines three broad kinds of capabilities:

* Variable expansion

* Messages

* Services

The _platform_ can advertise the capabilities it supports via the messages it
sends to the _tool_.

## Messages and services

LTI supports two different kinds of integration between platforms and tools:

* Via _messages_ (intermediated by a user's browser)

* Via _services_ (direct connections between platform and tool)

**Messages**. When a user clicks on the embedded link for an LTI _resource_
within the platform, it redirects their browser over to the relevant supporting
tool using a _launch message_ of some kind. Typically, via a dynamically
created page with embedded javascript, the _platform_ redirects the browser
to HTTPS POST a message containing a bundle of contextual information to
the _tool_ hosting the endpoint specified in the LTI link.

The most common contextual message like this is called the _resource link
message_ and is described in this document. Other kinds of launch messages
might also be supported between platform and tool (in either direction).

Note that receivers of LTI messages MUST ignore any contextual data
contained in the message that they do not understand.

**Services**. When a _tool_ needs to directly access a _platform_ (or
vice-versa), LTI 1.3 names these connections _services_ (not mediated by a user
with a browser); typically the providers of these services host them as
simple REST-like HTTP-based web services.

**Authentication for messages and services**. LTI v1.3 supports specific,
separate (but related) authentication mechanisms for _messages_ and _services_,
defined in the IMS Security Framework [[!SEC-10]]. LTI v1.3
requires the use of HTTPS (using TLS) for _both_ messages _and_
services. Additionally, implementers MUST use HTTPS for
all URLs to resources included in messages and services (for example, URLs to
service endpoints, or to static content like images and thumbnails).

# LTI message general details

Messages between a platform and host are used to transfer the user agent between
hosts (as described in section 2.1.3 of this document). This section further details
the required structure of these messages. An LTI Message is the simplest way
that a platform and tool communicate. Further requirements for structuring a message
may be required depending on the scenario (such as when performing an LTI Launch).

## JSON Web Token

Starting with LTI 1.3, the senders of messages MUST wrap the message payload in
a _JSON Web Token_ (JWT). By using this methodology, the receiving party can
trust the integrity and origin of the message payload even though the sending
party sent the message through the user's browser. The IMS Security Framework [[!SEC-10]] describes the process by which a message sender encodes
its message into a JWT.

## Message claims

Each message type supplements the fundamental claims mandated by the IMS Security Framework [[!SEC-10]] with additional claims specific to the needs
of that message type. LTI message types specified in other documents may reuse
some message claims defined here for the _LTI resource link launch request_,
when applicable. Each message type's specification defines which claims are required
and which claims are optional.

In order to preserve forward compatibility and interoperability between
platforms and tools, receivers of messages MUST ignore any claims in messages
they do not understand, and not treat the presence of such claims as an error
on the part of the message sender.

### Message type and schemas

A message's <code>https://purl.imsglobal.org/spec/lti/claim/message_type</code> claim declares the general
intent of the workflow. Each type of message will have its own value for this
claim, indicating to the receiver of the message what kind of message the
sender has sent.

Each message type has an associated <code>JSON Schema</code> definition that formally
defines all its claims, and further defines which of those claims are
optional or are required. An example of defining a message type is shown
in the table below.

## General LTI Launch Details

A _platform_ displaying an LTI Link to a user can perform an LTI Launch to a
_tool_ in the following manner. Depending on the message*type of the link,
the platform turns the message's payload JSON into a JWT to include in the launch
request message body; each top-level property within this object becomes a \_claim*
in the resulting JWT. After encoding as a JWT, the platform sends the message as a
form post using the <code>jwt</code> or <code>id_token</code> parameter (see the
IMS Security Framework [[!SEC-10]]) for more details about the
use of <code>jwt</code> and <code>id_token</code>), redirecting the user's browser
to the tool's resource link URL.

# Resource link launch request message

This document describes the composition of the _LTI resource link
launch request_. The LTI ecosystem supports other kinds of messages defined in
other specification documents (for example, the _content item selection
request_ message defined in the LTI Deep Linking[[!LTI-DL-20]]
specification).

This message type encapsulates the fundamental workflow of a user clicking a
link in the presented user experience of a context hosted by the _platform_ and
thereby launching out to an external _tool_ that will provide a related, but
separate, user experience. With this workflow, the platform sends this message,
and the tool receives the message.

The table below describes the name of the message type, <code>the message_type</code>, and the
schema defined in the message type's launch.

<table>
<tr><th>Name
<th>Message type
<th>Schema
<tr><td>Resource link launch request
<td><code>LtiResourceLinkRequest</code>
<td>[Resource Link Request message JSON](#schema-resourcelinkrequest)</td>
</table>

<figure class="graphic">
    <img src="assets/resource_link_bw.png" alt="TBD">
    <figcaption>Diagram illustrating the flow of the LTI resource link launch request.</figcaption>
</figure>

## Resource link

LTI uses the term _resource link_ to refer to a link to a resource delivered by
a _tool_. LTI intends platforms to present resource links to their users in a
manner similar to any other resource within the structure of a context. In
particular, LTI expects that a platform may embed multiple LTI resource links
(to many different tools), scattered throughout the content structure for the
context.

LTI uses the <code>resource_link_id</code> property to help platforms and tools
differentiate amongst multiple links embedded in a single context. While all
the links within a context will share the same <code>context_id</code>, each LTI resource
link will have a _platform wide_ unique resource link ID. See section 2.1.2 of
this document for more details.

## Launch from a resource link

The _LTI resource link launch request_ originates from the within the platform
starting from a single LTI resource link. It MUST identify the _resource link_
related to the launch, the _user_ doing the launch, and the _context_ in which
the launch originates. It MUST also contain the _roles_ of that user in the
context of the launch and other information about the platform, the context,
and the resource link, as defined in the following sections.

The tool will use this information to decide whether to grant the user access
to that resource, and, if so, how to present the resource to the user. For
example, the view of a resource the tool gives to a student in the context of
a course may differ from the view it offers to the course's instructor or
administrator.

See [Appendix F](#appendix-f-full-example-resource-link-launch-request) for an
example of a full resource link launch message payload (the examples in the
following sections are excerpts from that example).

## Required message claims

LTI resource link launch request messages MUST contain all of the claims
included in this section. Note that some of the claims compose several
properties, only some of which are required.

### Message type claim

The required <code>https://purl.imsglobal.org/spec/lti/claim/message_type</code> claim's value contains a
string that indicates the type of the sender's LTI message. For conformance
with this specification, the claim must have the value
<code>LtiResourceLinkRequest</code>.

### LTI Version claim

The required <code>https://purl.imsglobal.org/spec/lti/claim/version</code> claim's value contains a string
that indicates the version of LTI to which the message conforms. For
conformance with this specification, the claim must have the value <code>LTI-1p3</code>.

### Deployment ID claim

The required <code>https://purl.imsglobal.org/spec/lti/claim/deployment_id</code> claim's value contains a
string that identifies the platform-tool integration governing the message.

### Resource link claim

The required <code>https://purl.imsglobal.org/spec/lti/claim/resource_link</code> claim composes properties
for the resource link from which the launch message occurs, as in the following
example:

<pre><code>{
...
"https://purl.imsglobal.org/spec/lti/claim/resource_link": {
...
"id": "200d101f-2c14-434a-a0f3-57c2a42369fd",
...
}
...
}
</code></pre>

**id** (REQUIRED). Opaque identifier for a placement of an LTI resource link
within a _context_ that MUST be unique and MUST be immutable within the platform
instance. This value MUST change if the link is copied or exported from one system
or context and imported into another system or context.

**description** (OPTIONAL). Descriptive phrase for an LTI resource link
placement.

**title** (OPTIONAL). Descriptive title for an LTI resource link placement.

### User claim

As defined in the IMS Security Framework [[!SEC-10]], any
platform-originating message is an ID Token. Information included about the
user launching may vary, for example, based on privacy settings. LTI 1.3 only
requires the message sender to include the user's LTI identifier.

The required <code>sub</code> claim's value contains a string acting as an opaque
identifier for the user that initiated the launch. This value MUST be
immutable and MUST be unique within the platform instance

### Role claims

The required <code>https://purl.imsglobal.org/spec/lti/claim/roles</code> claim's value contains a
(possibly empty) array of URI values for roles that the user has within the
message's associated context.

If this list is not empty, it MUST contain at least _one_ role from the _role
vocabularies_ described in [Appendix A.2 Role
vocabularies](#a2-role-vocabularies).

If the sender of the message wants to include a role from another vocabulary
namespace, by best practice it should use a fully-qualified URI to identify the
role. By best practice, systems should not use roles from another role
vocabulary, as this may limit interoperability.

## Optional message claims

LTI resource link launch request messages MAY contain any of the following
claims. LTI defines each group of claims with its own JSON Schema, and each
message type schema aggregates one or more of those.

### Context claim

The optional <code>https://purl.imsglobal.org/spec/lti/claim/context</code> claim composes properties for
the context from within which the resource link launch occurs. The following is an
example of this claim as if the resource link launch is in the context of a course:

<pre><code>{
...
"https://purl.imsglobal.org/spec/lti/claim/context": {
"id": "c1d887f0-a1a3-4bca-ae25-c375edcc131a",
"label": "CPS 435",
"title":  "CPS 435 Learning Analytics",
"type": ["http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering"]
}
...
}
</code></pre>

**id** (REQUIRED). Opaque identifier that uniquely identifies the context from
which the LTI message initiates. This value MUST be immutable and MUST be unique
within a platform.

**type** (OPTIONAL). An array of URI values for context types. If present, the
array MUST include at least _one_ context type from the _context type
vocabulary_ described in [Appendix A.1 Context type
vocabularies](#a1-context-type-vocabulary). If the sender of the message wants
to include a context type from another vocabulary namespace, by best practice
it should use a fully-qualified URI. By best practice, systems should not use
context types from another role vocabulary, as this may limit interoperability.

**label** (OPTIONAL). Short descriptive name for the context. This often carries
the "course code" for a course offering or course section context.

**title** (OPTIONAL). Full descriptive name for the context. This often carries
the "course title" or "course name" for a course offering context.

### Platform claim

The optional <code>https://purl.imsglobal.org/spec/lti/claim/tool_platform</code> claim composes
properties associated with the platform initiating the launch, as in the
following example:,

<pre><code>{
...
"https://purl.imsglobal.org/spec/lti/claim/tool_platform": {
"product_family_code": "ExamplePlatformVendor-Product",
"guid": "https://platform.example.edu",
"name": "Platform for Example EDU",
 ...
}
}
...
}
</code></pre>

**guid** (OPTIONAL). A unique identifier for the installed instance of the tool
platform. By common practice, this MAY be the domain of the institution hosting
the platform or the subdomain of the platform instance within the institution's
overall domain (especially if the institution has multiple platforms within its
domain).

**contact_email** (OPTIONAL). Administrative contact email for the platform instance.

**description** (OPTIONAL). Descriptive phrase for the platform instance.

**name** (OPTIONAL). Name for the platform instance.

**url** (OPTIONAL). Home HTTPS URL endpoint for the platform instance.

**product_family_code** (OPTIONAL). Vendor product family code for the type of platform.

**version** (OPTIONAL). Vendor product version for the platform.

### Role-scope mentor claims

The optional <code>https://purlimsglobal.org/spec/lti/claim/role_scope_mentor</code> claim's value
contains an array of the user ID values which the current, launching user can
access as a mentor (for example, the launching user may be a parent or auditor
of a list of other users).

Different systems may use this information in different ways, LTI generally
expects that the message receiver will provide the mentor with access to
tracking and summary information for other users, but not necessarily access to
those users' personal data or content submissions.

The sender of the message MUST NOT include a list of users in this property
unless they also provide
<code>http://purl.imsglobal.orb/vocab/lis/v2/membership#Mentor</code> as one of the values
passed in the <code>roles</code> claim.

### Launch presentation claim

The optional <code>https://purl.imsglobal.org/spec/lti/claim/launch_presentation</code> claim composes
properties that describe aspects of how the message sender expects to host the
presentation of the message receiver's user experience (for example, the height
and width of the viewport the message sender gives over to the message
receiver), as in the following example:

<pre><code>{
...
"https://purl.imsglobal.org/spec/lti/claim/launch_presentation": {
"document_target": "iframe",
...
"return_url": "https://platform.example.edu/terms/201601/courses/7/sections/1/resources/2"
}
...
}
</code></pre>

**document_target** (OPTIONAL). The kind of browser window or frame from which
the user launched inside the message sender's system. The value for this
property MUST be one of: <code>frame</code>, <code>iframe</code>, or <code>window</code>.

**height**, **width** (OPTIONAL). Height and width of the window or frame where
the content from the message receiver will be displayed to the user.

**return_url** (OPTIONAL). Fully-qualified HTTPS URL within the message
sender's user experience to where the message receiver can redirect the user
back. The message receiver can redirect to this URL after the user has finished
activity, or if the receiver cannot start because of some technical difficulty.

The message receiver may want to send back a message to the message sender. If
the message sender includes a <code>return_url</code> in its <code>launch_presentation</code>, it
MUST support these four query parameters that MAY be parameterize the
redirection to the return URL:

* _lti_errormsg_, _lti_msg_. Use these query parameters to carry a
user-targeted message for unsuccessful or successful (respectively) activity
completion. These are intended for showing to the user.

* _lti_errorlog_, _lti_log_. Use these query parameters to carry a
log-targeted message for unsuccessful for successful (respectively) activity
completion. These are intended for writing to logs.

**locale** (OPTIONAL). Language, country, and variant as represented using the
IETF Best Practices for Tags for Identifying Languages [[!BCP47]].

### Learning Information Services LIS claim

The optional <code>https://purl.imsglobal.org/spec/lti/claim/lis</code> claim's value composes properties
about available Learning Information Services (LIS), usually originating from
the Student Information System, as in the following example:

<pre><code>{
"https://purl.imsglobal.org/spec/lti/claim/lis": {
"person_sourcedid": "example.edu:71ee7e42-f6d2-414a-80db-b69ac2defd4",
"course_offering_sourcedid": "example.edu:SI182-F16",
"course_section_sourcedid": "example.edu:SI182-001-F16"
}
}
</code></pre>

See [Appendix E](#appendix-e-using-learning-information-services-with-lti)
for more detail on this service.

### Custom properties and variable substitution

The optional <code>https://purl.imsglobal.org/spec/lti/claim/custom</code> claim acts like a key-value map of
defined custom properties that a platform may associate with the particular
placement of the resource link that initiated the launch.

Each custom property name appears as a property within the message's top-level
<code>custom</code> property. As a best practice, customer property names should consist
of nothing but underscores and alphanumeric characters.

#### Custom property value substitution

Senders of LTI messages MAY have the ability to make value substitutions for
custom properties, at launch time, as described in [Appendix
B](#appendix-b-custom-property-substitution). For example, if a custom property
was <code>xstart=$CourseSection.timeFrame.begin</code> the custom property appearing in
the LTI message would look like this:

<pre><code>{
...
"https://purl.imsglobal.org/spec/lti/claim/custom": {
"xstart": "2017-04-21T01:00:00Z",
...
}
...
}
</code></pre>

The receiver of the LTI message MUST NOT depend upon the message sender
supporting any particular property substitution. If the message sender did not
support the property substitution, or if the property substitution is supported but the request is
not authorized to access the data, its messages MUST give the requested property a value
of the property substitution string. In the case of the preceding example,
<code>custom.xstart</code> property returns the value <code>$CourseSection.timeFrame.begin</code> (i.e.
send the property value un-substituted).

Vendors may extend the list of custom property substitution variables;
refer to section B.14 of this document for more information on custom
variable name best practices.

#### Custom Variable Character Sets

The supported character set is defined as followed, using the Augmented Backus-Naur Form
as described in [[!RFC5234]]:

<code>custom_variable = 1*( %x21 / %x23-5B / %x5D-7E )</code>

A platform MUST NOT do any transformations on characters in this set and instead must
return the variable string as unsupported as described in section 4.4.5.1 of this document.

Custom variables traditionally have required that any non-alphanumeric character
that was not in the set of characters <code>_-</code> were to be replaced with a <code>_</code> character. This is
no longer required.

#### Custom properties and Common Cartridge

[Appendix D](#appendix-d-representing-lti-links-in-an-ims-common-cartridge)
explains how custom properties are represented when a link is stored in
a Common Cartridge.

### Vendor-specific extension claims

Vendors MAY extend the information model for any message type and inject
additional properties into the message's JSON object by adding one or more claims.
Vendors MUST use a fully-qualified URL as the claim name for any of their
extension claims.

<pre><code>
"http://www.ExamplePlatformVendor.com/session": {
"id": "89023sj890dju080"
}
</code></pre>

By best practice, vendors should define custom variables as described in
[Appendix B](#appendix-b-custom-property-substitution) instead of relying on
extension properties.

# Interacting with services

## Services exposed as additional claims

LTI does not rely on prior knowledge of service endpoints.
Rather, the platform MUST include in each message applicable service
endpoints as fully resolved URLs (not as URL templates).

The platform MUST have a separate claim in the message for each service, to
contain the endpoints (and possibly other properties) relevant for that
service. The endpoints and properties the platform sends for a service usually vary
from message to message and are always fully resolved.

## Token endpoint claim and services

Access tokens MUST protect all the services described by the platform; tools
MUST retrieve these access tokens using the JSON Web Token (JWT) Profile for
OAuth 2.0 Client Authentication and Authorization Grants as specified in the LTI
Security Framework - Using JSON Web Tokens with OAuth 2.0 [[!SEC-10]].

The access token endpoint is communicated during the tool registration and
used to access all services (unless explicitly stated otherwise in the service
definition).

<section class="appendix normative" id="standardvocabs">

# Appendix A - LTI standard vocabularies

This specification uses URI values to identify certain standard vocabulary
entities. This section defines the URI values for various LIS context
types. LTI 1.0 through LTI 1.1.1 used URN values for these entities, and
allowed the use of simple names. LTI 1.3 supports the old simple name and URN
values for backward compatibility, but deprecates their use and replaces them
with a URI that points to a entities in an RDF ontology.

Conforming implementations MAY recognize the deprecated simple names (for
context types and context roles) and the deprecated URN values, and MUST
recognize the new URI values.

## Context type vocabulary

The context type vocabularies are derived from the LIS v2.0 specification [[!LIS-20]].

<table>
<tr><th>Type
<th>Name

<tr><td>Course Template
<td>
    <code>http://purl.imsglobal.org/vocab/lis/v2/course#CourseTemplate</code><br/>
    <code>CourseTemplate</code> (deprecated) <br/>
    <code>urn:lti:context-type:ims/lis/CourseTemplate</code> (deprecated)

<tr><td>Course Offering
<td>
    <code>http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering</code><br/>
    <code>CourseOffering</code> (deprecated) <br/>
    <code>urn:lti:context-type:ims/lis/CourseOffering</code> (deprecated)

<tr><td>Course Section
<td>
    <code>http://purl.imsglobal.org/vocab/lis/v2/course#CourseSection</code><br/>
    <code>CourseSection</code> (deprecated) <br/>
    <code>urn:lti:context-type:ims/lis/CourseSection</code> (deprecated)

<tr><td>Group
<td>
    <code>http://purl.imsglobal.org/vocab/lis/v2/course#Group</code><br/>
    <code>Group</code> (deprecated) <br/>
    <code>urn:lti:context-type:ims/lis/Group</code> (deprecated)
</table>

## Role vocabularies

The role vocabularies are derived from the LIS 2.0 specification[[!LIS-20]].
LTI divides them into core and non-core roles. Core roles are those which
are most likely to be relevant within LTI and hence vendors should support them
by best practice. Vendors may also use the non-core rules, but they may not be
widely used.

### LIS vocabulary for system roles

<table>
<tr><th>Core&nbsp;system roles
<td><code>http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/system/person#None</code>

<tr><th>Non&#8209;core&nbsp;system roles
<td><code>http://purl.imsglobal.org/vocab/lis/v2/system/person#AccountAdmin</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/system/person#Creator</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/system/person#SysAdmin</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/system/person#SysSupport</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/system/person#User</code>

<tr><td colspan=2><em>Note</em>. System roles using URIs with prefixes of
  <code>http://purl.imsglobal.org/vocab/lis/v2/person#</code>
  (e.g. <code>http://purl.imsglobal.org/vocab/lis/v2/person#Administrator</code>)
  are all deprecated. (Note the lack of the <code>system</code> keyword
  in the path for these deprecated URIs.)
</table>

### LIS vocabulary for institution roles

<table>
<tr><th>Core&nbsp;institution roles
<td><code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Guest</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#None</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Other</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Staff</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student</code>

<tr><th>Non&#8209;core&nbsp;institution roles
<td><code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Alumni</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Faculty</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Instructor</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Learner</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Member</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Mentor</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#Observer</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/institution/person#ProspectiveStudent</code>

<tr><td colspan=2><em>Note</em>.Institution roles using URIs with prefixes of
<code>http://purl.imsglobal.org/vocab/lis/v2/person#</code>
(e.g. <code>http://purl.imsglobal.org/vocab/lis/v2/person#Administrator</code>)
are all deprecated. (Note the lack of the <code>institution</code> keyword
in the path for these deprecated URIs.)
</table>

### LIS vocabulary for context roles

Core context roles are:

<table>
<tr><th>Core&nbsp;context roles
<td><code>http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/membership#ContentDeveloper</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/membership#Learner</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor</code> <br/>

<tr><th>Non&#8209;core&nbsp;context&nbsp;roles
<td><code>http://purl.imsglobal.org/vocab/lis/v2/membership#Manager</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/membership#Member</code> <br/>
    <code>http://purl.imsglobal.org/vocab/lis/v2/membership#Officer</code> <br/>
</table>

Conforming implementations MAY recognize the simple names for context roles;
thus, for example, vendors can use the following roles interchangeably:

* <code>http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor</code>
* <code>Instructor</code>

However, support for simple names in this manner for context roles is
deprecated; by best practice, vendors should use the full URIs for all roles
(context roles included).

#### Context sub-roles

Roles within the LIS 2.0 specification[[!LIS-20]] consist of a principal
RoleType and an optional SubRoleType, according to the following format:

<blockquote>
<code>http://purl.imsglobal.org/vocab/lis/v2/membership/{<em>rolename</em>}#{<em>sub-rolename</em>}</code>
</blockquote>

For example, here is the URL for principal role <code>Instructor</code>, sub-role
<code>TeachingAssistant</code>:

> <code>http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#TeachingAssistant</code>

The list below gives the sub-roles available for each principal context role.

<table>
<tr><th>Principal role
<th>Sub-role

<tr><td><code>Administrator</code>
<td><code>Administrator</code> <br/>
    <code>Developer</code> <br/>
    <code>ExternalDeveloper</code> <br/>
    <code>ExternalSupport</code> <br/>
    <code>ExternalSystemAdministrator</code> <br/>
    <code>Support</code> <br/>
    <code>SystemAdministrator</code>

<tr><td><code>ContentDeveloper</code>
<td><code>ContentDeveloper</code> <br/>
    <code>ContentExpert</code> <br/>
    <code>ExternalContentExpert</code> <br/>
    <code>Librarian</code>

<tr><td><code>Instructor</code>
<td><code>ExternalInstructor</code> <br/>
    <code>Grader</code> <br/>
    <code>GuestInstructor</code> <br/>
    <code>Instructor</code> <br/>
    <code>Lecturer</code> <br/>
    <code>PrimaryInstructor</code> <br/>
    <code>SecondaryInstructor</code> <br/>
    <code>TeachingAssistant</code> <br/>
    <code>TeachingAssistantGroup</code> <br/>
    <code>TeachingAssistantOffering</code> <br/>
    <code>TeachingAssistantSection</code> <br/>
    <code>TeachingAssistantTemplate

<tr><td><code>Learner</code>
<td><code>ExternalLearner</code> <br/>
    <code>GuestLearner</code> <br/>
    <code>Learner</code> <br/>
    <code>NonCreditLearner</code>

<tr><td><code>Manager</code>
<td><code>AreaManager</code> <br/>
    <code>CourseCoordinator</code> <br/>
    <code>ExternalObserver</code> <br/>
    <code>Manager</code> <br/>
    <code>Observer</code>

<tr><td><code>Member</code>
<td><code>Member</code>

<tr><td><code>Mentor</code>
<td><code>Advisor</code> <br/>
    <code>Auditor</code> <br/>
    <code>ExternalAdvisor</code> <br/>
    <code>ExternalAuditor</code> <br/>
    <code>ExternalLearningFacilitator</code> <br/>
    <code>ExternalMentor</code> <br/>
    <code>ExternalReviewer</code> <br/>
    <code>LearningFacilitator</code> <br/>
    <code>Mentor</code> <br/>
    <code>Reviewer</code> <br/>
    <code>Tutor</code>

<tr><td><code>Officer</code>
<td><code>Chair</code> <br/>
    <code>Secretary</code> <br/>
    <code>Treasurer</code> <br/>
    <code>Vice-Chair</code>
</table>

LTI does not classify any of the sub-roles as a core role. Whenever a platform
specifies a sub-role, by best practice it should also include the associated
principal role; for example, by best practice, a platform specifying the
<code>http://purl.imsglobal.org/vocab/lis/v2/membership/Instructor#TeachingAssistant</code>
role should always also specify the
<code>http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor</code> role.

</section>

<section class="appendix normative" id="customproperty">

# Custom property substitution

Support for substitutable custom properties is optional and the receiver of LTI
messages should anticipate that these properties may come from the message
sender in their unsubstituted form. For example, if a resource link has a
custom property set to the value of the <code>Person.address.street1</code> variable, a
message sender which does not support this variable MUST launch with the
customer property set to a value of <code>$Person.address.street1</code> (the variable
name is prefixed with a dollar sign).

Vendors may also define their own specific custom property substitution
variables as described in the <code>Custom Variables</code> subsection below.

Other LTI related specifications may also define their own specific
variables related to the domain they cover.

## LTI User Variables

<table>
<tr><th align=left>Message variable name
<th align=left>Corresponding LTI message value

<tr><td><code>User.id</code>
<td><code>user.id</code> message property value; this may not be their real
    ID if they are masquerading as another user; see following.

<tr><td><code>User.image</code>
<td><code>user.image</code> message property value.

<tr><td><code>User.username</code>
<td>Username by which the message sender knows the user (typically, the
    name a user logs in with).

<tr><td><code>User.org</code>
<td>One or more URIs describing the user's organizational properties (for
    example, an <code>ldap://</code> URI); by best practice, message
    senders should separate multiple URIs by commas.

<tr><td><code>User.scope.mentor</code>
<td><code>role_scope_mentor</code> message property value.
</table>

These <code>User</code> variables represent the user who is the subject of the message.
There may, however, be occasions when this is not the actual user performing
the action; for example, when an administrator accesses a course as one of its
members. In this case, the same information about the actual user (the
administrator in the example given) can be requested by using a variable name
prefix of <code>ActualUser</code> (rather than <code>User</code>); for example, <code>ActualUser.id</code>. In
this case, the corresponding LTI message properties will be <code>actual_user</code>
properties (for example, <code>actual_user.id</code>).

## LIS Person Variables

<table>
<tr><th align=left>Message variable name
<th align=left>XPath for value from LIS database

<tr><td><code>Person.sourcedId</code>
<td><code>personRecord/sourcedId</code><br/>
    (<code>lis_person.sourcedid</code> property)

<tr><td><code>Person.name.full</code>
<td><code>personRecord/person/formname/[formnameType/instanceValue/text="Full"]/formattedName/text</code><br/>
    (<code>lis_person.name_full</code> property)

<tr><td><code>Person.name.family</code>
<td><code>personRecord/person/name/partName[instanceName/text="Family"]/instanceValue/text</code><br/>
    (<code>lis_person.name_family</code> property)

<tr><td><code>Person.name.given</code>
<td><code>personRecord/person/name/partName[instanceName/text="Given"]/instanceValue/text</code><br/>
    (<code>lis_person.name_given</code> property)

<tr><td><code>Person.name.middle</code>
<td><code>personRecord/person/name/partName[instanceName/text="Middle"]/instanceValue/text</code>

<tr><td><code>Person.name.prefix</code>
<td><code>personRecord/person/name/partName[instanceName/text="Prefix"]/instanceValue/text</code>

<tr><td><code>Person.name.suffix</code>
<td><code>personRecord/person/name/partName[instanceName/text="Suffix"]/instanceValue/text</code>

<tr><td><code>Person.address.street1</code>
<td><code>personRecord/person/address/[addressType/instanceValue/text="Preferred"]/addressPart/nameValuePair/[instanceName/text="NonFieldedStreetAddress1"]/instanceValue/text</code><sup>1</sup>

<tr><td><code>Person.address.street2</code>
<td><code>personRecord/person/address/[addressType/instanceValue/text="Preferred"]/addressPart/nameValuePair[instanceName/text="NonFieldedStreetAddress2"]/instanceValue/text</code><sup>1</sup>

<tr><td><code>Person.address.street3</code>
<td><code>personRecord/person/address/[addressType/instanceValue/text="Preferred"]addressPart/nameValuePair/[instanceName/text="NonFieldedStreetAddress3"]/instanceValue/text</code><sup>1</sup>

<tr><td><code>Person.address.street4</code>
<td><code>personRecord/person/address/[addressType/instanceValue/text="Preferred"]addressPart/nameValuePair/[instanceName/text="NonFieldedStreetAddress4"]/instanceValue/</code><sup>1</sup>

<tr><td><code>Person.address.locality</code>
<td><code>personRecord/person/address/[addressType/instanceValue/text="Preferred"]addressPart/nameValuePair/[instanceName/text="Locality"]/instanceValue/text</code><sup>1</sup>

<tr><td><code>Person.address.statepr</code>
<td><code>personRecord/person/address/[addressType/instanceValue/text="Preferred "]addressPart/nameValuePair/[instanceName/text="Statepr"]/instanceValue/text</code><sup>1</sup>

<tr><td><code>Person.address.country</code>
<td><code>personRecord/person/address/[addressType/instanceValue/text="Preferred"]addressPart/nameValuePair/[instanceName/text="Country"]/instanceValue/text</code><sup>1</sup>

<tr><td><code>Person.address.postcode</code>
<td><code>personRecord/person/address/[addressType/instanceValue/text="Preferred"]addressPart/nameValuePair/[instanceName/text="Postcode"]/instanceValue/text</code><sup>1</sup>

<tr><td><code>Person.address.timezone</code>
<td><code>personRecord/person/address/[addressType/instanceValue/text="Preferred"]addressPart/nameValuePair/[instanceName/text="Timezone"]/instanceValue/text</code><sup>1</sup>

<tr><td><code>Person.phone.mobile</code>
<td><code>personRecord/person/contactinfo[contactinfoType/instanceValue/text="Mobile"]/contactInfoValue/text</code>

<tr><td><code>Person.phone.primary</code>
<td><code>personRecord/person/contactinfo[contactinfoType/instanceValue/text="Telephone_Primary"]/contactinfoValue/text</code>

<tr><td><code>Person.phone.home</code>
<td><code>personRecord/person/contactinfo [contactinfoType/instanceValue/text="Telephone_Home"]/contactinfoValue/text</code>

<tr><td><code>Person.phone.work</code>
<td><code>personRecord/person/contactinfo [contactinfoType/instanceValue/text="Telephone_Work"]/contactinfoValue /text</code>

<tr><td><code>Person.email.primary</code>
<td><code>personRecord/person/contactinfo[contactinfoType/instanceValue/text="Email_Primary"]/contactinfoValue/text</code><br/>
(<code>lis_person.contact_email_primary</code> property)

<tr><td><code>Person.email.personal</code>
<td><code>person/contactinfo[contactinfoType/instanceValue/text="Email_Personal"]/contactinfoValue/text</code>

<tr><td><code>Person.webaddress</code>
<td><code>personRecord/person/contactinfo[contactinfoType/instanceValue/text="Web-Address"]/contactinfoValue/text</code>

<tr><td><code>Person.sms</code>
<td><code>personRecord/person/contactinfo[contactinfoType/instanceValue/text="SMS"]/contactinfoValue/text</code>

<tr>
<td colspan=2><sup>1</sup> The "Preferred" instanceName is not part of the default LIS
    vocabulary. The IMS LTI group proposes to add this term in the LTI
    Profile of LIS so that LTI can support a single address instead of
    dealing with multiple address types as prescribed by the full LIS standard.
</table>

These <code>Person</code> variables represent the person who is the subject of the
message. There may, however, be occasions when this is not the actual person
performing the action; for example, when an administrator accesses a course as
one of its members. In this case, the same information about the actual person
(the administrator in the example given) can be requested by using a variable
name prefix of <code>ActualPerson</code> (rather than <code>Person</code>); for example,
<code>ActualPerson.sourcedId</code>.

## LTI Context Variable

<table>
<tr><th align=left>Message variable name
<th align=left>Corresponding LTI value

<tr><td><code>Context.id</code>
<td><code>context.id</code> property.

<tr><td><code>Context.org</code>
<td>A URI describing the context's organizational properties; for example,
an <code>ldap://</code> URI. By best practice, message senders should
separate URIs using commas.

<tr><td><code>Context.type</code>
<td><code>context.type</code> property.

<tr><td><code>Context.label</code>
<td><code>context.label</code> property.

<tr><td><code>Context.title</code>
<td><code>context.label</code> property.

<tr><td><code>Context.sourcedId</code>
<td>The sourced ID of the context.

<tr><td><code>Context.id.history</code>
<td>A comma-separated list of URL-encoded context ID values representing
    previous copies of the context; the ID of most recent copy should
    appear first in the list followed by any earlier IDs in reverse
    chronological order. If the context was created from scratch, not as a
    copy of an existing context, then this variable should have an empty value.
</table>

## LTI ResourceLink Variables

<table>
<tr><th align=left>Message variable name
<th align=left>Corresponding LTI value

<tr><td><code>ResourceLink.id</code>
<td><code>resource_link.id</code> property

<tr><td><code>ResourceLink.title</code>
<td><code>resource_link.title</code> property

<tr><td><code>ResourceLink.description</code>
<td><code>resource_link.description</code> property

<tr><td><code>ResourceLink.id.history</code>
<td>A comma-separated list of URL-encoded resource link ID values
    representing the ID of the link from a previous copy of the context;
    the most recent copy should appear first in the list followed by any
    earlier IDs in reverse chronological order. If the link was first added
    to the current context then this variable should have an empty value.
</table>

## LIS Course Template Variables

<table>
<tr><th align=left>Message variable name
<th align=left>XPath for value from LIS database

<tr><td><code>CourseTemplate.sourcedId</code>
<td><code>courseTemplateRecord/sourcedId</code>

<tr><td><code>CourseTemplate.label</code>
<td><code>courseTemplateRecord/courseTemplate/label/textString</code>

<tr><td><code>CourseTemplate.title</code>
<td><code>courseTemplateRecord/courseTemplate/title/textString</code>

<tr><td><code>CourseTemplate.shortDescription</code>
<td><code>courseTemplateRecord/courseTemplate/catalogDescription/shortDescription</code>

<tr><td><code>CourseTemplate.longDescription</code>
<td><code>courseTemplateRecord/courseTemplate/catalogDescription/longDescription</code>

<tr><td><code>CourseTemplate.courseNumber</code>
<td><code>courseTemplateRecord/courseTemplate/courseNumber/textString</code>

<tr><td><code>CourseTemplate.credits</code>
<td><code>courseTemplateRecord/courseTemplate/defaultCredits/textString</code>
</table>

## LIS Course Offering Variables

<table>
<tr><th align=left>Message variable name
<th align=left>XPath for value from LIS database

<tr><td><code>CourseOffering.sourcedId</code>
<td><code>courseOfferingRecord/sourcedId</code><br/>
    (<code>lis_course_offering_sourcedid</code> property)

<tr><td><code>CourseOffering.label</code>
<td><code>courseOfferingRecord/courseOffering/label</code>

<tr><td><code>CourseOffering.title</code>
<td><code>courseOfferingRecord/courseOffering/title</code>

<tr><td><code>CourseOffering.shortDescription</code>
<td><code>courseOfferingRecord/courseOffering/catalogDescription/shortDescription</code>

<tr><td><code>CourseOffering.longDescription</code>
<td><code>courseOfferingRecord/courseOffering/catalogDescription/longDescription</code>

<tr><td><code>CourseOffering.courseNumber</code>
<td><code>courseOfferingRecord/courseOffering/courseNumber/textString</code>

<tr><td><code>CourseOffering.credtis</code>
<td><code>courseOfferingRecord/courseOffering/defaultCredits/textString</code>

<tr><td><code>CourseOffering.academicSession</code>
<td><code>courseOfferingRecord/courseOffering/defaultCredits/textString</code>
</table>

## LIS Course Section Variables

<table>
<tr><th align=left>Message variable name
<th align=left>XPath for value from LIS database

<tr><td><code>CourseSection.sourcedId</code>
<td><code>courseSection/sourcedId</code><br/>
    (<code>lis_course_section_sourcedid</code> property)

<tr><td><code>CourseSection.label</code>
<td><code>courseSectionRecord/courseSection/label</code>

<tr><td><code>CourseSection.title</code>
<td><code>courseSectionRecord/courseSection/title</code>

<tr><td><code>CourseSection.shortDescription</code>
<td><code>courseSectionRecord/courseSection/catalogDescription/shortDescription</code>

<tr><td><code>CourseSection.longDescription</code>
<td><code>courseSectionRecord/courseSection/catalogDescription/longDescription</code>

<tr><td><code>CourseSection.courseNumber</code>
<td><code>courseSectionRecord/courseSection/courseNumber/textString</code>

<tr><td><code>CourseSection.credits</code>
<td><code>courseSectionRecord/courseSection/defaultCredits/textString</code>

<tr><td><code>CourseSection.maxNumberOfStudents</code>
<td><code>courseSectionRecord/courseSection/maxNumberofStudents</code>

<tr><td><code>CourseSection.numberOfStudents</code>
<td><code>courseSectionRecord/courseSection/numberofStudents</code>

<tr><td><code>CourseSection.dept</code>
<td><code>courseSectionRecord/courseSection/org[type/textString="Dept"]/orgName/textString</code>

<tr><td><code>CourseSection.timeFrame.begin</code>
<td><code>courseSectionRecord/courseSection/timeFrame/begin</code>

<tr><td><code>CourseSection.timeFrame.end</code>
<td><code>courseSectionRecord/courseSection/timeFrame/end</code>

<tr><td><code>CourseSection.enrollControl.accept</code>
<td><code>courseSectionRecord/courseSection/enrollControl/enrollAccept</code>

<tr><td><code>CourseSection.enrollControl.allowed</code>
<td><code>courseSectionRecord/courseSection/enrollControl/enrollAllowed</code>

<tr><td><code>CourseSection.dataSource</code>
<td><code>courseSectionRecord/courseSection/dataSource</code>

<tr><td><code>CourseSection.sourceSectionId</code>
<td><code>createCourseSectionFromCourseSectionRequest/sourcedId</code>
</table>

## LIS Group Variables

<table>
<tr><th align=left>Message variable name
<th align=left>XPath for value from LIS database

<tr><td><code>Group.sourcedId</code>
<td><code>groupRecord/sourcedId</code>

<tr><td><code>Group.scheme</code>
<td><code>groupRecord/group/groupType/scheme/textString</code>

<tr><td><code>Group.typevalue</code>
<td><code>groupRecord/group/groupType/typevalue/textString</code>

<tr><td><code>Group.level</code>
<td><code>groupRecord/group/groupType/typevalue/level/textString</code>

<tr><td><code>Group.email</code>
<td><code>groupRecord/group/email</code>

<tr><td><code>Group.url</code>
<td><code>groupRecord/group/url</code>

<tr><td><code>Group.timeFrame.begin</code>
<td><code>groupRecord/group/timeframe/begin</code>

<tr><td><code>Group.timeFrame.end</code>
<td><code>groupRecord/group/timeframe/end</code>

<tr><td><code>Group.enrollControl.accept</code>
<td><code>groupRecord/group/enrollControl/enrollAccept</code>

<tr><td><code>Group.enrollControl.end</code>
<td><code>groupRecord/group/enrollControl/enrollAllowed</code>

<tr><td><code>Group.shortDescription</code>
<td><code>groupRecord/group/description/shortDescription</code>

<tr><td><code>Group.longDescription</code>
<td><code>groupRecord/group/description/longDescription</code>

<tr><td><code>Group.parentId</code>
<td><code>groupRecord/group/relationship[relation="Parent"]/sourcedId</code>
</table>

## LIS Membership Variables

<table>
<tr><th align=left>Message variable name
<th align=left>XPath for value from LIS database

<tr><td><code>Membership.sourcedId</code>
<td><code>membershipRecord/sourcedId</code>

<tr><td><code>Membership.collectionSourcedid</code>
<td><code>membershipRecord/membership/collectionSourcedId</code>

<tr><td><code>Membership.personSourcedId</code>
<td><code>membershipRecord/membership/memnber/personSourcedId</code>

<tr><td><code>Membership.status</code>
<td><code>membershipRecord/membership/member/role/status</code>

<tr><td><code>Membership.role</code>
<td><code>membershipRecord/membership/member/role/roleType</code><br/>
    (<code>roles</code> property)

<tr><td><code>Membership.createdTimestampe</code>
<td><code>membershipRecord/membership/member/role/dateTime</code>

<tr><td><code>Membership.dataSource</code>
<td><code>membershipRecord/membership/member/role/dataSource</code>

<tr><td><code>Membership.role.scope.mentor</code>
<td><code>role_scope_mentor</code> property
</table>

## LIS Message Variables

<table>
<tr><th align=left>Message variable name
<th align=left>Corresponding LTI value

<tr><td><code>Message.returnUrl</code>
<td>URL for returning the user to the platform
    (for example, the <code>launch_presentation.return_url</code> property).

<tr><td><code>Message.documentTarget</code>
<td><code>launch_presentation.document_target</code> property.

<tr><td><code>Message.height</code>
<td><code>launch_presentation.height</code> property.

<tr><td><code>Message.width</code>
<td><code>launch_presentation.width</code> property.

<tr><td><code>Message.locale</code>
<td><code>launch_presentation.locale</code> property.
</table>

## Tool Platform Variables

<table>
<tr><th align=left>Message variable name
<th align=left>Corresponding LTI value

<tr><td><code>ToolPlatform.productFamilyCode</code>
<td><code>tool_platform.product_family_code</code> property.

<tr><td><code>ToolPlatform.version</code>
<td><code>tool_platform.version</code> property.

<tr><td><code>ToolPlatformInstance.guid</code>
<td><code>tool_platform.instance_guid</code> property.

<tr><td><code>ToolPlatformInstance.name</code>
<td><code>tool_platform.instance_name</code> property.

<tr><td><code>ToolPlatformInstance.description</code>
<td><code>tool_platform.instance_description</code> property.

<tr><td><code>ToolPlatformInstance.url</code>
<td><code><code>tool_platform.instance_url</code> property.

<tr><td><code>ToolPlatformInstance.contactEmail</code>
<td><code>tool_platform.instance_contact_email</code> property.
</table>

## Custom Variables

Vendors may define custom variables. For example, a platform vendor may wish to
provide access to certain platform-specific values of its own. Custom variable
names MUST be globally unique. By best practice, the name of a custom variable
should start with a registered domain name, where the components of the domain
are listed in reverse order, as in the form in this example (where the vendor
owns the <code>example.com</code> domain registration):

> <code>$com.example.Foo.bar</code>

Every custom variable is associated with a capability identified by
some URI. The capability asserts that the offering vendor supports expansion of
the specified variable within LTI message properties. For example, the
capability associated with the <code>$com.example.Foo.bar</code> variable might be
associated with this URI:

> <code>http://www.example.com/var#com.example.Foo.bar</code>

</section>

<section class="appendix normative" id="cclinks">

# Representing LTI links in an IMS Common Cartridge

The format to include LTI resource links has not changed except that all launches
MUST be sent over HTTPS (non-secure launches are no longer an option). The values
of <code>secure_launch_url</code> and <code>secure_icon</code> SHOULD be included to maintain backwards
compatibility, but they MUST also contain a secure HTTPS url if included. The original
name of "basic LTI link" is still used to refer to LTI resource links. Self-contained,
basic LTI resource links are defined in the resource section of an IMS Common Cartridge
as follows:

<pre><code><resource identifier="I_00010_R" type="imsbasiclti_xmlv1p0">
<file href="I_00001_R/BasicLTI.xml"/>
</resource>
</code></pre>

The <code>href</code> in the resource entry refers to a file path in the cartridge that
contains an XML description of the basic LTI link, as in the following example:

<pre><code><?xml version="1.0" encoding="UTF-8"?>
<cartridge_basiclti_link xmlns="http://www.imsglobal.org/xsd/imslticc_v1p0"
xmlns:blti = "http://www.imsglobal.org/xsd/imsbasiclti_v1p0"
xmlns:lticm ="http://www.imsglobal.org/xsd/imslticm_v1p0"
xmlns:lticp ="http://www.imsglobal.org/xsd/imslticp_v1p0"
xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation = "http://www.imsglobal.org/xsd/imslticc_v1p0
http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticc_v1p0.xsd
http://www.imsglobal.org/xsd/imsbasiclti_v1p0
http://www.imsglobal.org/xsd/lti/ltiv1p0/imsbasiclti_v1p0.xsd
http://www.imsglobal.org/xsd/imslticm_v1p0
http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticm_v1p0.xsd
http://www.imsglobal.org/xsd/imslticp_v1p0
http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticp_v1p0.xsd">
<blti:title>Grade Book</blti:title>
<blti:description>Grade Book with many column types</blti:description>
<blti:custom>
<lticm:property name="keyname">value</lticm:property>
</blti:custom>
<blti:extensions platform="my.lms.com">
<lticm:property name="keyname">value</lticm:property>
</blti:extensions>
<blti:launch_url>url to the basiclti launch URL</blti:launch_url>
<blti:secure_launch_url>secure URL to the basiclti launch URL</blti:secure_launch_url>
<blti:icon>url to an icon for this tool (optional)</blti:icon>
<blti:secure_icon>secure URL to an icon for this tool (optional)></blti:secure_icon>
<blti:vendor>
<lticp:code>vendor.com</lticp:code>
<lticp:name>vendor.name</lticp:name>
<lticp:description>This is a vendor of learning tools.</lticp:description>
<lticp:url>http://www.vendor.com/</lticp:url>
<lticp:contact>
  <lticp:email>support@vendor.com</lticp:email>
</lticp:contact>
</blti:vendor>
<cartridge_bundle identifierref="BLTI001_Bundle"/>
<cartridge_icon identifierref="BLTI001_Icon"/>
</cartridge_basiclti_link>
</code></pre>

Once the cartridge creator has defined the basic LTI link in the resources
section of the cartridge manifest, the organization section of the manifest may
make reference to it as needed:

<pre><code><item identifier="BasicLTI1" identifierref="I_00010_R">
<title>Homework Problems</title>
</item>
</code></pre>

By best practice, the cartridge importer should display in the user interface
the <code>title</code> in _this_ referring <code>item</code> entry, rather than the <code>title</code> in the
referred-to <code>basic_lti_link</code> entry.

The optional <code>custom</code> section MAY contain a set of key-value pairs that were
associated with the link in the system that originally authored the link. For
example if the link were a section in an eTextbook, there might be a setting
like:

<code><parameter key="section">1.2.7</parameter></code>

The platform sends these properties back to the external tool when launching
from the imported basic LTI link. If a basic LTI link is imported and then
exported, by best practice, the platform should maintain the <code>custom</code> section
across the import/export process, unless the intent is to re-author the link.

The <code>extensions</code> section allows the hosting platform to add its own key-value
pairs to the link. The platform may use extensions to store information that
the platform or authoring environment might use across an export-import
cycle. In order to allow multiple sets of extensions to be contained in the
same basic LTI descriptor, by best practice, authoring environments should add
the <code>platform</code> attribute and include an identifier that identifies the
authoring environment.

It is possible to include the icon for the link in the cartridge instead of
including it as a URL using the <code>cartridge_icon</code> entry in the descriptor. The
<code>identifierref</code> attribute points to a link that includes the icon image and a
dependency is added to the resource section of the basic LTI resource entry in
the manifest as shown below.

<pre><code><resource identifier="I_00010_R" type="imsbasiclti_xmlv1p0">
<file href="I_00001_R/BasicLTI.xml"/>
<dependency identifierref="BLTI001_Icon"/>
</resource>

<resource identifier="BLTI001_Icon"
type="associatedcontent/imscc_xmlv1p0/learning-application-resource">
<file href="BLTI001_Media/learning_icon.gif"/>
</resource>
</code></pre>

</section>

<section class="appendix normative" id="lislti">

# Using Learning Information Services with LTI

Organizations may have an IMS Learning Information Services (LIS) instance that
can provide limited functionality within an LTI context. Typically, platforms
can use LIS service properties to

* Convey information to tools about the LIS sourcedid values for users and
contexts (course offerings and sections).

* Provide an endpoint tools can use to provide Basic Outcomes
[[!LTI-BO-11]] back to the LIS instance (this may be
useful if the platform does not provide access to the more fully featured
LTI Assignment and Grade Service [[!LTI-AGS-20]].

The LIS services could actually be provided by a third-party, Student
Information System (SIS), or perhaps the LTI platform is the service provider
that tools can use.

Historically, these LIS properties have been provided in basic LTI launch
request messages.

**services.lis.course_offering_sourcedid**,
**services.lis.course_section_sourcedid** (OPTIONAL). The LIS course (offering
and section) identifiers applicable to the context of this basic LTI launch
request message.

The field's content and meaning are defined by LIS v2.0 [[!LIS-20]].

**services.lis.outcome_service_url** (OPTIONAL). URL endpoint for the LTI
Basic Outcomes Service [[!LTI-BO-11]]. By best practice, this URL should
not change from one resource link launch request message to the next; platforms
should provide a single, unchanging endpoint URL for each registered tool. This
URL endpoint may support various operations/actions; by best practice, the
provider of an LTI Basic Outcome Service should respond with a response of
<code>unimplemented</code> for actions it does not support.

This field MUST appear if the platform supports the LTI Basic Outcomes Service
for receiving outcomes from any resource link launch request messages sent to a
particular tool.

By best practice, an LTI Basic Outcome Service will only accept outcomes for
launches from a user whose roles in the context contains the Learner context
role (<code>http://purl.imsglobal.org/vocab/lis/v2/membership#Learner</code>), and thus
will only provide a <code>services.lis.result_sourcedid</code> value in those resource
link launch request messages. However, the platform should still send the
<code>services.lis.outcome_service_url</code> for all launching users in that context,
regardless of whether or not it provides a <code>result_sourcedid</code> value.

**services.lis.person_sourcedid** (OPTIONAL). The LIS identifier for the user
account that initiated the resource link launch request. The exact format
of the sourced ID may vary with the LIS integration; it is simply a unique
identifier for the launching user.

The field's content and meaning are defined by LIS v2.0 [[!LIS-20]].

**services.lis.result_sourcedid** (OPTIONAL). An opaque identifier that
indicates the LIS Result Identifier (if any) associated with the resource link
launch request (identifying a unique row and column within the service
provider's gradebook).

This field's value MUST be unique for every combination of <codecontext.id</code>,
<code>resource_link.id</code>, and <code>user.id</code>. The value may change for a particular
<code>resource_link.id</code> + <code>user.id</code> from one resource link launch request to the
next, so the tool should retain only the most recent value received
for this field (for each <code>context.id</code> + <code>resource_link.id</code> + <code>user.id</code>).

</section>

<section class="appendix normative" id="examplelinkrequest">

# Full example resource link request

The LTI resource link launch request message JSON object follows the form in
this example. The smaller examples in [section
four](#4-lti-resource-link-launch-request-message) are excerpts from this
more complete example message object representation. Note that the vast
majority of the properties are optional and may not appear in most resource
link launch request messages.

<pre><code>{
"iss": "https://platform.example.edu",
"sub": "a6d5c443-1f51-4783-ba1a-7686ffe3b54a",
"aud": ["962fa4d8-bcbf-49a0-94b2-2de05ad274af"],
"exp": 1510185728,
"iat": 1510185228,
"azp": "962fa4d8-bcbf-49a0-94b2-2de05ad274af",
"nonce": "fc5fdc6d-5dd6-47f4-b2c9-5d1216e9b771",
"name": "Ms Jane Marie Doe",
"given_name": "Jane",
"family_name": "Doe",
"middle_name": "Marie",
"picture": "https://platform.example.edu/jane.jpg",
"email": "jane@platform.example.edu",
"locale": "en-US",
"https://purl.imsglobal.org/spec/lti/claim/deployment_id":
"07940580-b309-415e-a37c-914d387c1150",
"https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiResourceLinkRequest",
"https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
"https://purl.imsglobal.org/spec/lti/claim/roles": [
"http://purl.imsglobal.org/vocab/lis/v2/institution/person#Student",
"http://purl.imsglobal.org/vocab/lis/v2/membership#Learner",
"http://purl.imsglobal.org/vocab/lis/v2/membership#Mentor"
],
"https://purl.imsglobal.org/spec/lti/claim/role_scope_mentor": [
"http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator"
],
"https://purl.imsglobal.org/spec/lti/claim/context": {
"id": "c1d887f0-a1a3-4bca-ae25-c375edcc131a",
"label": "ECON 1010",
"title": "Economics as a Social Science",
"type": ["http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering"]
},
"https://purl.imsglobal.org/spec/lti/claim/resource_link": {
"id": "200d101f-2c14-434a-a0f3-57c2a42369fd",
"description": "Assignment to introduce who you are",
"title": "Introduction Assignment"
},
"https://purl.imsglobal.org/spec/lti/claim/tool_platform": {
"guid": "https://platform.example.edu",
"contact_email": "support@platform.example.edu",
"description": "An Example Tool Platform",
"name": "Example Tool Platform",
"url": "https://platform.example.edu",
"product_family_code": "ExamplePlatformVendor-Product",
"version": "1.0"
},
"https://purl.imsglobal.org/spec/lti/claim/launch_presentation": {
"document_target": "iframe",
"height": 320,
"width": 240,
"return_url": "https://platform.example.edu/terms/201601/courses/7/sections/1/resources/2"
},
"https://purl.imsglobal.org/spec/lti/claim/custom": {
"xstart": "2017-04-21T01:00:00Z",
},
"https://purl.imsglobal.org/spec/lti/claim/lis": {
"person_sourcedid": "example.edu:71ee7e42-f6d2-414a-80db-b69ac2defd4",
"course_offering_sourcedid": "example.edu:SI182-F16",
"course_section_sourcedid": "example.edu:SI182-001-F16"
},
"http://www.ExamplePlatformVendor.com/session": {
"id": "89023sj890dju080"
}

}
</code></pre>

The platform turns this JSON object into a JWT to include in the resource link
launch request message body. After encoding as a JWT, the platform sends the
message as a form post using the <code>id_token</code> parameter (the JWT data in the
following example is not complete for conciseness).

<pre><code>POST https://example.tool.com/videos/f7701643-d79a-468a-ba8e-998f98b71638
Content-Type: application/x-www-form-urlencoded

id_token=eyJhbGciOiJIAzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3BsYXRmb3J
tLmV4YW1wbGUub3JnIiwic3ViIjoiYTZkNWM0NDMtMWY1MS00NzgzLWJhMWEtNzY4NmZmZTNiNTRhI
iwiYXVkIjpbIjk2MmZhNGQ4LWJjYmYtNDlhMC05NGIyLTJkZTA1YWQyNzRhZiJdLCJleHAiOjE1MTA
xODU3MjgsImlhdCI6MTUxMDE4NTIyOCwiYXpwIjoiOTYyZmE0ZDgtYmNiZi0...
</code></pre>

</section>


<section class="appendix informative" id="revisionhistory">
  <h2>Revision History</h2>

  <section>
    <h3>Version History</h3>
    <table title="Revision History" class="data"
      summary="Publication history and revision details for this specification.">
      <thead>
        <tr><th>Version No.</th><th>Release Date</th><th>Comments</th></tr>
      </thead>
        <tbody>
            <tr>
                <td>v1.0 Final</td><td>17 May 2010</td><td>The first formal release of the Final specification. This document is
    released for public adoption.</td>                
            </tr>
            <tr>
                    <td>v1.1 Final</td><td>13 March 2012</td><td>Added the tool registration and grade return use cases.</td>                
            </tr>
            <tr>
                    <td>v1.3 Candidate Final</td><td>26 March 2018</td><td>Revised for new authentication model, and terminology.</td>                
            </tr>
        </tbody>
    </table>
   </section>
     <section>
       <h3>Changes in this version</h3>
       <p>Changes in this version of the LTI Specification are detailed below.</p>                      
   <ul>
   <li>TBD</li>
   </ul>
    </section>   
</section>    

`
