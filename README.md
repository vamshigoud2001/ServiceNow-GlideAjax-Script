# ServiceNow GlideAjax Script Example

This project demonstrates asynchronous client-server communication in 
ServiceNow using **GlideAjax**. When a user changes the Configuration Item 
(CI) field on a form, the client script calls a Script Include on the 
server, which looks up and returns the CI's asset tag — all without a 
full page reload.

## Files
- **client-script.js** — An `onChange` client script that triggers when 
  the Configuration Item field is changed. It calls the Script Include 
  via GlideAjax and displays the returned asset tag in an alert.
- **Script-include.js** — A server-side Script Include (extends 
  `AbstractAjaxProcessor`) that queries the `cmdb_ci` table using the 
  sys_id passed from the client and returns the asset tag.

## Concepts Demonstrated
- GlideAjax / AbstractAjaxProcessor pattern
- Asynchronous client-server communication in ServiceNow
- GlideRecord query and field retrieval
- Client Scripts (onChange)

## How it works
1. User changes the Configuration Item field on a form.
2. Client script captures the new value (sys_id) and sends it to the 
   server via GlideAjax.
3. Script Include queries the `cmdb_ci` table for that record.
4. The asset tag is returned to the client and displayed in an alert.
