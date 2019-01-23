# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When the url is hit the address is compared to the DNS to find a corresponding IP address.  Once the IP address is located the browser establishes a connection with the host computer.  After this is done the client-side will start to request information from the server-side and display it to the user.  Now that a connection is made more requests can be made to the server-side computer.  

## From start to finish how does that data reach you to be rendered in the browser?

A request is made to a server via a client side interface.  The server processes the request, packets the information and sends it back. It is then processed by the local client into a form that is readable by the user.

## What code is rendered in the browser?

HTML is rendered in the browser with CSS altering some appearances.

## What is the server-side code’s main function?

The server-side code's main function is to address requests from the client side and return requested information.

## What is the client-side code’s main function?

The client-side code's main function is to interface with the user making requests to the server.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

A single instance of client-side assets are created for each window that is open to a specific webpage.

## How many instances of the server-side code are available at any given time?

As many instances of server-side code are available as there are people requesting that particular site.  If the server is reaching capacity another will join to make sure nothing is overloaded and a resulting crash is avoided.

## What is runtime?

Runtime is the calls of code from built in libraries and will be required to run most programs because the JavaScript language is not basic like C.

## How many instances of the databases connected to the server application are created?

The number of instances of a server connecting to a database will be equal to the number of client side application attempting to retrieve said data.
