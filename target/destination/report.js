$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/firstpage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "In order to remember the things I want to do, as a ToDo MVC user, I want to manage my todo list",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "Enter the todo list",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;enter-the-todo-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "the user is in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user enters the data",
  "rows": [
    {
      "cells": [
        "Wakeup",
        "Refresh",
        "EatFruits"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user verifies the data is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "firstpagestepdefinition.the_user_is_in_homepage()"
});
formatter.result({
  "duration": 5415257597,
  "status": "passed"
});
formatter.match({
  "location": "firstpagestepdefinition.the_user_enters_the_data(DataTable)"
});
formatter.result({
  "duration": 340123499,
  "status": "passed"
});
formatter.match({
  "location": "firstpagestepdefinition.the_user_verifies_the_data_is_updated()"
});
formatter.result({
  "duration": 89351535,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Check for Active and completed tab",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;check-for-active-and-completed-tab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "the user retrieves the list count and check it matches",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the user clicks Active tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user clicks completed tab",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "verifies the data is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "firstpagestepdefinition.the_user_retrieves_the_list_count()"
});
formatter.result({
  "duration": 21245731,
  "status": "passed"
});
formatter.match({
  "location": "firstpagestepdefinition.the_user_clicks_Active_tab()"
});
formatter.result({
  "duration": 50541867,
  "status": "passed"
});
formatter.match({
  "location": "firstpagestepdefinition.the_user_clicks_completed_tab()"
});
formatter.result({
  "duration": 59797511,
  "status": "passed"
});
formatter.match({
  "location": "firstpagestepdefinition.verifies_the_data_is_empty()"
});
formatter.result({
  "duration": 66414996,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Edit todo list",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;edit-todo-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "the user doubleclicks and edits todo",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "verifies the todolist is updated",
  "keyword": "And "
});
formatter.match({
  "location": "firstpagestepdefinition.the_user_doubleclicks_and_edits_todo()"
});
formatter.result({
  "duration": 246580059,
  "status": "passed"
});
formatter.match({
  "location": "firstpagestepdefinition.verifies_the_todolist_is_updated()"
});
formatter.result({
  "duration": 20947064,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Toggle todo list check",
  "description": "",
  "id": "in-order-to-remember-the-things-i-want-to-do,-as-a-todo-mvc-user,-i-want-to-manage-my-todo-list;toggle-todo-list-check",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "the user clicks the toggle icon",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "verify the todo is marked completed",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "click the toggle icon again",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "verify the todo items are still active",
  "keyword": "Then "
});
formatter.match({
  "location": "firstpagestepdefinition.the_user_clicks_the_toggle_icon()"
});
formatter.result({
  "duration": 79511395,
  "status": "passed"
});
formatter.match({
  "location": "firstpagestepdefinition.verify_the_todo_is_marked_completed()"
});
formatter.result({
  "duration": 14902369,
  "status": "passed"
});
formatter.match({
  "location": "firstpagestepdefinition.click_the_toggle_icon_again()"
});
formatter.result({
  "duration": 52241736,
  "status": "passed"
});
formatter.match({
  "location": "firstpagestepdefinition.verify_the_todo_items_are_still_active()"
});
formatter.result({
  "duration": 809764850,
  "status": "passed"
});
});