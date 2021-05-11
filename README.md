<h1 align="center">
  <br>Psimplify's back end
</h1>

<h3 align="center">Scalable serverless API with Clean Architecture on AWS</h4>
<br>
<div align="center">

<img src="https://d0.awsstatic.com/logos/powered-by-aws.png" alt="AWS" width="170"/>
<img width="20"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" width="130"/>
<img width="20"/>
<img src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" alt="MongoDB" width="270"/>

</div>
<br>
<p align="center">
  <a href="#usage">Usage</a> •
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#infrastructure">Infrastructure & CI/CD</a> •
  <a href="#dependencies">Dependencies</a>
</p>

---

This is the back-end to [this front-end repo](https://github.com/fbgoode/psimplify-f).

<br>

## Usage

### Check out the [API Documentation](https://documenter.getpostman.com/view/14551874/TzRUA6vf).

### Run development server locally:
1. Clone repo
```
git clone https://github.com/fbgoode/psimplify-f.git
```
2. Start a free tier database cluster in [MongoDB Atlas](https://www.mongodb.com/es/cloud/atlas) or start a MongoDB server using the provided docker-compose.yaml file (Docker & docker-compose required):
```
docker-compose up
```

3. Create a .env file in the root directory and add the MONGODB_URI environment variable so the app can connect to the MongoDB service. If using the docker-compose.yaml file:
MONGODB_URI=mongodb://root:1234@localhost:27017/dbname

4. Comment out lines 6 and 14 in file ./src/framework/express/index.js. This will disable authentication of the API through Amazon Cognito.

5. Start the development server:
```
npm run dev
```
The API is now accessible in localhost:3001.

<br/>

## About

<table>
<tr>
<td>
<br>

**Psimplify** is the definitive solution for independent psychologists and therapists. This cloud-based service helps therapists with organization and productivity so they can spend more time on what matters. People.

</td>
</tr>
</table>
<br>

## Features
* Registration with e-mail confirmation through Amazon Cognito.
* Session based authentication with JWT refresh tokens.
* **Ready to scale indefinitely** thanks to the [serverless](https://en.wikipedia.org/wiki/Serverless_computing) infrastructure.
* Little to none "[vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in)" thanks to the DDD approach.

<br>

## Architecture

The back-end repo is structured following [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) principles, also known as Domain Driven Design or Hexagonal Architecture.

![Clean Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

The code is devided in four abstraction layers: Entities, Use Cases, Adapters and Framework.
Normally the flow of dependency goes from first to last, having the business logic of the application depend on infrastructure and external libraries. The goal with Clean Architecture is to invert the flow of dependency through dependency injection in order to keep the business logic clean and free of dependency. This way, inevitable infrastructure changes can happen without affecting the core of the application, making migrations a lot easier.

<br>

## Infrastructure

The front end is served by AWS Amplify through CDN. Authentication is performed through Amazon Cognito and API requests are managed through Amazon API Gateway. The server runs on AWS Lambda functions and communicates with a MongoDB cluster in Mongo Atlas. Thanks to this serverless architecture and the use of these managed cloud services, the app is ready to scale on demand.

One Lambda function takes care of all API endpoints to prevent cold starts. A second Lambda function is called by Cognito on user email confirmation and registers the user in the app's database.

![Infrastructure](https://d1.awsstatic.com/diagrams/Serverless_Architecture.5434f715486a0bdd5786cd1c084cd96efa82438f.png)

**CI/CD** is achieved thanks to Amazon Code Pipeline, Code Build and Code Deploy.

**A pipeline is configured so that all commits to branch master of this repo is automatically built on the cloud and deployed to production seemlessly.**

<br>

## Dependencies
* Express.js (API)
* Mongoose (MongoDB ODM)
* cognito-express (Middleware for Authentication through Cognito)
* serverless-http (To adapt the Express Backend to FaaS)
* Cors (Manages cors headers)

<br>