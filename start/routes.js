"use strict";

const { route } = require("@adonisjs/framework/src/Route/Manager");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "JobController.home");

Route.on("/signup").render("auth.signup");
Route.post("/signup", "UserController.create").validator("CreateUser");

Route.on("/login").render("auth.login");
Route.post("/login", "UserController.login").validator("LoginUser");

Route.get("/logout", async ({ auth, response }) => {
  await auth.logout();
  return response.redirect("/");
});

Route.group(() => {
  Route.get("/", "JobController.userIndex");

  Route.get("/:id/edit/", "JobController.edit");
  Route.get("/:id/delete/", "JobController.delete");

  Route.post("/", "JobController.create").validator("CreateJob");
  Route.post("/:id/update/", "JobController.update").validator("CreateJob");
}).prefix("jobs");
